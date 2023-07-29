// SPDX-License-Identifier: AGPL-3.0-only

/*

website: https://meowl.xyz
twitter: https://twitter.com/meowlxyz
telegram: https://t.me/meowlxyz
discord: https://discord.meowl.xyz

*/

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./interfaces/IUniswapV2Factory.sol";
import "./interfaces/IUniswapV2Pair.sol";
import "./interfaces/IUniswapV2Router02.sol";

contract Meowl is ERC20, Ownable {
    using SafeMath for uint256;

    event SwapBackSuccess(
        uint256 tokenAmount,
        uint256 ethAmountReceived,
        bool success
    );

    bool private swapping;

    address public rewardSplitter;
    address public devWallet;
    address public lpWallet;

    uint256 _totalSupply = 15_000_000 * 1e18;

    uint256 public maxTransactionAmount = (_totalSupply * 10) / 1000;
    uint256 public swapTokensAtAmount = (_totalSupply * 10) / 10000;
    uint256 public maxWallet = (_totalSupply * 10) / 1000;

    bool public limitsInEffect = true;
    bool public tradingActive = false;
    bool public swapEnabled = false;

    uint256 public buyFees = 5;
    uint256 public sellFees = 5;

    uint256 public revshareAmount = 20;
    uint256 public lpAmount = 20;
    uint256 public devAmount = 60;

    IUniswapV2Router02 public uniswapV2Router;
    address public uniswapV2Pair;

    mapping(address => bool) private _isExcludedFromFees;
    mapping(address => bool) public _isExcludedMaxTransactionAmount;
    mapping(address => bool) public automatedMarketMakerPairs;

    constructor() ERC20("Meowl", "MEOWL") {
        excludeFromFees(owner(), true);
        excludeFromFees(address(this), true);

        excludeFromMaxTransaction(owner(), true);
        excludeFromMaxTransaction(address(this), true);

        _mint(owner(), 14_985_000 * 1e18);
        _mint(address(this), 15_000 * 1e18);
    }

    receive() external payable {}

    function enableTrading() external onlyOwner {
        tradingActive = true;
        swapEnabled = true;
    }

    function removeLimits() external onlyOwner {
        limitsInEffect = false;
    }

    function reduceFees(uint buyFees_, uint sellFees_) external onlyOwner {
        require(
            buyFees_ < buyFees && sellFees_ < sellFees,
            "MEOWL/REDUCE_ONLY"
        );

        buyFees = buyFees_;
        sellFees = sellFees_;
    }

    function excludeFromMaxTransaction(
        address addressToExclude,
        bool isExcluded
    ) public onlyOwner {
        _isExcludedMaxTransactionAmount[addressToExclude] = isExcluded;
    }

    function excludeFromFees(address account, bool excluded) public onlyOwner {
        _isExcludedFromFees[account] = excluded;
    }

    function setAutomatedMarketMakerPair(
        address pair,
        bool value
    ) public onlyOwner {
        require(
            pair != uniswapV2Pair,
            "The pair cannot be removed from automatedMarketMakerPairs"
        );
        _setAutomatedMarketMakerPair(pair, value);
    }

    function addLiquidity() external payable onlyOwner {
        uniswapV2Router = IUniswapV2Router02(
            0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
        );
        excludeFromMaxTransaction(address(uniswapV2Router), true);
        _approve(address(this), address(uniswapV2Router), totalSupply());

        uniswapV2Pair = IUniswapV2Factory(uniswapV2Router.factory()).createPair(
            address(this),
            uniswapV2Router.WETH()
        );

        excludeFromMaxTransaction(address(uniswapV2Pair), true);
        _setAutomatedMarketMakerPair(address(uniswapV2Pair), true);

        uniswapV2Router.addLiquidityETH{value: msg.value}(
            address(this),
            15_000 * 1e18,
            0,
            0,
            owner(),
            block.timestamp
        );
    }

    function _setAutomatedMarketMakerPair(address pair, bool value) private {
        automatedMarketMakerPairs[pair] = value;
    }

    function updateFeeWallet(
        address rewardSplitter_,
        address devWallet_,
        address lpWallet_
    ) public onlyOwner {
        devWallet = devWallet_;
        rewardSplitter = rewardSplitter_;
        lpWallet = lpWallet_;

        excludeFromFees(rewardSplitter, true);
        excludeFromFees(devWallet, true);
        excludeFromFees(lpWallet, true);

        excludeFromMaxTransaction(rewardSplitter, true);
        excludeFromMaxTransaction(devWallet, true);
        excludeFromMaxTransaction(lpWallet, true);
    }

    function isExcludedFromFees(address account) public view returns (bool) {
        return _isExcludedFromFees[account];
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");
        require(amount > 0, "Transfer amount must be greater than zero");

        if (limitsInEffect) {
            if (
                from != owner() &&
                to != owner() &&
                to != address(0) &&
                to != address(0xdead) &&
                !swapping
            ) {
                if (!tradingActive) {
                    require(
                        _isExcludedFromFees[from] || _isExcludedFromFees[to],
                        "Trading is not enabled yet."
                    );
                }

                //when buy
                if (
                    automatedMarketMakerPairs[from] &&
                    !_isExcludedMaxTransactionAmount[to]
                ) {
                    require(
                        amount <= maxTransactionAmount,
                        "Buy transfer amount exceeds the maxTransactionAmount."
                    );
                    require(
                        amount + balanceOf(to) <= maxWallet,
                        "Max wallet exceeded"
                    );
                }
                //when sell
                else if (
                    automatedMarketMakerPairs[to] &&
                    !_isExcludedMaxTransactionAmount[from]
                ) {
                    require(
                        amount <= maxTransactionAmount,
                        "Sell transfer amount exceeds the maxTransactionAmount."
                    );
                } else if (!_isExcludedMaxTransactionAmount[to]) {
                    require(
                        amount + balanceOf(to) <= maxWallet,
                        "Max wallet exceeded"
                    );
                }
            }
        }

        if (
            swapEnabled &&
            !swapping &&
            !automatedMarketMakerPairs[from] &&
            !_isExcludedFromFees[from] &&
            !_isExcludedFromFees[to]
        ) {
            swapping = true;
            swapBack();
            swapping = false;
        }

        bool takeFee = !swapping;

        if (_isExcludedFromFees[from] || _isExcludedFromFees[to]) {
            takeFee = false;
        }

        uint256 fees = 0;

        if (takeFee) {
            if (automatedMarketMakerPairs[to] && sellFees > 0) {
                fees = amount.mul(sellFees).div(100);
            } else if (automatedMarketMakerPairs[from] && buyFees > 0) {
                fees = amount.mul(buyFees).div(100);
            }

            if (fees > 0) {
                super._transfer(from, address(this), fees);
            }
            amount -= fees;
        }
        super._transfer(from, to, amount);
    }

    function swapTokensForEth(uint256 tokenAmount) private {
        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = uniswapV2Router.WETH();
        _approve(address(this), address(uniswapV2Router), tokenAmount);

        uniswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount,
            0,
            path,
            address(this),
            block.timestamp
        );
    }

    function swapBack() private {
        uint256 contractBalance = balanceOf(address(this));
        bool success;
        if (contractBalance == 0) {
            return;
        }
        if (contractBalance >= swapTokensAtAmount) {
            uint256 amountToSwapForETH = swapTokensAtAmount;

            swapTokensForEth(amountToSwapForETH);

            uint256 amountEthToSend = address(this).balance;

            uint256 amountToRevshare = amountEthToSend.mul(revshareAmount).div(
                100
            );

            uint256 amountToLp = amountEthToSend.mul(lpAmount).div(100);

            uint256 amountToDev = amountEthToSend.sub(
                amountToRevshare + amountToLp
            );

            (success, ) = address(rewardSplitter).call{value: amountToRevshare}(
                ""
            );

            (success, ) = address(lpWallet).call{value: amountToLp}("");

            (success, ) = address(devWallet).call{value: amountToDev}("");

            emit SwapBackSuccess(amountToSwapForETH, amountEthToSend, success);
        }
    }
}

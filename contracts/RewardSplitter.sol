// SPDX-License-Identifier: AGPL-3.0-only

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./interfaces/IWETH.sol";
import "./interfaces/IRewardsDistribution.sol";

pragma solidity ^0.8.16;

contract RewardSplitter is Ownable {
    using SafeERC20 for IERC20;

    address public stakingPublic;
    address public stakingVested;

    IERC20 public meowl;
    IERC20 public vmeowl;
    IWETH public immutable weth;

    constructor(IWETH weth_) {
        weth = weth_;
    }

    receive() external payable {}

    function release() external onlyOwner {
        weth.deposit{value: address(this).balance}();

        uint256 publicStaked = meowl.balanceOf(stakingPublic);
        uint256 privateStaked = meowl.balanceOf(stakingVested);
        uint256 totalStaked = publicStaked + privateStaked;

        uint256 publicShares = (publicStaked / totalStaked) * 10_000;

        uint256 totalRewards = weth.balanceOf(address(this));

        uint256 publicRewards = (totalRewards * publicShares) / 10_000;
        uint256 privateRewards = totalRewards - publicRewards;

        weth.transfer(stakingPublic, publicRewards);

        IRewardsDistribution(stakingPublic).notifyRewardAmount(publicRewards);

        weth.transfer(stakingVested, privateRewards);

        IRewardsDistribution(stakingVested).notifyRewardAmount(privateRewards);
    }

    function recover(address token) external onlyOwner {
        if (token == address(0)) {
            bool success;
            (success, ) = address(msg.sender).call{
                value: address(this).balance
            }("");
            return;
        } else {
            IERC20(token).safeTransfer(
                msg.sender,
                IERC20(token).balanceOf(address(this))
            );
        }
    }

    function setConfig(
        address stakingPublic_,
        address stakingVested_,
        IERC20 meowl_,
        IERC20 vmeowl_
    ) external onlyOwner {
        stakingPublic = stakingPublic_;
        stakingVested = stakingVested_;
        meowl = meowl_;
        vmeowl = vmeowl_;
    }
}

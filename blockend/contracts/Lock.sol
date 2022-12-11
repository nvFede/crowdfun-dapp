// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CrowdFun {

    struct Campaign {
        address owner;
        string title;
        string description;
        string iamge;
        uint target;
        uint deadline;
        uint collected;
        address[] funders;
        uint[] amount;
    }

    uint public constant MINIMUM_FUNDING_AMOUNT = '0.1 ether';

    mapping ( uint => Campaign) public campaigns;

    uint public totalCampaigns = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        string memory _iamge,
        uint _target,
        uint _deadline,
        uint _collected
    ) public returns (uint) {
        Campaign storage campaign = campaigns[totalCampaigns];
        require(campaign.deadline < block.timestamp, "deadline must be a date in the future");
        campaign.owner = _owner;
        campaign.title =         _title;
        campaign.description =         _description;
        campaign.iamge =         _iamge;
        campaign.target =         _target;
        campaign.deadline =         _deadline;
        campaign.collected =         _collected;

        tatalCampaigns++;
        return totalCampaigns;
    }

    function fundCampaign(uint _id) public payable{
        require(msg.value > MINIMUM_FUNDING_AMOUNT, "You need to deposit MINIMUM_FUNDING_AMOUNT");
        uint amount = msg.value;
        Campaign storage campaign = campaigns[_id];
        campaign.funders.push(msg.sender);
        campaign.amount.push(amount);
        (bool sent) = payable(campaign.owner).call{value:amount}("");
        if ( sent) {
            campaign.collected = campaign.collected + amount;
        }
    }
    function getFunders(uint _id) public view returns ( address[] memory, uint[] memory) {
        return (campaigns[_id].funders, campaigns[_id].amount);
    }
    funciton getCampaigns() public view returns(Campaign[] memory){

        Campaign[] memory allCampaigns = new Campaign[](totalCampaigns);
        for (uint256 index = 0; index < totalCampaigns; index++) {
            Campaign storage item = campaign[index];
            allCampaigns[index] = item;
        }
        return allCampaigns;
    }

}
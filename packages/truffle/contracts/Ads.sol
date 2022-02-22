// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Ads {
    struct Ad {
        uint256 id;
        string title;
        string imageCID;
        string description;
        string siteUrl;
        address owner;
        uint256 price;
    }
    mapping(uint256 => Ad) public ads;
    uint256[] public ids;

    uint256 public lastId;

    constructor(uint256 length) {
        expand(length);
    }

    function getAd(uint256 id) public view returns (Ad memory) {
        return ads[id];
    }

    function getAds() public view returns (Ad[] memory) {
        Ad[] memory res = new Ad[](lastId);

        for (uint256 i = 0; i < lastId; i++) {
            uint256 id = ids[i];
            Ad memory ad = ads[id];
            res[i] = ad;
        }

        return res;
    }

    function buy(
        uint256 id,
        string memory title,
        string memory imageCID,
        string memory description,
        string memory siteUrl
    ) public payable {
        require(msg.value > ads[id].price);
        Ad memory newAd = Ad(
            id,
            title,
            imageCID,
            description,
            siteUrl,
            msg.sender,
            msg.value
        );
        ads[id] = newAd;
    }

    function expand(uint256 length) public {
        uint256 start = lastId + 1;
        uint256 end = start + length;
        for (uint256 i = start; i < end; i++) {
            ids.push(i);
            ads[i].id = i;
            lastId++;
        }
    }
}

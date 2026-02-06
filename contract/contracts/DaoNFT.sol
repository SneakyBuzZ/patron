// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DaoNFT is ERC721, Ownable {
    uint256 private _nextTokenId;

    mapping(uint256 => string) private _tokenMetadataCID;
    mapping(uint256 => address) public daoCreator;
    mapping(uint256 => string) public roleNFTType;

    event DaoMinted(
        uint256 indexed tokenId,
        address indexed creator,
        string metadataCID
    );

    constructor() ERC721("Dao NFT", "DAONFT") Ownable(msg.sender) {}

    function mintDao(string calldata metadataCID)
        external
        returns (uint256)
    {
        uint256 tokenId = ++_nextTokenId;

        _safeMint(msg.sender, tokenId);

        _tokenMetadataCID[tokenId] = metadataCID;
        daoCreator[tokenId] = msg.sender;

        emit DaoMinted(tokenId, msg.sender, metadataCID);

        return tokenId;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(ownerOf(tokenId) != address(0), "Not exist");

        return string(
            abi.encodePacked("ipfs://", _tokenMetadataCID[tokenId])
        );
    }

    function mintRoleMembershipNFT(address to, uint256 tokenId, string memory roleType) external onlyOwner {
        _safeMint(to, tokenId);
        roleNFTType[tokenId] = roleType;
    }
}
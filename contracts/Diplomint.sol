// SPDX-License-Identifier: UNLICENSED
// npx hardhat clean
// npx hardhat compile
// npx hardhat run scripts/deploy_contract.js --network sepolia 
// npx hardhat verify --network sepolia <contract_addy>

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Arrays.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract Diplomint is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    struct Metadata {
        string sName;
        string major;
        string gradDate;
        string college;
    }

// CONSTRUCTOR ///////////////////////////////////////////////
    // creates a whitelist of addresses that can interact with the contract, makes smart contract owner whitelisted
    address[] private whitelist;
    constructor() ERC721("Diploma", "DPLMA") {
        whitelist.push(owner());
    }

    // Maps metadata
    mapping (uint256 => Metadata) private tokenMetadata;

// EVENTS ///////////////////////////////////////////////    
    event Mint(address indexed owner, uint256 indexed tokenId);


// FUNCTIONS ///////////////////////////////////////////////
    // THIS IS THE MAIN FUNCTION FOR MINTING A NEW DIPLOMA
    function mintWithMetadata(address to, string memory sName, string memory major, string memory gradDate, string memory college) external {
        require(isWhitelisted(msg.sender), "Organization has not been approved to mint diplomas");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        setMetadata(tokenId, sName, major, gradDate, college);
        emit Mint(to, tokenId);
    }

    ///// METADATA FUNCTIONS /////
    // sets the metadata for the diploma, only used in the mint function
    function setMetadata(uint256 tokenId, string memory sName, string memory major, string memory gradDate, string memory college) private {
        Metadata memory metadata = Metadata(sName, major, gradDate, college);
        tokenMetadata[tokenId] = metadata;
    }

    // allows people to call the data from the contract
    function getMetadata(uint256 tokenId) external view returns (Metadata memory) {
        return tokenMetadata[tokenId]; }

    ///// WHITELIST FUNCTIONS /////
    // function to add a new school that can mint diplomas
    function addToWhitelist(address _address) public onlyOwner {
        for (uint256 i = 0; i < whitelist.length; i++) {
            require(whitelist[i] != _address, "Address is already in the whitelist");
        }
        whitelist.push(_address);
    }

    // remove a school if needed
        function removeFromWhitelist(address _address) public onlyOwner{
        uint256 index = 0;
        for (uint256 i = 0; i < whitelist.length; i++) {
            if (whitelist[i] == _address) {
                index = i;
                break;
            }
        }
        delete whitelist[index];
    }

    // check if a school's address is on the whitelist
        function isWhitelisted(address _address) public view returns (bool) {
        for (uint256 i = 0; i < whitelist.length; i++) {
            if (whitelist[i] == _address) {
                return true;
            }
        }
        return false;
    }

// BULLSHIT /////////////////////////////////////////////////////////////////////////////////
    // required override from solidity
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) onlyOwner{
        require(isWhitelisted(msg.sender), "Organization has not been approved to burn diplomas");
        super._burn(tokenId);
    }

    // removing inherited transfer functions from Open Zeppelin, we want the NFT to be non-transferable
    function transferFrom(address from, address to, uint256 tokenId) public override {}
    function safeTransferFrom(address from, address to, uint256 tokenId) public override {}
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public override {}


    // might need 'tokenURI' function for returning json of images for opensea if we go that way eventually
    // this might be bs though, I'm not sure
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

}
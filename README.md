# Diplomint

Diplomint is an infrastructure for academic institutions to create digitally verifiable academic credentials using blockchain technology. It allows institutions to mint NFT (Non-Fungible Token) diplomas to students' Ethereum wallets, store diploma metadata on-chain, and query the smart contract using GraphQL.

## System Architecture

The Diplomint system architecture consists of a React app front-end, a smart contract deployed on the Ethereum blockchain, and a subgraph for indexing and querying the smart contract.

### Smart Contract
The smart contract is implemented in Solidity and is based on the ERC721 and ERC721URIStorage contracts from the OpenZeppelin library. It also inherits from the Ownable contract to implement ownership and access control.

#### Metadata

The smart contract defines a Metadata struct that stores the metadata for each diploma, including student name, major, graduation date, and college.

#### Minting

The main function for minting a new diploma is the mintWithMetadata function, which can be called by whitelisted institutions. It mints a new NFT diploma to the specified Ethereum wallet address, sets the metadata for the diploma, and emits a Mint event.

#### Metadata Functions

The smart contract provides functions for setting and getting metadata for a diploma. The setMetadata function is called during the minting process to set the metadata for a newly minted diploma. The getMetadata function allows anyone to retrieve the metadata for a diploma by its token ID.

#### Whitelist Functions

The smart contract implements a whitelist of addresses that are allowed to interact with the contract. The addToWhitelist and removeFromWhitelist functions allow the contract owner to add or remove addresses from the whitelist, respectively. The isWhitelisted function allows anyone to check if an address is whitelisted.

## React App Front-End
The React app front-end allows institutions to connect their Ethereum wallet in their browser if they are on the whitelist of verified institutions. Once connected, institutions can mint NFT diplomas to students' wallet addresses and search for diplomas on the site. Students can also share a link to their diploma page, which is a dynamic endpoint.

## NFTs on Ethereum Blockchain
When a diploma is minted, an NFT is created on the Ethereum blockchain using the ERC721 standard. The metadata for the diploma, including the student name, major, graduation date, and college, is stored on-chain.

## Subgraph
The smart contract is indexed by a subgraph, which allows for efficient querying of the contract using GraphQL. This is used in the search function and the dynamic endpoint for shareable URLs in the React app front-end.
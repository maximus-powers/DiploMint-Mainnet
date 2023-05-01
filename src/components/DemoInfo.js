import React from 'react';

const DemoInfo = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-dark text-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <section className="hero-section text-center py-5">
              <h1 className="mb-3">Ethereum Mainnet Demo</h1>
            </section>
          </div>
        </div>
      </div>

      {/* Mint Section */}
      <div className="container-fluid bg-harvard text-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <section className="about-section py-5">
              <h2 className="py-3">Minting</h2>
              <ol>
                <li>Connect your Web3 wallet (e.g. MetaMask). Don't worry, nothing can execute without your permission.</li>
                <li>Only institutional wallet addresses added to the smart contract's whitelist can mint NFTs.</li>
                <li>The metadata needed to mint is just an example, but shows what kind of data can be stored in the NFT.</li>
                </ol>
                <p>Ideally, institutions could "mass mint," which would eliminate the need for them to enter metadata by hand. They could have a driver program integrate with their database that calls the smart contract directly.</p>
                <p>Degree information is stored as on-chain metadata.</p>
                <a href="/mint" className="text-light">Check out the Mint Page</a>
            </section>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container-fluid bg-harvard text-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <section className="about-section py-5">
              <h2 className="py-3">Searching</h2>
              <ol>
                <li>Search through diplomas minted by the smart contract. By definition, all the results are verified.</li>
                <li>I only minted one on the Mainnet as an example (costs real ETH), so try searching my name: Maximus Powers.</li>
                <li>Alternatively, search by graduation year, institution, or major.</li>
                <li>Click "View Diploma" to reach a dynamic endpoint that graduates can share as a link to their verified degree.</li>
                </ol>
                <p>All diplomas minted by the smart contract are indexed by a subgraph. GraphQL can be used to query the api for the metadata.</p>
                <a href="/search" className="text-light">Take the Search Page for a Spin</a>
            </section>
          </div>
        </div>
      </div>

      {/* Contribute Section */}
      <div className="container-fluid bg-harvard text-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <section className="contribute-section text-center py-5">
              <h2>The Code</h2>
              <p>If you'd like to check out the code, take a look at our GitHub Repo. It's not intended for deployment, but the code offers a good foundation for implementation.</p>
              <a href="https://github.com/maximus-powers/DiploMint-Mainnet" className="btn btn-light" target="_blank" rel="noopener noreferrer">Contribute on GitHub</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoInfo;
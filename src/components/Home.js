import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-dark text-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <section className="hero-section text-center py-5">
              <h1 className="mb-3">Welcome to DiploMint</h1>
              <p className="lead">
                DiploMint is an open source project that demonstrates the implementation of soul-bound tokens for digitally verifiable academic credentials.
              </p>
              <a href="/demo-info" className="btn bg-light mt-3">Live Demo</a>
            </section>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid bg-harvard text-light">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <section className="about-section text-center py-5">
              <h2>Digitally Verifiable Academic Credentials</h2>
              <p>
                In today's digital world, traditional paper-based diplomas can be easily lost, forged, or tampered with. Online digitally verifiable academic credentials, on the other hand, are immutable and can be instantly verified, making them more reliable, secure, and convenient.
              </p>
              <p>
                DiploMint is meant to showcase infrastructure that universities can use to mint NFT-based diplomas for their students, providing them with a unique and decentralized way to showcase their achievements in the digital space.
              </p>
              <p>Check out this article I wrote:</p><a href="https://medium.com/@maximuspowers.eth/why-are-universities-still-using-paper-diplomas-95850f0a499" className="text-light" target="_blank">Why Are Universities Still Using Paper Diplomas?</a>
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

export default Home;

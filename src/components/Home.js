import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center mt-3">
        <h1>Our Mission: Mint NFT Diplomas for Universities</h1>
        <p>
          Welcome to our open source project that aims to revolutionize academic credentials by leveraging the power of blockchain and NFTs. We believe that digitally verifiable diplomas will enhance trust, security, and accessibility in the field of education.
        </p>
      </section>

      {/* About Section */}
      <section className="about-section text-center mt-3">
        <h2>About Online Digitally Verifiable Academic Credentials</h2>
        <p>
          In today's digital world, traditional paper-based diplomas can be easily lost, forged, or tampered with. Online digitally verifiable academic credentials, on the other hand, are immutable and can be instantly verified, making them more reliable, secure, and convenient. With our open source project, universities can mint NFT-based diplomas for their students, providing them with a unique and decentralized way to showcase their achievements in the digital space.
        </p>
      </section>

      {/* Contribute Section */}
      <section className="contribute-section text-center mt-3">
        <h2>Contribute to Our Open Source Project</h2>
        <p>
          We are actively developing our project on GitHub and would love to have your contribution! If you are interested in supporting our mission and making a difference in the field of education, feel free to check out our GitHub repository and get involved.
        </p>
        <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">Contribute on GitHub</a>
      </section>
    </div>
  );
};

export default Home;

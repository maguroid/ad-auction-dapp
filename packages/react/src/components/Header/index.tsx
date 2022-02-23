function Header() {
  return (
    <header className="container-fluid">
      <hgroup>
        <h1>Ad Auction.eth</h1>
        <h2>React with ethers.js</h2>
      </hgroup>
      <p>You can overwrite these ads. Try it !</p>
      <p>
        <mark>
          Please make sure that your metamask wallet is{" "}
          <a
            href="https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d"
            target="_blank"
            rel="noreferrer"
          >
            connected Ropsten Network.
          </a>
        </mark>
      </p>
    </header>
  );
}

export default Header;

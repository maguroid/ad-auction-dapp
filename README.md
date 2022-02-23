# Ad Auction Dapp.etr

simple ad buying and showing platform with react + solidity

## Requirement

- Metamask: You need to install Metamask extension or Metamask mobile App

## Getting started

### Visiting site

This App is deployed to github pages
Please visit the site below.

https://maguroid.github.io/ad-auction-dapp/

> :warning: It is set up for Ropsten Test Network.
> By default, it automatically send request to change network.
> But in case no request is send, you need to change network manually.

If you still have no ether on Ropsten, [get ether from faucet](https://faucet.dimensions.network/)

### Interact with Locally

You can also interact with local blockchain network.
It takes few minutes. Check following steps.

#### 1. launch your local node

Hit `yarn chain` on project root directory.
This command launch local blockchain server with [ganache](https://trufflesuite.com/ganache/index.html).
You can also use GUI version to launch a node.

#### 2. Deploy your smart-contract to the local node.

`yarn migrate` on project root.
This command compile contract files (`/packages/truffle/contracts/*.sol`) and deploy contract to Your local network.

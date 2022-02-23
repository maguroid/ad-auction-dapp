import { useState } from "react";
import { BigNumberish, ethers } from "ethers";
import { MetamaskState } from "types/metamask";

export const AVAILABLE_CHAIN_IDS = {
  ropsten: "3",
  localhost: "1337",
} as const;

export const AVAILABLE_NETWORK_IDS = {
  ropsten: "3",
  localhost: "1337",
} as const;

export const useMetamask = () => {
  const [provider, setProvider] = useState(window.ethereum);
  const [currentAccount, setCurrentAccount] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [web3] = useState(new ethers.providers.Web3Provider(provider, "any"));
  const [signer, setSigner] = useState(web3.getSigner());
  const [chainId, setChainId] = useState(
    process.env.REACT_APP_DEFAULT_CHAIN_ID
  );
  const [networkId, setNetworkId] = useState(
    process.env.REACT_APP_DEFAULT_NETWORK_ID
  );

  const metamaskState: MetamaskState = {
    provider,
    signer,
    currentAccount,
    isConnecting,
    isConnected,
    chainId,
    networkId,
  };

  const connectRequest = async () => {
    setIsConnecting(true);
    await provider.send("eth_requestAccounts", []);
    setIsConnecting(false);
  };

  const setup = async () => {
    // set default network
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x" + Number(chainId).toString(16) }],
    });
    provider.on("accountsChanged", onAccountsChanged);
    provider.on("chainChanged", onChainChanged);

    const accounts = await web3.listAccounts();

    if (accounts.length === 0) {
      console.info("Please Connect to Metamask");
      localStorage.removeItem("metamaskState");
    } else if (currentAccount !== accounts[0]) {
      setProvider(provider);
      setIsConnected(true);
      setCurrentAccount(accounts[0]);
      setChainId(chainId);
      localStorage.setItem("metamaskState", JSON.stringify(metamaskState));
    }

    return () => {
      if (isConnected) {
        provider.removeListener("accountsChanged", onAccountsChanged);
        provider.removeListener("chainChanged", onChainChanged);
      }
    };
  };

  const onAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      console.warn("No Accounts were found");
      setIsConnected(false);
      setCurrentAccount("");
    } else if (currentAccount !== accounts[0]) {
      setCurrentAccount(accounts[0]);
      setSigner(web3.getSigner(accounts[0]));
    }
    console.info("accounts changed", accounts[0]);
  };

  const onChainChanged = (_chainId: BigNumberish) => {
    const decimal_chain = Number(_chainId).toString();

    const isAvailableChain = Object.values(AVAILABLE_CHAIN_IDS).find(
      (v) => v === decimal_chain
    );

    if (isAvailableChain) {
      console.info("chain changed", decimal_chain);
      setChainId(() => decimal_chain);

      // in localhost, chainID and networkID are different
      provider
        .send("net_version", [])
        .then((res: any) => setNetworkId(res.result));
    } else {
      console.error("This network is not available in this app");
    }
  };

  const onUnmount = () => {
    if (isConnected) {
      provider.removeListener("accountsChanged", onAccountsChanged);
      provider.removeListener("chainChanged", onChainChanged);
    }
  };

  return {
    metamaskState,
    web3,
    connectRequest,
    setup,
    onUnmount,
  };
};

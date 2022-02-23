import { useState } from "react";
import { BigNumber, BigNumberish, ethers } from "ethers";

export type MetamaskState = {
  provider: any;
  currentAccount: string;
  isConnecting: boolean;
  isConnected: boolean;
  chainId: string;
};

export const useMetamask = () => {
  const [provider, setProvider] = useState(window.ethereum);
  const [currentAccount, setCurrentAccount] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [web3] = useState(new ethers.providers.Web3Provider(provider));
  const [chainId, setChainId] = useState("1337");

  const metamaskState: MetamaskState = {
    provider,
    currentAccount,
    isConnecting,
    isConnected,
    chainId,
  };

  const connectRequest = async () => {
    setIsConnecting(true);
    await provider.send("eth_requestAccounts", []);
    setIsConnecting(false);
  };

  const setup = async () => {
    provider.on("accountsChanged", onAccountsChanged);
    provider.on("chainChanged", onChainChanged);

    const accounts = await web3.listAccounts();
    const { chainId } = await web3.getNetwork();

    if (accounts.length === 0) {
      console.info("Please Connect to Metamask");
      localStorage.removeItem("metamaskState");
    } else if (currentAccount !== accounts[0]) {
      setProvider(provider);
      setIsConnected(true);
      setCurrentAccount(accounts[0]);
      setChainId(chainId.toString());
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
    }
    console.info("accounts changed", accounts[0]);
  };

  const onChainChanged = (chainId: BigNumberish) => {
    const decimalId = BigNumber.from(chainId).toString();
    console.info("chain changed", decimalId);
    setChainId(decimalId);
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

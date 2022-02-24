import { useState } from "react";
import { BigNumberish, providers } from "ethers";
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
  const [isInstalled, setIsInstalled] = useState(false);
  const [provider, setProvider] = useState<any>(undefined);
  const [web3, setWeb3] = useState<providers.Web3Provider | undefined>(
    undefined
  );
  const [signer, setSigner] = useState<providers.JsonRpcSigner | undefined>(
    web3?.getSigner()
  );

  const [currentAccount, setCurrentAccount] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  // const [web3] = useState(new providers.Web3Provider(provider, "any"));
  const [chainId, setChainId] = useState(
    process.env.REACT_APP_DEFAULT_CHAIN_ID
  );
  const [networkId, setNetworkId] = useState(
    process.env.REACT_APP_DEFAULT_NETWORK_ID
  );

  const metamaskState: MetamaskState = {
    isInstalled,
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
    await provider.request({
      method: "eth_requestAccounts",
      params: [],
    });
    setIsConnecting(false);
  };

  const setupProvider = async () => {
    setIsInstalled(!!window.ethereum);
    setProvider(() => window.ethereum);
    setWeb3(new providers.Web3Provider(provider));
  };

  const setupChain = async () => {
    // set default network
    setSigner(web3?.getSigner());

    await provider?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x" + Number(chainId).toString(16) }],
    });
    provider?.on("accountsChanged", onAccountsChanged);
    provider?.on("chainChanged", onChainChanged);

    const accounts = (await web3?.listAccounts()) ?? [];

    if (accounts.length === 0) {
      console.info("Please Connect to Metamask");
    } else if (currentAccount !== accounts[0]) {
      setProvider(provider);
      setIsConnected(true);
      setCurrentAccount(accounts[0]);
      setChainId(chainId);
      setNetworkId(networkId);
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
      setSigner(web3?.getSigner(accounts[0]));
    }
    console.info("accounts changed", accounts[0]);
  };

  const onChainChanged = (_chainId: BigNumberish) => {
    const decimal_chain = Number(_chainId).toString();

    const isAvailableChain = Object.values(AVAILABLE_CHAIN_IDS).find(
      (v) => v === decimal_chain
    );

    console.info("chain changed", decimal_chain);

    provider
      .request({
        method: "net_version",
        params: [],
      })
      .then((network: any) => {
        setNetworkId(network);
      });
    if (!isAvailableChain) {
      console.error("This network is not available in this app");
      setChainId(undefined);
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
    setupProvider,
    setupChain,
    onUnmount,
  };
};

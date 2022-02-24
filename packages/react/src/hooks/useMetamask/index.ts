import { useState, useEffect, useCallback } from "react";
import { BigNumberish, providers } from "ethers";
import { MetamaskState } from "types/metamask";
import { useAsync } from "react-use";

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
  const [chainId, setChainId] = useState<string>(
    process.env.REACT_APP_DEFAULT_CHAIN_ID
  );
  const [networkId, setNetworkId] = useState<string>(
    process.env.REACT_APP_DEFAULT_NETWORK_ID
  );

  const requestAccounts = async () => {
    setIsConnecting(true);
    await provider.request({
      method: "eth_requestAccounts",
      params: [],
    });
    setIsConnecting(false);
  };

  useEffect(() => {
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

    provider?.on("accountsChanged", onAccountsChanged);

    return () => {
      provider?.removeListener("accountsChanged", onAccountsChanged);
    };
  }, [provider, currentAccount, web3]);

  useEffect(() => {
    const onChainChanged = (chainId: BigNumberish) => {
      const decimal_chain = Number(chainId).toString();

      const isAvailableChain = Object.values(AVAILABLE_CHAIN_IDS).some(
        (v) => v === decimal_chain
      );

      if (!isAvailableChain) {
        console.error("This network is not available in this app");
      }

      console.info("chain changed", decimal_chain);

      provider
        .request({
          // It need in case chain_id and network_id are different
          method: "net_version",
          params: [],
        })
        .then((network: any) => {
          setNetworkId(network);
          setChainId(decimal_chain);
        });
    };
    provider?.on("chainChanged", onChainChanged);

    return () => {
      provider?.removeListener("chainChanged", onChainChanged);
    };
  }, [provider]);

  useEffect(() => {
    const providerSetup = () => {
      const provider = window.ethereum;
      setIsInstalled(!!provider);
      setProvider(provider);
      setWeb3(new providers.Web3Provider(provider));
    };

    providerSetup();
  }, []);

  const chainSetupState = useAsync(async () => {
    if (provider && web3) {
      const signer = await web3.getSigner();

      await provider?.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + Number(chainId).toString(16) }],
      });

      const accounts = await web3.listAccounts();

      if (accounts.length === 0) {
        console.info("Please Connect to Metamask");
      } else if (currentAccount !== accounts[0]) {
        setIsConnected(true);
        setCurrentAccount(accounts[0]);
        setSigner(signer);
      }
    }
  }, [provider, currentAccount]);

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

  return {
    metamaskState,
    web3,
    requestAccounts,
    chainSetupState,
  };
};

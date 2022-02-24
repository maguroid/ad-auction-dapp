import { AvailableChainId, AvailableNetworkId } from "types/blockchain";
import { providers } from "ethers";

export type MetamaskState = {
  isInstalled: boolean;
  provider: providers.Web3Provider | undefined;
  signer: providers.JsonRpcSigner | undefined;
  currentAccount: string;
  isConnecting: boolean;
  isConnected: boolean;
  chainId: string;
  networkId: string;
};

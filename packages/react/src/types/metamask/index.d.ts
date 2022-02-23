import { AvailableChainId, AvailableNetworkId } from "types/blockchain";
import { Signer } from "ethers";

export type MetamaskState = {
  provider: any;
  signer: Signer;
  currentAccount: string;
  isConnecting: boolean;
  isConnected: boolean;
  chainId: AvailableChainId;
  networkId: AvailableNetworkId;
};

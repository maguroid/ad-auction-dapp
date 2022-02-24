/// <reference types="react-scripts" />

import { AvailableChainId, AvailableNetworkId } from "types/blockchain";
declare global {
  interface Window {
    ethereum: any;
  }

  interface Navigator {
    userAgentData: {
      mobile: boolean;
    };
  }
  declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_CONTRACT_ADDRESS: string;
      REACT_APP_IPFS_HOST: string;
      REACT_APP_IPFS_PORT: number;
      REACT_APP_IPFS_PROTOCOL: string;
      REACT_APP_PINNING_SERVICE: string;
      REACT_APP_PINNING_PROJECT: string;
      REACT_APP_PINNING_SECRET: string;
      REACT_APP_DEFAULT_CHAIN_ID: AvailableChainId;
      REACT_APP_DEFAULT_NETWORK_ID: AvailableNetworkId;
    }
  }
}

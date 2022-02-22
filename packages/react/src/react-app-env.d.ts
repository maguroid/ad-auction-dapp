/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_CONTRACT_ADDRESS: string;
    REACT_APP_IPFS_HOST: string;
    REACT_APP_IPFS_PORT: number;
    REACT_APP_IPFS_PROTOCOL: string;
    REACT_APP_PINNING_SERVICE: string;
    REACT_APP_PINNING_PROJECT: string;
    REACT_APP_PINNING_SECRET: string;
  }
}

interface Window {
  ethereum: any;
}

import {
  AVAILABLE_CHAIN_IDS,
  AVAILABLE_NETWORK_IDS,
} from "context/metamask/useMetamask";

export type AvailableChainProviders = keyof typeof AVAILABLE_CHAIN_IDS;
export type AvailableChainId =
  | typeof AVAILABLE_CHAIN_IDS[AvailableChainProviders]
  | undefined;

export type AvailableNetworkProviders = keyof typeof AVAILABLE_NETWORK_IDS;
export type AvailableNetworkId =
  | typeof AVAILABLE_NETWORK_IDS[AvailableNetworkProviders]
  | undefined;

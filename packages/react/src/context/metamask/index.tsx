import { createContext, useContext } from "react";
import { useMetamask } from "hooks/useMetamask";
import { MetamaskState } from "types/metamask";

import styled from "styled-components";

export const MetamaskContext = createContext<MetamaskState>({
  isInstalled: !!window.ethereum,
  provider: window.ethereum,
  signer: undefined,
  currentAccount: "",
  isConnecting: false,
  isConnected: false,
  chainId: process.env.REACT_APP_DEFAULT_CHAIN_ID,
  networkId: process.env.REACT_APP_DEFAULT_NETWORK_ID,
});

export const useMetamaskCtx = () => {
  return useContext(MetamaskContext);
};

export const MetamaskCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { metamaskState, requestAccounts, chainSetupState } = useMetamask();

  const MetamaskInstalled = () => (
    <MetamaskContext.Provider value={metamaskState}>
      {metamaskState.isConnected ? (
        children
      ) : chainSetupState.loading ? null : chainSetupState.error ? (
        <dialog>
          <article>Error: {chainSetupState.error.message}</article>
        </dialog>
      ) : (
        <Center>
          <Button
            area-busy={`${metamaskState.isConnecting}`}
            onClick={requestAccounts}
          >
            Connect Your Wallet
          </Button>
        </Center>
      )}
    </MetamaskContext.Provider>
  );

  const MetamaskNotInstalled = () => (
    <Center>
      <ButtonLink
        role="button"
        href="https://metamask.app.link/dapp/maguroid.github.io/ad-auction-dapp/"
      >
        Please install Metamask
      </ButtonLink>
    </Center>
  );

  return metamaskState.isInstalled ? (
    <MetamaskInstalled />
  ) : (
    <MetamaskNotInstalled />
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Button = styled.button`
  display: inline-block;
  width: auto;
`;

const ButtonLink = styled.a`
  display: inline-block;
  width: auto;
`;

import { createContext, useContext, useEffect } from "react";
import { useAsync } from "react-use";
import { useMetamask } from "context/metamask";
import { MetamaskState } from "types/metamask";

import styled from "styled-components";

export const MetamaskContext = createContext<MetamaskState>({
  isInstalled: !!window.ethereum,
  provider: window.ethereum,
  signer: undefined,
  currentAccount: "",
  isConnecting: false,
  isConnected: false,
  chainId: "3",
  networkId: "3",
});

export const useMetamaskCtx = () => {
  return useContext(MetamaskContext);
};

export const MetamaskCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    metamaskState,
    connectRequest,
    setupProvider,
    setupChain,
    onUnmount,
  } = useMetamask();

  const providerState = useAsync(setupProvider, [metamaskState.isInstalled]);
  const chainState = useAsync(setupChain, [providerState]);

  useEffect(() => {
    return onUnmount;
  });

  const MetamaskInstalled = () => (
    <MetamaskContext.Provider value={metamaskState}>
      {metamaskState.isConnected ? (
        children
      ) : chainState.loading ? null : chainState.error ? (
        <dialog>
          <article>Error: {chainState.error.message}</article>
        </dialog>
      ) : (
        <Center>
          <Button
            area-busy={`${metamaskState.isConnecting}`}
            onClick={connectRequest}
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

import { createContext, useEffect } from "react";
import { useAsync } from "react-use";
import { useMetamask, MetamaskState } from "context/metamask";

import styled from "styled-components";

export const MetamaskContext = createContext<MetamaskState>({
  provider: window.ethereum,
  currentAccount: "",
  isConnecting: false,
  isConnected: false,
  chainId: "-1",
});

export const MetamaskCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { metamaskState, connectRequest, setup, onUnmount } = useMetamask();

  const fetchState = useAsync(setup, [metamaskState.currentAccount]);

  useEffect(() => {
    return onUnmount;
  });

  return (
    <MetamaskContext.Provider value={metamaskState}>
      {metamaskState.isConnected ? (
        children
      ) : fetchState.loading ? null : fetchState.error ? (
        <dialog>
          <article>Error: {fetchState.error.message}</article>
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

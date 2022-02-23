import { createContext, useEffect } from "react";
import { useAsync } from "react-use";
import { useMetamask } from "context/metamask";
import { MetamaskState } from "types/metamask";
import { VoidSigner } from "ethers";

import styled from "styled-components";

export const MetamaskContext = createContext<MetamaskState>({
  provider: window.ethereum,
  signer: new VoidSigner(""),
  currentAccount: "",
  isConnecting: false,
  isConnected: false,
  chainId: "3",
  networkId: "3",
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

import { createContext, useEffect } from "react";
import { useAsync } from "react-use";
import { useMetamask, MetamaskState } from "context/metamask";

const initialState: MetamaskState = {
  provider: window.ethereum,
  currentAccount: "",
  isConnecting: false,
  isConnected: false,
  chainId: -1,
};

export const MetamaskContext = createContext(initialState);

export const MetamaskCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getMetamaskState, connectRequest, setup, onUnmount } = useMetamask();

  const fetchState = useAsync(setup);
  const metamaskState = getMetamaskState();

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
        <button
          area-busy={`${metamaskState.isConnecting}`}
          onClick={connectRequest}
        >
          Connect Your Wallet
        </button>
      )}
    </MetamaskContext.Provider>
  );
};

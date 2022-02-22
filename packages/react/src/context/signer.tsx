import React, { createContext, useEffect, useState } from "react";
import { ethers, Signer } from "ethers";
import { useAsyncFn } from "react-use";

const provider = new ethers.providers.Web3Provider(window.ethereum);

export const SignerContext = createContext<Signer | null>(null);

export const SignerCtxProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [signer, setSigner] = useState(provider.getSigner());
  const [state, fetch] = useAsyncFn(
    async (provider: ethers.providers.Web3Provider) => {
      let address = "";
      try {
        const addresses = await provider.send("eth_requestAccounts", []);
        address = addresses[0];
      } catch (err) {
        console.error("failed to get signer info", err);
      }
      const signer = provider.getSigner(address);
      setSigner(signer);

      localStorage.setItem("address", address);

      return signer;
    }
  );
  useEffect(() => {
    const address = localStorage.getItem("address");

    if (address) setSigner(provider.getSigner(address));
  }, []);

  return (
    <SignerContext.Provider value={signer}>
      {signer._address ? (
        children
      ) : (
        <section className="container">
          <button aria-busy={state.loading} onClick={() => fetch(provider)}>
            {state.loading ? "" : "Connect Your Wallet"}
          </button>
        </section>
      )}
    </SignerContext.Provider>
  );
};

import { useState } from "react";
import { ethers, BigNumberish } from "ethers";
import { Ads__factory } from "types/factories/Ads__factory";
import { Ads } from "types/Ads";
import { useMetamask } from "context/metamask";
import { networks } from "@auction-dapp/truffle/build/contracts/Ads.json";

export type AdBuyingRequest = {
  id: BigNumberish;
  title: string;
  imageCID: string;
  description: string;
  siteUrl: string;
  ether: string;
};

/* TODO: change network dynamically
const NETWORKS = {
  mainnet: "1",
  ropsten: "3",
  rinkeby: "4",
  goerli: "5",
  kotti: "6",
  morder: "7",
  ganache: "5777",
} as const;

type Network = typeof NETWORKS[keyof typeof NETWORKS];
*/

export const useAdsContract = () => {
  const { web3, metamaskState } = useMetamask();
  const signer = web3.getSigner();
  const [adsContract] = useState<Ads>(
    Ads__factory.connect(networks["3"].address, signer)
  );

  const getAds = async () => {
    return await adsContract.getAds();
  };

  const getAd = async (id: BigNumberish) => {
    return await adsContract.getAd(id);
  };

  const buy = async (request: AdBuyingRequest) => {
    try {
      const res = await adsContract.buy(
        request.id,
        request.title,
        request.imageCID,
        request.description,
        request.siteUrl,
        {
          from: metamaskState.currentAccount,
          value: ethers.utils.parseEther(request.ether),
        }
      );
      return res;
    } catch (err) {
      throw err;
    }
  };

  return {
    adsContract,
    getAds,
    getAd,
    buy,
  };
};

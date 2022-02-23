import { useContext, useState, useEffect } from "react";
import { ethers, BigNumberish } from "ethers";
import { Ads__factory } from "types/factories/Ads__factory";
import { Ads } from "types/Ads";
import { MetamaskContext } from "context/metamask";
import { networks } from "@auction-dapp/truffle/build/contracts/Ads.json";

export type AdBuyingRequest = {
  id: BigNumberish;
  title: string;
  imageCID: string;
  description: string;
  siteUrl: string;
  ether: string;
};
export const useAdsContract = () => {
  const metamaskState = useContext(MetamaskContext);
  const [adsContract, setAdsContract] = useState<Ads>(
    Ads__factory.connect(
      networks[metamaskState.networkId].address,
      metamaskState.signer
    )
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

  useEffect(() => {
    setAdsContract(
      Ads__factory.connect(
        networks[metamaskState.networkId].address,
        metamaskState.signer
      )
    );
  }, [metamaskState.networkId, metamaskState.signer]);

  return {
    adsContract,
    getAds,
    getAd,
    buy,
  };
};

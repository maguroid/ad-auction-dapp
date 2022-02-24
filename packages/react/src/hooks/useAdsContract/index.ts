import { useState, useEffect, useMemo } from "react";
import { ethers, BigNumberish } from "ethers";
import { Ads__factory } from "types/factories/Ads__factory";
import { Ads } from "types/Ads";
import { useMetamaskCtx } from "context/metamask";
import { networks } from "@auction-dapp/truffle/build/contracts/Ads.json";
import { AVAILABLE_NETWORK_IDS } from "hooks/useMetamask";

export type AdBuyingRequest = {
  id: BigNumberish;
  title: string;
  imageCID: string;
  description: string;
  siteUrl: string;
  ether: string;
};
const availableIds = Object.values(AVAILABLE_NETWORK_IDS);
export const useAdsContract = () => {
  const { currentAccount, networkId, signer } = useMetamaskCtx();
  const [adsContract, setAdsContract] = useState<Ads | undefined>(undefined);

  const contractAddress = useMemo(() => {
    const jsonKey = availableIds.find((id) => networkId === id);

    if (jsonKey) {
      return networks[jsonKey].address;
    }
  }, [networkId]);

  useEffect(() => {
    const getContract = () => {
      if (contractAddress && signer) {
        setAdsContract(Ads__factory.connect(contractAddress, signer));
      } else {
        setAdsContract(undefined);
      }
    };

    getContract();
  }, [signer, contractAddress]);

  const getAds = async () => {
    return await adsContract?.getAds();
  };

  const getAd = async (id: BigNumberish) => {
    return await adsContract?.getAd(id);
  };

  const buy = async (request: AdBuyingRequest) => {
    try {
      const res = await adsContract?.buy(
        request.id,
        request.title,
        request.imageCID,
        request.description,
        request.siteUrl,
        {
          from: currentAccount,
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

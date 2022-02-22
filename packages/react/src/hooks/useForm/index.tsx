import React, { useState, useEffect } from "react";
import { ipfs } from "utils/ipfs";
import { useAdsContract } from "hooks/useAdsContract";
import { BigNumberish } from "ethers";

interface ClientRequest {
  id: BigNumberish;
  title: string;
  image: File | undefined;
  description: string;
  siteUrl: string;
  ether: string;
}

export const useForm = (id: BigNumberish) => {
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState("");
  const [request, setRequest] = useState<ClientRequest>({
    id,
    title: "",
    image: undefined,
    description: "",
    siteUrl: "",
    ether: "",
  });
  const { buy, getAd } = useAdsContract();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onSubmit");

    if (image === undefined) {
      console.error("Error: image was not selected");
      return;
    }

    const removable = await getAd(request.id);

    try {
      // add image to IPFS
      const { cid } = await ipfs.add(image);

      // execute transaction
      const txRes = await buy({ ...request, imageCID: cid.toString() });
      console.info("Buying Success!: ", txRes);
    } catch (err) {
      console.error("Buying failed: ", err);
      return;
    }

    // unpin old ad image
    if (removable.imageCID !== "") {
      try {
        await ipfs.pin.rm(removable.imageCID);
      } catch (err) {
        console.error("unpin failed: ", err);
      }
    }
  };

  useEffect(() => {
    if (image === undefined) return;
    setImageSrc(URL.createObjectURL(image));
  }, [image]);

  return {
    image,
    setImage,
    imageSrc,
    setImageSrc,
    request,
    setRequest,
    onSubmit,
  };
};

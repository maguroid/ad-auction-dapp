import { useDialog } from "hooks/useDialog";
import { Form } from "components/Form";
import { useAdsContract } from "hooks/useAdsContract";
import { useState, useEffect, useCallback } from "react";
import { Ads } from "types/Ads";
import noImage from "assets/images/no-image.png";
import { httpsUrl } from "utils/ipfs";

import styled from "styled-components";

function AdList() {
  const { Dialog, toggleDialog } = useDialog();
  const [ads, setAds] = useState<Ads.AdStruct[]>([]);
  const { adsContract } = useAdsContract();
  const [currentAd, setCurrentAd] = useState<Ads.AdStruct>({
    id: -1,
    title: "",
    imageCID: "",
    description: "",
    siteUrl: "",
    owner: "",
    price: -1,
  });
  const getHttpUrl = useCallback((ad: Ads.AdStruct) => {
    if (ad.imageCID === "") return noImage;

    return httpsUrl(ad.imageCID);
  }, []);

  const onBtnClick = (ad: Ads.AdStruct) => {
    setCurrentAd(ad);
    toggleDialog();
  };

  useEffect(() => {
    async function fetch() {
      try {
        const ads = await adsContract.getAds();
        setAds(ads);
      } catch (err) {
        console.error("failed to fetch ads", err);
      }
    }
    fetch();
  }, [adsContract]);

  return (
    <Flex className="container-fluid">
      <Dialog>
        <Form ad={currentAd} />
      </Dialog>
      {ads.map((ad) => (
        <Item key={ad.id.toString()}>
          <section>
            <Card>
              <Cover href={ad.siteUrl} data-tooltip="visit this site">
                <h3>{ad.title ? ad.title : "No Sponsor here !"}</h3>
                <Image src={getHttpUrl(ad)} alt={ad.title} />
              </Cover>
              <p>
                {ad.description
                  ? ad.description
                  : "This space is available for you ! Be a sponsor !"}
              </p>
              <button onClick={() => onBtnClick(ad)}>Buy this Space</button>
            </Card>
          </section>
        </Item>
      ))}
    </Flex>
  );
}
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  height: 300px;
  transition: 0.5s ease;
  object-fit: contain;
  margin-bottom: 30px;
`;

const Item = styled.div`
  width: 30%;
  &:hover ${Image} {
    opacity: 0.3;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Card = styled.article`
  margin-top: 0;
  word-break: break-all;
  text-overflow: ellipsis;
`;

const Cover = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

export default AdList;

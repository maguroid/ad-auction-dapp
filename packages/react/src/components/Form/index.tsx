import { useForm } from "hooks/useForm";
import { Ads } from "types";
import { ethers, BigNumber } from "ethers";
import { useCallback } from "react";

import styled from "styled-components";
import { parseUnits } from "ethers/lib/utils";

export function Form({
  ad,
  callBack,
}: {
  ad: Ads.AdStruct;
  callBack: () => void;
}) {
  const { image, imageSrc, request, setImage, setRequest, onSubmit } = useForm(
    ad.id,
    callBack
  );
  const name = image?.name;
  const minPrice = useCallback(() => {
    return BigNumber.from(ad.price).add(parseUnits("0.0001", "ether"));
  }, [ad]);
  return (
    <form onSubmit={onSubmit}>
      <section>
        <h3>Proceed with the transaction</h3>
        <p>It should take few minutes to reflect your buying. Please wait...</p>
      </section>

      <section>
        <h4>Current Price:</h4>
        <b>{ethers.utils.formatEther(ad.price)}ETH</b>
      </section>

      <section>
        <label htmlFor="ether">
          <b>Enter amount (ETH)</b>
          <input
            type="number"
            min={ethers.utils.formatEther(minPrice())}
            placeholder={ethers.utils.formatEther(minPrice())}
            step="0.0001"
            required
            onChange={(e) =>
              setRequest((request) => ({ ...request, ether: e.target.value }))
            }
          />
        </label>
        <section />
        <section>
          <label htmlFor="image">
            <b>Select your AD's image</b>
            <input
              className="hidden"
              type="file"
              onChange={(e) => setImage(e.currentTarget.files?.[0])}
              id="image"
              name="image"
              accept="image/*"
              required
            />
          </label>
        </section>
      </section>
      <section>
        <p>
          <b>filename</b>
        </p>
        <p>{image?.name}</p>
      </section>
      <section>
        <b>Preview</b>
        <Image src={imageSrc} alt={name} />
      </section>
      <section>
        <label htmlFor="title">
          <b>Title</b>
          <input
            type="text"
            id="title"
            name="title"
            value={request.title}
            placeholder="ex. New Products are released !"
            maxLength={60}
            required
            onChange={(e) =>
              setRequest((request) => ({ ...request, title: e.target.value }))
            }
          />
        </label>
      </section>
      <section>
        <label htmlFor="site-url">
          <b>Your Site URL</b>
        </label>
        <input
          type="text"
          id="site-url"
          name="site-url"
          value={request.siteUrl}
          placeholder="ex. https://github.com/maguroid"
          required
          onChange={(e) =>
            setRequest((request) => ({ ...request, siteUrl: e.target.value }))
          }
        />
      </section>
      <section>
        <label htmlFor="description">
          <b>AD's description</b>
          <textarea
            id="description"
            name="description"
            value={request.description}
            placeholder="ex. Awesome Project has been launched! Check it out!"
            maxLength={300}
            required
            onChange={(e) =>
              setRequest((request) => ({
                ...request,
                description: e.target.value,
              }))
            }
          />
        </label>
      </section>
      <footer>
        <input type="submit" value="Confirm" />
        <button type="button" className="secondary" onClick={callBack}>
          Cancel
        </button>
      </footer>
    </form>
  );
}

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

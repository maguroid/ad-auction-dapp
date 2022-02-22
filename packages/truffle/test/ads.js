const assert = require("assert");
const Ads = artifacts.require("Ads");
const multihash = require("multihashes");
const CID = require("cids");

const getCID = (str) => {
  const bytes = new TextEncoder("utf8").encode(str);
  const hash = multihash.encode(bytes, "sha2-256");
  const cid = new CID(1, "dag-pb", hash).toString();

  return cid;
};

contract("Ads", async (accounts) => {
  let ads;
  beforeEach(async () => {
    ads = await Ads.deployed();
  });
  it("can buy a space of ad", async () => {
    const cid = getCID("Hi there!");
    const desc = "my first ad!";

    await ads.buy(1, cid, desc, {
      from: accounts[1],
      value: web3.utils.toWei("0.02", "ether"),
    });

    const ad = await ads.ads(1);
    console.log(ad);
    assert.ok(ad);
  });

  it("reject buying if value is less than current", async () => {
    const cid2 = getCID("Hello world!");
    const desc2 = "my second ad!";

    await assert.rejects(
      ads.buy(1, cid2, desc2, {
        from: accounts[1],
        value: web3.utils.toWei("0.02", "ether"),
      })
    );
  });

  it("can buying ad if value is larger than current", async () => {
    const cid3 = getCID("Everything is ok");
    const desc3 = "my awesome ad!";

    await ads.buy(1, cid3, desc3, {
      from: accounts[1],
      value: web3.utils.toWei("0.03", "ether"),
    });

    const ad = await ads.ads(1);

    console.log(ad);

    assert.equal(ad.description, "my awesome ad!");
  });
});

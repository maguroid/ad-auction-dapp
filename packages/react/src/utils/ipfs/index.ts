import { create } from "ipfs-http-client";

const host = process.env.REACT_APP_IPFS_HOST;
const port = process.env.REACT_APP_IPFS_PORT;
const protocol = process.env.REACT_APP_IPFS_PROTOCOL;

const auth =
  "Basic " +
  Buffer.from(
    `${process.env.REACT_APP_PINNING_PROJECT}:${process.env.REACT_APP_PINNING_SECRET}`
  ).toString("base64");

export const ipfs = create({
  host,
  port,
  protocol,
  headers: { authorization: auth },
});

export const httpsUrl = (cid: string) => `https://${host}/ipfs/${cid}`;

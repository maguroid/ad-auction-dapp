/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Ads {
  export type AdStruct = {
    id: BigNumberish;
    title: string;
    imageCID: string;
    description: string;
    siteUrl: string;
    owner: string;
    price: BigNumberish;
  };

  export type AdStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    BigNumber
  ] & {
    id: BigNumber;
    title: string;
    imageCID: string;
    description: string;
    siteUrl: string;
    owner: string;
    price: BigNumber;
  };
}

export interface AdsInterface extends utils.Interface {
  contractName: "Ads";
  functions: {
    "ads(uint256)": FunctionFragment;
    "ids(uint256)": FunctionFragment;
    "lastId()": FunctionFragment;
    "getAd(uint256)": FunctionFragment;
    "getAds()": FunctionFragment;
    "buy(uint256,string,string,string,string)": FunctionFragment;
    "expand(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ads", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "ids", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "lastId", values?: undefined): string;
  encodeFunctionData(functionFragment: "getAd", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "getAds", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BigNumberish, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "expand",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ads", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ids", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expand", data: BytesLike): Result;

  events: {};
}

export interface Ads extends BaseContract {
  contractName: "Ads";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AdsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ads(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, BigNumber] & {
        id: BigNumber;
        title: string;
        imageCID: string;
        description: string;
        siteUrl: string;
        owner: string;
        price: BigNumber;
      }
    >;

    ids(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    lastId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAd(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Ads.AdStructOutput]>;

    getAds(overrides?: CallOverrides): Promise<[Ads.AdStructOutput[]]>;

    buy(
      id: BigNumberish,
      title: string,
      imageCID: string,
      description: string,
      siteUrl: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    expand(
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ads(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, string, string, BigNumber] & {
      id: BigNumber;
      title: string;
      imageCID: string;
      description: string;
      siteUrl: string;
      owner: string;
      price: BigNumber;
    }
  >;

  ids(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  lastId(overrides?: CallOverrides): Promise<BigNumber>;

  getAd(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Ads.AdStructOutput>;

  getAds(overrides?: CallOverrides): Promise<Ads.AdStructOutput[]>;

  buy(
    id: BigNumberish,
    title: string,
    imageCID: string,
    description: string,
    siteUrl: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  expand(
    length: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ads(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, BigNumber] & {
        id: BigNumber;
        title: string;
        imageCID: string;
        description: string;
        siteUrl: string;
        owner: string;
        price: BigNumber;
      }
    >;

    ids(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    lastId(overrides?: CallOverrides): Promise<BigNumber>;

    getAd(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Ads.AdStructOutput>;

    getAds(overrides?: CallOverrides): Promise<Ads.AdStructOutput[]>;

    buy(
      id: BigNumberish,
      title: string,
      imageCID: string,
      description: string,
      siteUrl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    expand(length: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ads(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    ids(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    lastId(overrides?: CallOverrides): Promise<BigNumber>;

    getAd(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getAds(overrides?: CallOverrides): Promise<BigNumber>;

    buy(
      id: BigNumberish,
      title: string,
      imageCID: string,
      description: string,
      siteUrl: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    expand(
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ads(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ids(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAd(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buy(
      id: BigNumberish,
      title: string,
      imageCID: string,
      description: string,
      siteUrl: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    expand(
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

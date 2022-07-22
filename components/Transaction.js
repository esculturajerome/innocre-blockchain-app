import React, { useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { InnocreContext } from "../context/InnocreContext";
const Transaction = ({ item }) => {
  const { username } = useContext(InnocreContext);

  return (
    <>
      {item.map((asset, index) => {
        return (
          <div
            className="w-full flex flex-col border-main border-2 max-w-[450px] mx-auto"
            key={index}
          >
            <div className="flex w-full bg-black text-white p-4 pr-8 ">
              <div className="w-full grid grid-cols-3 h-full">
                <div className="flex flex-col items-start">
                  <p className="font-bold">ORDER PLACED</p>
                  <p className="text-sm tracking-wider text-main text-white/80">
                    {moment(asset.purchaseDate).format("MMMM Do YYYY")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold">TOTAL</p>
                  <p className="text-sm tracking-wider text-main text-white/80">
                    {asset.price} IC
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-bold">SHIP TO</p>
                  <p className="text-sm tracking-wider text-main text-white/80">
                    {username}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 sm:gap-4 bg-gray-800">
              <div>
                <Image
                  className="object-cover"
                  src={asset.src}
                  alt="item"
                  height={200}
                  width={200}
                />
              </div>
              <div className="flex flex-col justify-center lg:gap-2 text-white min-w-[150px]">
                <p className="">
                  Bought on {moment(asset.purchaseDate).format("MMMM Do")}
                </p>
                <p className="text-xl lg:text-3xl font-bold flex ml-[10px">
                  {asset.name}
                </p>
                <div className="mt-2">
                  <Link href={`${asset.etherscanLink}`}>
                    <a target="_blank" rel="noopener">
                      <div className="py-1 px-2 font-bold w-[140px] rounded-full cursor-pointer text-main text-center border-2 border-main flex justify-center items-center">
                        View in Etherscan
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Transaction;

import React, { useContext } from "react";
import { FaCoins } from "react-icons/fa";
import { InnocreContext } from "../context/InnocreContext";
import Image from "next/image";

const Card = ({ item }) => {
  const { buyAsset, isAuthenticated } = useContext(InnocreContext);
  return (
    <div className="group break-inside-avoid overflow-hidden relative border-none z-20 cursor-pointer mb-3 inline-block w-full rounded-lg bg-black">
      <div onClick={() => buyAsset(item.price, item)}>
        <div className="before:w-full before:h-full before:inset-0 before:bg-black/60 before:z-10 before:opacity-0 before:hover:opacity-100 before:absolute before:transform before:duration-300 ">
          <div
            className={`${
              isAuthenticated ? "absolute" : "hidden"
            } w-full top-1/2 left-0 z-10 -translate-y-[50%]`}
          >
            <div className="p-5 text-center opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-100 transform duration-300">
              <p className="text-white/80 font-light capitalize text-2xl">
                Click to buy
              </p>
            </div>
          </div>
          <Image
            src={item.src}
            alt={item.name}
            width={600}
            height={620}
            className="w-full max-w-full overflow-hidden break-before-avoid relative object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between mt-1 p-2 text-white ">
        <p>{item.name}</p>
        <p className="text-sm">{item.price} IC</p>
      </div>
    </div>

    // <div className="" onClick={() => buyAsset(item.price, item)}>
    //   <div className={styles.card}>
    //     <Image
    //       src={item.src}
    //       className="object-cover object-center"
    //       width={500}
    //       height={700}
    //       objectFit="contain"
    //     />
    //   </div>
    //   <div>
    //     <div className={styles.cardTitle}>{item.name}</div>
    //     <div className={styles.price}>
    //       {item.price} IC <FaCoins className={styles.coins} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;

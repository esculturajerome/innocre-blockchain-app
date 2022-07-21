import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HistorySection from "../components/HistorySection";
import { InnocreContext } from "../context/InnocreContext";

import Transaction from "../components/Transaction";

const history = () => {
  const { ownedItems } = useContext(InnocreContext);
  // useEffect(() => {
  //   console.log(ownedItems)
  // }, [])

  return (
    <>
      <Header />
      {/* <HistorySection /> */}
      <div className="bg-gray-900">
        <div className="flex gap-2flex-row flex-wrap">
          {ownedItems.map((item, index) => {
            return <Transaction key={index} item={item} index={index} />;
          })}
        </div>
      </div>
      {/* <div className="h-full w-full flex bg-[#fff]">
        <div className="w-full h-full flex flex-col mt-[50px]">
          <div className="w-full h-full flex flex-col p-[100px] justify-center">
            
          </div>
        </div>
      </div> */}
    </>
  );
};

export default history;

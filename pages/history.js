import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HistorySection from "../components/HistorySection";
import { InnocreContext } from "../context/InnocreContext";

import Transaction from "../components/Transaction";
import Footer from "../components/Footer";

const history = () => {
  const { ownedItems, isAuthenticated } = useContext(InnocreContext);

  return (
    <div className="bg-gray-900 font-bebas h-full min-h-screen ">
      <div className="max-w-[1600px] mx-auto">
        <Header />
        <HistorySection />
        {isAuthenticated && (
          <div className="bg-gray-900 px-4 lg:px-12 pb-12 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
              {ownedItems.map((item, index) => {
                return <Transaction key={index} item={item} index={index} />;
              })}
            </div>
          </div>
        )}
        <Footer />
        {/* <div className="h-full w-full flex bg-[#fff]">
        <div className="w-full h-full flex flex-col mt-[50px]">
          <div className="w-full h-full flex flex-col p-[100px] justify-center">
            
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default history;

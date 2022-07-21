import React, { useContext, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { InnocreContext } from "../context/InnocreContext";
import { HashLoader } from "react-spinners";
import Link from "next/link";

const BuyModal = ({ close, buyTokens }) => {
  const styles = {
    container: `h-full w-full flex flex-col z-50 text-white bg-gray-900`,
    closeX: ``,
    title: ``,
    content: `flex w-full mb-[20px] text-xl justify-center`,
    input: `w-[50%] h-[50px] bg-[#f7f6f2] rounded-lg p-4 flex mx-auto`,
    inputBox: `w-full h-full flex items-center justify-center bg-[#f7f6f2] focus:outline-none text-black text-sm`,
    price: `w-full h-full flex justify-center items-center mt-[20px] font-bold text-3xl`,
    buyBtn: ``,
    loaderContainer: `w-full h-[500px] flex items-center justify-center`,
    loader: `w-full h-full flex items-center justify-center`,
    etherscan: `w-full h-full flex items-center justify-center text-green-500 text-2xl mt-[20px] font-bold cursor-pointer`,
    success: `w-full h-full flex items-center justify-center text-xl mt-[20px] font-bolder`,
  };
  const {
    amountDue,
    setAmountDue,
    tokenAmount,
    setTokenAmount,
    isLoading,
    setIsLoading,
    etherscanLink,
    setEtherscanLink,
  } = useContext(InnocreContext);
  useEffect(() => {
    calculatePrice();
  }, [tokenAmount]);

  const calculatePrice = () => {
    const price = parseFloat(tokenAmount * 0.0001);
    price = price.toFixed(4);
    setAmountDue(price);
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <>
          <div className={styles.loaderContainer}>
            <HashLoader size={80} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[50px] flex items-center justify-end z-50">
            <IoIosClose
              onClick={() => {
                close();
                setAmountDue("");
                setTokenAmount("");
                setEtherscanLink("");
              }}
              fontSize={50}
              className="cursor-pointer"
            />
          </div>
          <div className="text-3xl font-bold flex flex-1 items-center mt-[5px] justify-center lg:-mt-[30px] mb-[20px]">
            Buy More Innocre Coins Here!
          </div>
          <div className={styles.content}>
            Select how many tokens you would like to buy.
          </div>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Amount..."
              className={styles.inputBox}
              onChange={(e) => setTokenAmount(e.target.value)}
              value={tokenAmount}
            />
          </div>
          <div className={styles.price}>
            Total Due:{" "}
            {tokenAmount && tokenAmount > 0 ? amountDue + "ETH" : "0 ETH"}
          </div>
          <button
            className="w-[20%] h-[50px]  mt-[20px] rounded-lg p-[10px] flex mx-auto text-white justify-center items-center cursor-pointer bg-[#65c4ff]  border-4 border-gray-600 font-bold min-w-[100px]"
            disabled={!tokenAmount || tokenAmount < 0}
            onClick={() => {
              setIsLoading(true);
              buyTokens();
            }}
          >
            Buy
          </button>
          {etherscanLink && (
            <>
              <div className={styles.success}>
                Transaction Sucessful! Check out your receipt for your
                transaction below!
              </div>
              <Link href={`${etherscanLink}`} className={styles.etherscan}>
                <a className={styles.etherscan} target="_blank">
                  Transaction Receipt
                </a>
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BuyModal;

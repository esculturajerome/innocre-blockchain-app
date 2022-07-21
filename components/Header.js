import React, { useContext } from "react";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../assets/innocre_logo_full.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { InnocreContext } from "../context/InnocreContext";
import { FaCheckCircle, FaCoins } from "react-icons/fa";
import { ConnectButton } from "web3uikit";
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import BuyModal from "./BuyModal";

const Header = () => {
  const styles = {
    container: `h-[60px] w-full flex items-center gap-5 px-16`,
    logo: `flex items-center ml-[20px] cursor-pointer flex-1`,
    search: `p-[25px] mr-[30px] w-[400px] h-[40px] bg-white rounded-full shadow-lg flex flex items-center border border-black`,
    searchInput: `bg-transparent focus:outline-none border-none flex-1 items-center flex`,
    menu: `flex items-center gap-6`,
    menuItem: `flex items-center text-md font-bold cursor-pointer`,
    coins: `ml-[10px]`,
  };

  const {
    balance,
    buyTokens,
    getBalance,
    isAuthenticated,
    nickname,
    setNickname,
    username,
    handleSetUsername,
  } = useContext(InnocreContext);
  const { openModal, isModalOpen, closeModal } = useModal();
  return (
    <ModalProvider>
      <div className="bg-black shadow-md py-2">
        <div className="shadow-md rounded-full my-2  h-12 flex items-center w-[90%] mx-auto lg:hidden">
          {isAuthenticated ? (
            <div className="flex w-full justify-between">
              {username ? (
                <div className="flex items-center">
                  <Image
                    src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                    alt="profile"
                    className="w-full  rounded-full min-w-[80px]"
                    height={40}
                    width={40}
                  />
                  <div className=" pl-3">
                    <div className="text-white font-bold text-sm whitespace-nowrap">
                      Welcome! {username}
                    </div>
                    <p className="text-[#65c4ff] text-sm cursor-pointer">
                      View Transaction history
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between w-full items-center px-1">
                  <div>
                    <input
                      type="text"
                      placeholder="Set Username...."
                      className="px-4 py-2 bg-transparent focus:outline-none"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </div>
                  <div
                    onClick={handleSetUsername}
                    className={`${
                      nickname.length < 1
                        ? ""
                        : "cursor-pointer hover:scale-105"
                    } border-2 rounded-full  duration-150`}
                  >
                    <FaCheckCircle
                      className={`${
                        nickname.length < 1
                          ? "text-gray-500"
                          : "text-yellow-500"
                      } w-10 h-10  `}
                    />
                  </div>
                  {/* <button
                    className="bg-white px-4 rounded-md py-2 hover:scale-105 hover:bg-white/50 transition-all duration-200"
                    onClick={handleSetUsername}
                  >
                    Set Nickname
                  </button> */}
                </div>
              )}
              {username && balance && (
                <div className="flex items-center">
                  <div
                    className="cursor-pointer bg-gray-900 text-[#65c4ff] border-2 border-[#65c4ff] rounded-full flex  items-center "
                    onClick={openModal}
                  >
                    <p className="rounded-full mr-2 px-2  py-1 font-bold flex items-center gap-1">
                      {balance}
                      <FaCoins />
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <ConnectButton />
            </div>
          )}
        </div>
        {isAuthenticated && (
          <div className="flex justify-between items-center mx-auto mt-3 w-[90%] lg:hidden border-t border-gray-700 pt-4 pb-2">
            <div className="flex items-center justify-center -ml-4">
              <ConnectButton />
            </div>
            <div>
              <button
                className="text-sm bg-gray-800  py-2 px-3 rounded-xl text-[#65c4ff] font-bold cursor-pointer"
                onClick={openModal}
              >
                Buy Innocre Coins
              </button>
              <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
                <BuyModal close={closeModal} buyTokens={buyTokens} />
              </Modal>
            </div>
          </div>
        )}

        {/* large */}
        <div className="hidden lg:grid w-full max-w-[1600px] mx-auto grid-cols-3 items-center py-1">
          {/* <div className="justify-between max-w-[1600px] mx-auto items-center py-1 hidden lg:flex"> */}
          <div className="ml-12 ">
            <Link href="/">
              <div className="text-white flex items-center gap-2 ">
                <Image
                  src={logo}
                  width={40}
                  height={40}
                  className="cursor-pointer"
                />
                <p className="text-xl cursor-pointer">Innocre</p>
              </div>
            </Link>
          </div>
          {isAuthenticated ? (
            <div className="flex  justify-center">
              <ConnectButton />
            </div>
          ) : (
            <div></div>
          )}

          {isAuthenticated ? (
            <div className="flex items-center justify-end">
              <p className="mr-4 text-sm cursor-pointer font-bold text-[#65c4ff] ">
                View transaction history
              </p>
              <div
                className="flex rounded-full border-[#65c4ff] border-2 mr-12 p-1"
                onClick={openModal}
              >
                <div className="flex items-center text-[#65c4ff]">
                  <div className="cursor-pointer rounded-full flex  items-center ">
                    <p className="rounded-full  mr-2  px-2  py-1 font-bold flex items-center gap-1 text-lg">
                      {balance}
                      <FaCoins />
                    </p>
                  </div>
                </div>
                <Image
                  src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                  alt="profile"
                  className="w-full  rounded-full min-w-[80px] p-2"
                  height={35}
                  width={35}
                />
              </div>
            </div>
          ) : (
            <div className="mr-8 z-50 flex justify-end text-white">
              <ConnectButton />
            </div>
          )}
        </div>
      </div>
      {/* <div className="bg-white min-w-[100px] max-w-5xl mx-auto  z-40 py-2 w-full ">
        <div className=" flex justify-between lg:px-12">
          {isAuthenticated ? (
            <div className="flex gap-2 items-center  ">
              <div>
                <Image
                  src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                  alt="profile"
                  className="w-full bg-white rounded-full min-w-[80px]"
                  height={70}
                  width={70}
                />
              </div>
              {!username ? (
                <>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Username...."
                      className="px-4 py-2"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </div>
                  <button
                    className="bg-white px-4 rounded-md py-2 hover:scale-105 hover:bg-white/50 transition-all duration-200"
                    onClick={handleSetUsername}
                  >
                    Set Nickname
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-start">
                  <div className="text-white text-center text-xl whitespace-nowrap pl-5">
                    Hi! {username}
                  </div>
                  <div>
                    <ConnectButton />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <ConnectButton />
            </div>
          )}
          {balance ? (
            <div className="flex items-center">
              <div
                className="cursor-pointer bg-white rounded-full flex pr-4 items-center "
                onClick={openModal}
              >
                <p className="rounded-full border-white bg-yellow-400 px-2 border-4 py-1 font-bold text-xl">
                  {balance} IC
                </p>

                <FaCoins className={styles.coins} />
                <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
                  <BuyModal close={closeModal} buyTokens={buyTokens} />
                </Modal>
              </div>
            </div>
          ) : (
            ""
          )}
      
        </div>
      </div> */}
    </ModalProvider>
  );
};

export default Header;

{
  /* <div className="w-full flex flex-col items-center px-4 mt-4">
            <ConnectButton />
          </div> */
}

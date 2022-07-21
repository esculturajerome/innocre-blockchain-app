import React, { useContext } from "react";
import logo from "../assets/innocre_logo.png";
import logoFull from "../assets/innocre_logo_full.png";
import Image from "next/image";
import { FaBox } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { InnocreContext } from "../context/InnocreContext";
import { ConnectButton } from "web3uikit";
import { AiOutlineHistory } from "react-icons/ai";
import Link from "next/link";
import { FaCoins } from "react-icons/fa";
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";
import BuyModal from "./BuyModal";

const Sidebar = () => {
  const {
    isAuthenticated,
    buyTokens,
    balance,
    recentTransactions,
    nickname,
    setNickname,
    username,
    handleSetUsername,
  } = useContext(InnocreContext);

  const { openModal, isModalOpen, closeModal } = useModal();

  return (
    <div className="md:col-span-full lg:col-span-1 my-12 lg:my-0 font-Roboto font-extralight">
      <div className="bg-gray-200 w-full h-[400px] flex flex-col items-center justify-center">
        {isAuthenticated && (
          <div className="flex flex-col gap-2 items-center">
            <div>
              <Image
                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                alt="profile"
                className="w-full bg-white rounded-full"
                height={100}
                width={100}
              />
            </div>
            {!username ? (
              <>
                <div className="flex flex-col">
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
              <div>
                <div className="text-black text-center text-2xl">
                  Hi! {username}
                </div>
              </div>
            )}
          </div>
        )}
        <div className="w-full flex flex-col items-center px-4 mt-4">
          <ConnectButton />
        </div>
        <div>
          {balance ? (
            <div className="">
              {balance}
              <FaCoins className="" />
              <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
                <BuyModal close={closeModal} buyTokens={buyTokens} />
              </Modal>
            </div>
          ) : (
            <div className="">
              0 IC <FaCoins className="" />
              <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
                <BuyModal close={closeModal} buyTokens={buyTokens} />
              </Modal>
            </div>
          )}

          <button
            className="bg-red-500 px-4 py-2 rounded-lg"
            onClick={openModal}
          >
            Buy More
          </button>
        </div>
      </div>
      <div className="pl-8 pt-12">adsa</div>
      <div>
        {recentTransactions &&
          recentTransactions.map((transaction, index) => {
            console.log(transaction);
            return (
              <div key={index} className="bg-red-500 w-full">
                <div className="flex flex-col p-4 text-sm">
                  <p>From: {transaction.attributes.from_address}</p>
                  <p>To: {transaction.attributes.to_address} </p>
                  <p>
                    Hash:{" "}
                    <a
                      target={"_blank"}
                      rel="noopener noreferrer"
                      href={`https://rinkeby.etherscan.io/tx/${transaction.attributes.hash}`}
                    >
                      {transaction.attributes.hash.slice(0, 10)}
                    </a>
                  </p>
                  <p>Gas: {transaction.attributes.gas}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    //   <div className={styles.profile}>
    //     {isAuthenticated && (
    //       <>
    //         <div className={styles.profilePicContainer}>
    //           <Image
    //             src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
    //             alt="profile"
    //             className={styles.profilePic}
    //             height={100}
    //             width={100}
    //           />
    //         </div>
    //         {!username ? (
    //           <>
    //             <div className={styles.username}>
    //               <input
    //                 type="text"
    //                 placeholder="Username...."
    //                 className={styles.usernameInput}
    //                 value={nickname}
    //                 onChange={(e) => setNickname(e.target.value)}
    //               />
    //             </div>
    //             <button
    //               className={styles.setNickname}
    //               onClick={handleSetUsername}
    //             >
    //               Set Nickname
    //             </button>
    //           </>
    //         ) : (
    //           <div>
    //             <div className={styles.welcome}>Wecome {username}</div>
    //           </div>
    //         )}
    //       </>
    //     )}
    //     <div className={styles.connectButton}>
    //       <ConnectButton />
    //     </div>
    //   </div>
    //   <div className={styles.menu}>
    //     <Link href="/">
    //       <div className={styles.menuItem}>
    //         <Image
    //           src={logo}
    //           height={30}
    //           width={30}
    //           className={styles.innocreLogo}
    //         />
    //         My Innocre
    //         <br /> Board
    //       </div>
    //     </Link>

    //     <Link href="/history">
    //       <div className={styles.menuItem}>
    //         <AiOutlineHistory />
    //         Transaction History
    //       </div>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Sidebar;

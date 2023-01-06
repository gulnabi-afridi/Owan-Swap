import React, { useState } from "react";
import Image from "next/image";
import RestoreIcon from "@mui/icons-material/Restore";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ConnectWallet from "../popups/ConnectWallet";
import FirstCoinModal from "./FirstCoinModal";
import SecCoinModal from "./SecCoinModal";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SwapModal = () => {
  const [arrow, setArrow] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [Open_First_Coin_Modal, Set_First_Coin_Modal] = useState(false);
  const [Open_Sec_Coin_Modal, Set_Sec_Coin_Modal] = useState(false);

  const [Coin, Set_Coin] = useState({
    ico: "/Assets/Coin/bsud.png",
    title: "bsud",
  });
  const [Sec_Coin, Set_Sec_Coin] = useState({
    ico: "/Assets/Coin/cake.png",
    title: "cake",
  });

  return (
    <div className="w-full bg-white dark:bg-black px-4 md:px-0 pt-10 pb-20">
      <div className="w-full bg-white dark:bg-black max-w-xs sm:max-w-sm rounded-2xl flex flex-col items-center justify-center m-auto border-[2px] border-solid border-black dark:border-white blackShadow dark:full-shadow">
        {/* => Top bar */}
        <div className="w-full rounded-t-2xl  py-4 px-4 flex flex-col items-center justify-center gap-3 border-solid border-0 border-b border-black dark:border-[rgb(231,227,235)]">
          <div className="w-full flex  items-center justify-between   ">
            <h2 className="font-semibold text-xl text-black dark:text-pink">
              Swap
            </h2>
            {/* => Right icons */}
            <div className="flex items-center gap-[6px]">
              <SettingsIcon className="cursor-pointer fill-black dark:fill-pink hover:opacity-50" />
              <RestoreIcon className="cursor-pointer fill-black dark:fill-pink hover:opacity-50  " />
              <RefreshIcon className="cursor-pointer fill-black dark:fill-pink hover:opacity-50" />
            </div>
          </div>
          <p className="text-grey text-md">Trade tokens in an instant</p>
        </div>
        {/* => Swaping boxes */}
        <div className="w-full py-4 pb-8 px-4 flex flex-col items-center justify-between gap-16  rounded-b-xl">
          <div className="w-full flex flex-col items-center justify-between gap-3 ">
            {/* top */}
            <div className="w-full flex flex-col items-start justify-center gap-1">
              {/* label 1 */}
              <div
                onClick={() => {
                  Set_First_Coin_Modal(true);
                }}
                className="px-2 flex items-center justify-start gap-2 w-full hover:opacity-50"
              >
                <div className="relative rounded-full w-[20px] h-[20px] flex items-center justify-center object-contain">
                  <Image src={Coin.ico} alt="" fill />
                </div>
                <div className=" flex items-center justify-center  cursor-pointer">
                  <h4 className="text-md text-black dark:text-pink font-semibold uppercase">
                    {Coin.title}
                  </h4>
                  <ExpandMoreIcon className="text-black dark:text-pink" />
                </div>
              </div>
              {/* input 1 */}
              <input
                type="text"
                placeholder="0.0"
                className="rounded-[20px] bg-darkWhite dark:bg-[rgb(238,234,244)] w-full py-4 px-3 text-right text-lg placeholder:text-right focus:border-0 border-0  focus:outline-0"
              />
            </div>
            {/* middle */}
            <div
              onClick={() => {
                Set_Coin(Sec_Coin);
                Set_Sec_Coin(Coin);
              }}
              className="bg-black dark:bg-[rgb(238,234,244)] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer"
            >
              <ArrowDownwardIcon className="text-2xl text-white dark:text-pink font-bold " />
            </div>
            {/* bottom */}
            <div className="w-full flex flex-col items-start justify-center gap-1">
              {/* label 2 */}
              <div
                onClick={() => {
                  Set_Sec_Coin_Modal(true);
                }}
                className="px-2 flex items-center justify-start gap-2 w-full hover:opacity-50"
              >
                <div className="relative rounded-full w-[20px] h-[20px] flex items-center justify-center object-contain">
                  <Image src={Sec_Coin.ico} alt="" fill />
                </div>
                <div className=" flex items-center justify-center  cursor-pointer">
                  <h4 className="text-black dark:text-pink text-md font-semibold uppercase">
                    {Sec_Coin.title}
                  </h4>
                  <ExpandMoreIcon className="text-black dark:text-pink" />
                </div>
                <ContentCopyIcon className="cursor-pointer fill:black dark:fill-pink" />
              </div>
              {/* input 2 */}
              <input
                type="text"
                placeholder="0.0"
                className="rounded-[20px] bg-darkWhite dark:bg-[rgb(238,234,244)] w-full py-4 px-3 text-right text-lg placeholder:text-right focus:border-0 border-0  focus:outline-0"
              />
              {/* ==========>price */}
              <div className="w-full flex items-center justify-between px-4 pt-4">
                <p className="text-[13px] font-semibold text-black dark:text-pink">
                  Price
                </p>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-[16px] font-normal text-black dark:text-pink">
                    0.56466 BNB per OVE
                  </p>
                  <AutorenewIcon className="text-[18px] text-black dark:text-pink" />
                </div>
              </div>
              {/* ========>Slipage tolerance */}
              <div className="w-full flex items-center justify-between px-4 py-2">
                <p className="text-[13px] font-semibold text-black dark:text-pink">
                  Slippage Tolerance
                </p>
                <div className="text-lg text-black dark:text-pink font-semibold ">
                  0.5%
                </div>
              </div>
            </div>
          </div>
          {/* => Connect wallet button */}

          <button
            onClick={() => setOpenModal(true)}
            className="w-[80%] rounded-[25px] bg-black dark:bg-pink py-3 px-5 text-white dark:text-black font-semibold hover:opacity-80 transition-all duration-500"
          >
            Connect Wallet
          </button>
        </div>
      </div>

      {/* =========> summary */}
      <div className="w-full max-w-xs sm:max-w-sm rounded-2xl m-auto my-4 bg-white dark:bg-black p-5 flex flex-col gap-1 justify-start items-center border-[2px] border-solid blackShadow dark:full-shadow border-[white]">
        {/* minimum received */}
        <div className="w-full flex justify-between items-center">
          <p className="text-black dark:text-pink text-[14px] flex justify-center items-center gap-2">
            Minimum received
            <HelpOutlineIcon className="text-[16px] text-black dark:text-pink" />
          </p>
          <p className="text-black dark:text-pink text-[16px] flex justify-center items-center">
            77.84 OVE
          </p>
        </div>
        {/* Price Impact  */}
        <div className="w-full flex justify-between items-center">
          <p className="text-black dark:text-pink text-[14px] flex justify-center items-center gap-2">
            Price Impact
            <HelpOutlineIcon className="text-[16px] text-black dark:text-pink" />
          </p>
          <p className="text-[red] text-[16px] flex justify-center items-center">
            99.50%
          </p>
        </div>
        {/* Liquidity Provider Fee  */}
        <div className="w-full flex justify-between items-center">
          <p className="text-black dark:text-pink text-[14px] flex justify-center items-center gap-2">
            Liquidity Provider Fee
            <HelpOutlineIcon className="text-[16px] text-black dark:text-pink" />
          </p>
          <p className="text-black dark:text-pink text-[16px] flex justify-center items-center">
            0.2197 BNB
          </p>
        </div>
        {/* Route */}
        <div className="w-full flex justify-between items-center">
          <p className="text-black dark:text-pink text-[14px] flex justify-center items-center gap-2">
            Route
            <HelpOutlineIcon className="text-[16px] text-black dark:text-pink" />
          </p>
          <p className="text-black dark:text-pink text-[16px] flex justify-center items-center">
            BNB <NavigateNextIcon className="text-[14px]" /> BUS{" "}
            <NavigateNextIcon className="text-[14px]" /> DOVE{" "}
          </p>
        </div>
      </div>

      <ConnectWallet open={openModal} setOpen={setOpenModal} />
      <FirstCoinModal
        open={Open_First_Coin_Modal}
        setOpen={Set_First_Coin_Modal}
        coin={Coin}
        setCoin={Set_Coin}
      />
      <SecCoinModal
        open={Open_Sec_Coin_Modal}
        setOpen={Set_Sec_Coin_Modal}
        coin={Sec_Coin}
        setCoin={Set_Sec_Coin}
      />
    </div>
  );
};

export default SwapModal;

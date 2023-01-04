import React, { useState } from "react";
import Image from "next/image";
import RestoreIcon from "@mui/icons-material/Restore";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ConnectWallet from "../popups/ConnectWallet";
import FirstCoinModal from "../../components/Swap/FirstCoinModal";
import SecCoinModal from "../../components/Swap/SecCoinModal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


const AddLiquidity = ({ setLiquidity }) => {
  const [arrow, setArrow] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [Open_First_Coin_Modal, Set_First_Coin_Modal] = useState(false);
  const [Open_Sec_Coin_Modal, Set_Sec_Coin_Modal] = useState(false);

  const [Coin, Set_Coin] = useState({
    ico: "/Assets/Coin/cake.png",
    title: "cake",
  });
  const [Sec_Coin, Set_Sec_Coin] = useState({
    ico: "/Assets/Coin/cake.png",
    title: "cake",
  });

  return (
    <div className="w-full bg-[black] px-4 md:px-0  pt-10 pb-20">
      <div className="w-full max-w-xs sm:max-w-sm rounded-2xl flex flex-col items-center bg-[black] border-[2px] border-solid border-[white] justify-center m-auto full-shadow">
        {/* => Top bar */}
        <div className="w-full rounded-t-2xl py-6 px-4 flex flex-col items-center justify-center gap-3 border-solid border-0 border-b border-[rgb(231,227,235)]">
          <div className="w-full flex  items-center justify-between   ">
            <div className="flex justify-center items-center gap-3">
              <ArrowBackIcon
                onClick={() => setLiquidity(false)}
                className="text-[30px] cursor-pointer text-[#FFAA27]"
              />
              <h2 className="uppercase font-semibold text-xl text-[#FFAA27]">
                {Coin.title}-{Sec_Coin.title}
              </h2>
            </div>
            {/* => Right icons */}
            <div className="flex items-center gap-[6px]">
              <SettingsIcon className="cursor-pointer fill-[#FFAA27]" />
              <RestoreIcon className="cursor-pointer fill-[#FFAA27]  " />
            </div>
          </div>
          <p className="text-[#FFAA27] text-[14px] flex justify-center items-center gap-2">
            <HelpOutlineIcon className="text-[18px]" /> Receive LP tokens and
            earn 0.17% trading fees
          </p>
        </div>
        {/* => Swaping boxes */}
        <div className="w-full py-4 pb-8 px-4 flex flex-col items-center justify-between gap-16 rounded-b-xl">
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
                  <h4 className="text-md text-[#FFAA27] font-semibold uppercase">
                    {Coin.title}
                  </h4>
                  <ExpandMoreIcon className="text-[#FFAA27]" />
                </div>
              </div>
              {/* input 1 */}
              <input
                type="text"
                placeholder="0.0"
                className="rounded-[20px] bg-[rgb(238,234,244)] w-full py-4 px-3 text-right text-lg placeholder:text-right focus:border-0 border-0  focus:outline-0"
              />
            </div>
            {/* middle */}
            <div
              onClick={() => {
                Set_Coin(Sec_Coin);
                Set_Sec_Coin(Coin);
              }}
              className="bg-[rgb(238,234,244)] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer"
            >
              <ArrowDownwardIcon className="text-2xl text-[#f9aa4b] font-bold full-shadow" />
            </div>
            {/* bottom */}
            <div className="w-full flex flex-col items-start justify-center gap-1">
              {/* label 2 */}
              <div
                onClick={() => {
                  Set_Sec_Coin_Modal(true);
                }}
                className="px-2 flex items-center justify-start gap-2 w-full"
              >
                <div className="relative rounded-full w-[20px] h-[20px] flex items-center justify-center object-contain">
                  <Image src={Sec_Coin.ico} alt="" fill />
                </div>
                <div className=" flex items-center justify-center  cursor-pointer">
                  <h4 className="text-md font-semibold uppercase text-[#FFAA27]">
                    {Sec_Coin.title}
                  </h4>
                  <ExpandMoreIcon className="text-[#FFAA27]" />
                </div>
                <ContentCopyIcon className="cursor-pointer text-base fill-[#FFAA27]" />
              </div>
              {/* input 2 */}
              <input
                type="text"
                placeholder="0.0"
                className="rounded-[20px] bg-[rgb(238,234,244)] w-full py-4 px-3 text-right text-lg placeholder:text-right focus:border-0 border-0  focus:outline-0"
              />

              {/* =======>prices and pool share  */}
              <div className="w-full flex flex-col gap-5 justify-center items-start p-4 my-4 border-[2px] border-solid border-[rgb(231,227,235)] rounded-xl">
                <p className=" font-regular text-[14px] text-[#FFAA27]">
                  Prices and pool share
                </p>
                {/*  */}
                <div className="w-full flex justify-between items-center border-t-[2px] border-solid border-[rgb(231,227,235)] py-2">
                  {/* coin 1 per coin 2 */}
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <p className=" font-regular text-[16px] text-[#FFAA27]">
                      2024830
                    </p>
                    <p className=" font-regular text-[14px] text-[#FFAA27]">
                      OVE per BNB
                    </p>
                  </div>
                  {/* coin 2 per 1 */}
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <p className=" font-regular text-[16px] text-[#FFAA27]">
                      0.00000049387
                    </p>
                    <p className=" font-regular text-[14px] text-[#FFAA27]">
                      BNB per OVE
                    </p>
                  </div>
                  {/* share of pool */}
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <p className=" font-regular text-[16px] text-[#FFAA27]">
                      0%
                    </p>
                    <p className=" font-regular text-[14px] text-[#FFAA27]">
                      Share of Pool
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between px-2 py-2">
                <p className="text-[13px] font-semibold text-[#FFAA27]">
                  Slippage Tolerance
                </p>
                <div className="text-lg text-[#f9aa4b] font-semibold ">
                  0.5%
                </div>
              </div>
            </div>
          </div>
          {/* => Connect wallet button */}

          <button
            onClick={() => setOpenModal(true)}
            className="w-[90%] rounded-[25px] bg-[#FFAA27] py-3 px-5 text-black font-semibold hover:opacity-80 transition-all duration-500"
          >
            Connect Wallet
          </button>
        </div>
      </div>
      {/* =========>By adding liquidity how much you will earn */}
      <div className="w-full max-w-xs sm:max-w-sm rounded-2xl m-auto my-3 bg-[black] p-5 flex justify-center items-center full-shadow">
        <p className="w-full text-center text-[14px] font-normal text-[#FFAA27]">
          🥞 By adding liquidity you'll earn 0.17% of all trades on this pair
          proportional to your share of the pool. Fees are added to the pool,
          accrue in real time and can be claimed by withdrawing your liquidity.
        </p>
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

export default AddLiquidity;

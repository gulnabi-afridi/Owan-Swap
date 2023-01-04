import React, { useState } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import AddLiquidity from "./AddLiquidity";

const Liquidity = () => {
  const [Add_Liquidity, Set_Add_Liquidity] = useState(false);

  return (
    <>
      {Add_Liquidity ? (
        <AddLiquidity setLiquidity={Set_Add_Liquidity} />
      ) : (
        <div className="w-full bg-[black] px-4 md:px-0  pt-10 pb-32">
          <div className="w-full max-w-xs sm:max-w-sm rounded-2xl flex flex-col items-center justify-center m-auto full-shadow bg-[black] border-[2px] border-solid border-[white]">
            {/* => Top bar */}
            <div className="w-full rounded-t-2xl py-6 px-4 flex flex-col items-start justify-center gap-3 border-solid border-0 border-b border-[rgb(231,227,235)]">
              <div className="w-full flex  items-center justify-between   ">
                <h2 className="font-semibold text-xl text-[#FFAA27]">
                  Your Liquidity
                </h2>
                {/* => Right icons */}
                <div className="flex items-center gap-[6px]">
                  <SettingsIcon className="cursor-pointer fill-[#FFAA27]" />
                  <RestoreIcon className="cursor-pointer fill-[#FFAA27]  " />
                </div>
              </div>
              <p className="text-[#FFAA27] text-[14px] font-light">
                Trade tokens in an instant
              </p>
            </div>
            {/* ======> mid portion */}
            <div className="w-full flex justify-center items-center h-[80px] border-solid border-0 border-b border-[rgb(231,227,235)]  bg-[#eeeeee]">
              <p className="text-[#FFAA27] text-base">
                Connect to a wallet to view your liquidity.
              </p>
            </div>
            {/* =====>Add liquidity button */}
            <button
              onClick={() => Set_Add_Liquidity(true)}
              className="flex justify-center items-center gap-2 my-6 w-[90%] py-3 rounded-xl bg-[#FFAA27] text-[black] font-semibold hover:opacity-80 transition-all duration-500"
            >
              <AddIcon className="text-[24px]" /> Add Liquidity
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Liquidity;

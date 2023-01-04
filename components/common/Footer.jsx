import React from "react";
import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Footer() {
  return (
    <div className="w-full min-h-[40px] bg-[#0a0a0a]">
      <div className="w-full max-w-[1200px] m-auto flex flex-col justify-center items-center md:items-start py-10 gap-8 px-4 md:px-0">
        {/* logo */}
        {/* <Link href="/">
          <div className="w-[170px] h-[40px] flex justify-center items-center relative mr-12">
            <Image src="/logo.svg" fill></Image>
          </div>
        </Link> */}
        {/* social icons */}
        <div className="flex gap-4 justify-center items-center">
          <TwitterIcon className="text-pink cursor-pointer hover:opacity-70 " />
          <TelegramIcon className="text-pink cursor-pointer hover:opacity-70 " />
        </div>
        {/* bottom line */}
        <div className="w-full border-b-[0.1px] border-solid border-wheat"></div>
        {/*  */}
        <div className="w-full flex flex-col md:gap-0 gap-6 md:flex-row justify-between items-center">
          <div className="flex justify-center items-center gap-4">
            {/* Language */}
            <LanguageIcon className="text-pink text-[28px] hover:opacity-70 cursor-pointer" />
            {/* Setting icon */}
            <SettingsIcon className="text-pink text-[28px] hover:opacity-70 cursor-pointer" />
          </div>
          <div className="flex justify-center items-center gap-6">
            {/* ==========ove coin icon and price */}
            <div className="flex justify-center items-center gap-4">
              <Image
                src="/Assets/CoinImage/ove.png"
                width={28}
                height={15}
              ></Image>
              <p className="text-[17px] text-pink">$0.000012</p>
            </div>
            {/*  button */}
            <button className="text-white text-[17px] bg-pink px-4 py-1 rounded-xl hover:opacity-70 flex justify-center items-center gap-2">
              Buy Ove
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

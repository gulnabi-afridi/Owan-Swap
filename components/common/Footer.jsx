import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CallMadeIcon from "@mui/icons-material/CallMade";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { FaDiscord } from "react-icons/fa";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { SiTiktok } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  const [mode, Set_Mode] = useState(true);
  const [mode_Box, Set_Mode_Box] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full min-h-[40px] bg-black border-t-[1px] px-4 xl:px-0 border-solid border-[#f2ca90]">
      <div className="w-full max-w-[1200px] m-auto flex flex-col justify-center items-center md:items-start pt-16 pb-32 gap-10  ">
        {/* social icons */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* telegram */}
          {SocialIcons.map((social, index) => {
            return (
              <div className="w-full flex justify-between items-center bg-[#262626] p-4 md:py-5 border-[1px] border-solid border-white rounded-md cursor-pointer">
                <div className="flex justify-center items-center gap-2 ">
                  {social.icon}
                  <p className="text-pink text-[30px]">{social.name}</p>
                </div>
                <CallMadeIcon className="text-[25px] text-[rgb(202,190,236)]" />
              </div>
            );
          })}
        </div>
        {/* ============> dark and light mode */}
        <div className="w-full flex justify-between items-center">
          <div className=" relative flex flex-col justify-center items-center">
            {mode ? (
              <NightlightIcon
                onClick={() => Set_Mode_Box(true)}
                className="text-pink text-[28px] cursor-pointer hover:opacity-70 "
              />
            ) : (
              <LightModeIcon
                onClick={() => Set_Mode_Box(true)}
                className="text-pink cursor-pointer text-[28px] hover:opacity-70 "
              />
            )}

            {mode_Box && (
              <div className="absolute flex flex-col gap-2 items-start justify-center left-10 lg:left-0 top-8 w-[170px] min-h-[80px] bg-[#312e2e] shadow-[#646262] shadow-sm">
                {/* ==============>light mode */}
                <div
                  onClick={() => {
                    Set_Mode(false);
                    Set_Mode_Box(false);
                  }}
                  className="w-full flex justify-start items-center gap-2 cursor-pointer hover:bg-pink p-3"
                >
                  <LightModeIcon className="text-[white] hover:opacity-70 " />
                  <p className="text-[18px] text-[white]">Light</p>
                </div>
                {/* ================>dark mode */}
                <div
                  onClick={() => {
                    Set_Mode(true);
                    Set_Mode_Box(false);
                  }}
                  className="w-full flex justify-start items-center gap-2 cursor-pointer hover:bg-pink p-3"
                >
                  <NightlightIcon className="text-[white] hover:opacity-70 " />
                  <p className="text-[18px] text-[white]">Dark</p>
                </div>
              </div>
            )}
          </div>
          {/*  */}
          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/Assets/CoinImage/ove.png"
                width={28}
                height={15}
              ></Image>
              <p className="text-[17px] text-pink">$0.000012</p>
            </div>
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

const SocialIcons = [
  {
    icon: <TelegramIcon className="text-pink text-[30px]" />,
    name: "Telegram",
  },
  {
    icon: <FaDiscord className="text-pink text-[30px]" />,
    name: "Discord",
  },
  {
    icon: <AiFillInstagram className="text-pink text-[30px]" />,
    name: "Instagram",
  },
  {
    icon: <TwitterIcon className="text-pink text-[30px]" />,
    name: "Twitter",
  },
  {
    icon: <SiTiktok className="text-pink text-[30px]" />,
    name: "TikTok",
  },
  {
    icon: <FacebookOutlinedIcon className="text-pink text-[30px]" />,
    name: "Facebook",
  },
];

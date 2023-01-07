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

function Footer({ Mode, SetMode, ModeBox, SetModeBox, Theme, SetTheme }) {
  return (
    <div className="w-full min-h-[40px] bg-white dark:bg-black border-t-[1px] px-4 xl:px-0 border-solid border-black dark:border-[#f2ca90]">
      <div className="w-full max-w-[1200px] m-auto flex flex-col justify-center items-center md:items-start pt-16 pb-32 gap-10  ">
        {/* ==========> social icons */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* telegram */}
          {SocialIcons.map((social, index) => {
            return (
              <Link legacyBehavior href={social.link}>
                <a target="_blank">
                  <div className="w-full flex justify-between items-center blackShadow bg-darkWhite dark:bg-[#262626] p-4 md:py-5 border-[1px] border-solid border-black dark:border-white rounded-md cursor-pointer hover:opacity-70">
                    <div className="flex justify-center items-center gap-2 ">
                      {social.icon}
                      <p className=" text-black dark:text-pink text-[30px]">
                        {social.name}
                      </p>
                    </div>
                    <CallMadeIcon className="text-[25px] text-black dark:text-[rgb(202,190,236)]" />
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        {/* ============> dark and light mode */}
        <div className="w-full flex justify-between items-center">
          <div className=" relative flex flex-col justify-center items-center">
            {Mode ? (
              <NightlightIcon
                onClick={() => {
                  SetModeBox(true);
                }}
                className="text-black dark:text-pink text-[28px] cursor-pointer hover:opacity-70 "
              />
            ) : (
              <LightModeIcon
                onClick={() => {
                  SetModeBox(true);
                }}
                className="text-black dark:text-pink cursor-pointer text-[28px] hover:opacity-70 "
              />
            )}

            {ModeBox && (
              <div className="absolute flex flex-col gap-2 items-start justify-center left-10 lg:left-0 top-8 w-[170px] min-h-[80px] bg-white dark:bg-[#312e2e] shadow-[#646262] shadow-sm">
                {/* ==============>light mode */}
                <div
                  onClick={() => {
                    SetMode(false);
                    SetModeBox(false);
                    SetTheme("light");
                  }}
                  className="w-full flex justify-start items-center gap-2 cursor-pointer hover:bg-darkGrey dark:hover:bg-pink p-3"
                >
                  <LightModeIcon className="text-black dark:text-[white] hover:opacity-70 " />
                  <p className="text-[18px] text-black dark:text-[white]">Light</p>
                </div>
                {/* ================>dark mode */}
                <div
                  onClick={() => {
                    SetMode(true);
                    SetModeBox(false);
                    SetTheme("dark");
                  }}
                  className="w-full flex justify-start items-center gap-2 cursor-pointer hover:bg-darkGrey dark:hover:bg-pink p-3"
                >
                  <NightlightIcon className="text-black dark:text-[white] hover:opacity-70 " />
                  <p className="text-[18px] text-black dark:text-[white]">Dark</p>
                </div>
              </div>
            )}
          </div>
          {/*  */}
          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/Assets/logo.png"
                width={34}
                height={15}
              ></Image>
              <p className="text-[17px] dark:text-pink">$0.05</p>
            </div>
            <button className="text-white dark:text-darkGrey text-[17px] bg-black dark:bg-pink px-4 py-1 rounded-xl hover:opacity-70 flex justify-center items-center gap-2">
              Buy GOXC
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
    icon: <TelegramIcon className="dark:text-pink text-[30px]" />,
    name: "Telegram",
    link: "https://web.telegram.org/#/login",
  },
  {
    icon: <FaDiscord className="dark:text-pink text-[30px]" />,
    name: "Discord",
    link: "https://discord.com/login",
  },
  {
    icon: <AiFillInstagram className="dark:text-pink text-[30px]" />,
    name: "Instagram",
    link: " https://www.instagram.com/accounts/login/",
  },
  {
    icon: <TwitterIcon className="dark:text-pink text-[30px]" />,
    name: "Twitter",
    link: "https://twitter.com/login",
  },
  {
    icon: <SiTiktok className="dark:text-pink text-[30px]" />,
    name: "TikTok",
    link: "https://www.tiktok.com/login",
  },
  {
    icon: <FacebookOutlinedIcon className="dark:text-pink text-[30px]" />,
    name: "Facebook",
    link: "https://www.facebook.com/",
  },
];

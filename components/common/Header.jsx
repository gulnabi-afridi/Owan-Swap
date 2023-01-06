import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useRouter } from "next/router";
import CallMadeIcon from "@mui/icons-material/CallMade";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { FaDiscord } from "react-icons/fa";

function Header({ Mode, SetMode, ModeBox, SetModeBox, Theme, SetTheme }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full h-[68px] bg-white dark:bg-black flex justify-between items-center border-b-[1px] border-solid border-black dark:border-[#f2ca90] px-4 md:px-24">
      {/* ==========left portion */}
      <div className="flex justify-center items-center">
        {/* logo */}
        <Link href="/">
          <div className="w-[40px] h-[40px] flex justify-start items-center relative mr-0 md:mr-24 hover:opacity-60">
            <Image src="/Assets/logo.png" fill></Image>
          </div>
        </Link>
        <div className="xl:block hidden">
          {HeaderNav.map((item, index) => {
            return (
              <Link
                onClick={() => router.push(item.path)}
                href={item.path}
                className={`dark:text-pink text-black text-[17px] mr-8 font-light hover:opacity-70 ${
                  router.pathname === item.path ? "underline" : "none"
                }  `}
              >
                {item.navItem}
                <CallMadeIcon className="text-base ml-1 text-[rgb(202,190,236)]" />
              </Link>
            );
          })}
        </div>
      </div>
      {/* ==============right portion */}
      <div className="flex justify-center items-center gap-1 md:gap-5">
        {/* ============ove coin icon and price */}
        <div className="xl:flex hidden justify-center items-center gap-2 mr-4">
          <Image src="/Assets/CoinImage/ove.png" width={28} height={15}></Image>
          <p className="text-[17px] text-black dark:text-pink">$0.5</p>
        </div>
        {/* ============> dark and light mode */}
        <div className=" relative sm:flex hidden flex-col justify-center items-center">
          {Mode ? (
            <NightlightIcon
              onClick={() => {
                SetModeBox(true);
              }}
              className="text-black dark:text-pink cursor-pointer hover:opacity-70 "
            />
          ) : (
            <LightModeIcon
              onClick={() => {
                SetModeBox(true);
              }}
              className="text-black dark:text-pink cursor-pointer hover:opacity-70 "
            />
          )}

          {ModeBox && (
            <div className="absolute flex flex-col gap-2 items-start justify-center top-12 w-[170px] min-h-[80px] bg-white dark:bg-[#312e2e] shadow-[#646262] shadow-sm">
              {/* ==============>light mode */}
              <div
                onClick={() => {
                  SetMode(false);
                  SetModeBox(false);
                  SetTheme("light");
                }}
                className="w-full flex justify-start items-center gap-2 cursor-pointer hover:bg-darkGrey dark:hover:bg-pink p-3"
              >
                <LightModeIcon className="text-black  dark:text-white hover:opacity-70 " />
                <p className="text-[18px] text-black dark:text-white">Light</p>
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
                <NightlightIcon className="text-black dark:text-white hover:opacity-70 " />
                <p className="text-[18px] text-black dark:text-white ">Dark</p>
              </div>
            </div>
          )}
        </div>
        {/* ===========>Social links */}
        <div className="xl:flex hidden justify-center items-center gap-3">
          <Link legacyBehavior href=" https://twitter.com/login">
            <a target="_blank">
              <TwitterIcon className="dark:text-pink text-black text-[26px] cursor-pointer hover:opacity-70 " />
            </a>
          </Link>
          <Link legacyBehavior href="https://web.telegram.org/#/login">
            <a target="_blank">
              <TelegramIcon className="dark:text-pink text-black text-[26px] cursor-pointer hover:opacity-70 " />
            </a>
          </Link>
          <Link legacyBehavior href="https://discord.com/login">
            <a target="_blank">
              <FaDiscord className="dark:text-pink text-black text-[26px] cursor-pointer hover:opacity-70 " />
            </a>
          </Link>
        </div>

        {/* Language */}
        <LanguageIcon className="xl:block hidden dark:text-pink text-black text-[28px] hover:opacity-70 cursor-pointer" />
        {/* Setting icon */}
        <SettingsIcon className="xl:block hidden dark:text-pink text-black text-[28px] hover:opacity-70 cursor-pointer" />
        {/* ================> connect wallet button */}
        <button className="text-white dark:text-black text-[12px] md:block hidden sm:text-[17px] bg-black dark:bg-pink px-4 py-[6px] rounded-md hover:opacity-70">
          Connect Wallet
        </button>

        <div className="xl:hidden block">
          <Hamburger
            className="dark:text-pink text-black"
            rounded
            size={24}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          style={{ width: "80%", height: "100vh", background: "black" }}
        >
          <div className="w-full min-h-screen bg-darkWhite dark:bg-black flex flex-col justify-start items-start p-4 py-10 gap-10 text-black  dark:text-[#e8e1e1]">
            {/* Logo */}
            <Link href="/">
              <div className="w-[40px] h-[40px] flex justify-start items-center relative mr-0 md:mr-24 hover:opacity-60">
                <Image src="/Assets/logo.png" fill></Image>
              </div>
            </Link>
            {MobileNav.map((item, index) => {
              return (
                <Link
                  onClick={() => {
                    router.push(item.path);
                    setIsOpen(false);
                  }}
                  href={item.path}
                  className="w-full text-black dark:text-pink text-[18px] mr-8 font-light hover:opacity-70 border-b-[0.5px] border-solid border-black dark:border-[white]"
                >
                  {item.navItem}
                  <CallMadeIcon className="text-base ml-1 text-black dark:text-[rgb(202,190,236)]" />
                </Link>
              );
            })}
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-white dark:text-black text-[14px] bg-black dark:bg-pink max-w-[230px] w-full h-[45px] rounded-md hover:opacity-70"
            >
              Connect Wallet
            </button>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;

const HeaderNav = [
  {
    navItem: "Swap",
    path: "/swap",
  },
  {
    navItem: "Liquidity",
    path: "/liquidity",
  },
];
const MobileNav = [
  {
    navItem: "Home",
    path: "/",
  },
  {
    navItem: "Swap",
    path: "/swap",
  },
  {
    navItem: "Liquidity",
    path: "/liquidity",
  },
  {
    navItem: "Twitter",
    path: "https://twitter.com/i/flow/login",
  },
  {
    navItem: "Telegram",
    path: "https://telegr.am/user_mgt/login",
  },
  {
    navItem: "Discord",
    path: "https://discord.com/",
  },
  {
    navItem: "Instagram",
    path: "https://www.instagram.com/",
  },
];

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full h-[60px] bg-[black] flex justify-between items-center border-b-[1px] border-solid border-[#f2ca90] px-2 md:px-5">
      {/* ==========left portion */}
      <div className="flex justify-center items-center">
        {/* logo */}
        <Link href="/">
          <div className="w-[170px] h-[40px] flex justify-center items-center relative mr-2 md:mr-12">
            <Image src="/logo.svg" fill></Image>
          </div>
        </Link>
        <div className="xl:block hidden">
          {HeaderNav.map((item, index) => {
            return (
              <Link
                onClick={() => router.push(item.path)}
                href={item.path}
                className="text-[white] text-[17px] mr-8 font-light hover:opacity-70"
              >
                {item.navItem}
              </Link>
            );
          })}
        </div>
      </div>
      {/* ===========right portion */}
      <div className="flex justify-center items-center gap-1 md:gap-5">
        {/* ==========ove coin icon and price */}
        <div className="xl:flex hidden justify-center items-center gap-2">
          <Image src="/Assets/CoinImage/ove.png" width={28} height={15}></Image>
          <p className="text-[17px] text-[white]">$0.000012</p>
        </div>
        {/* Language */}
        <LanguageIcon className="sm:block hidden text-[white] text-[28px] hover:opacity-70" />
        {/* Setting icon */}
        <SettingsIcon className="sm:block hidden text-[white] text-[28px] hover:opacity-70" />
        {/* connect wallet button */}
        <button className="text-white text-[12px] sm:text-[17px] bg-[#FFAA27] md:px-4 px-1 md:py-1 py-1 rounded-xl hover:opacity-70">
          Connect Wallet
        </button>

        <div className="xl:hidden block">
          <Hamburger
            color="#FFAA27"
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
          className="drawer"
          style={{ width: "80%", height: "100vh", background: "black" }}
        >
          <div className="w-full flex flex-col justify-center items-start p-4 py-12 gap-10  text-[#e8e1e1]">
            {/* Logo */}
            <Link href="/">
              <div className="w-[170px] h-[40px] flex justify-center items-center relative">
                <Image src="/logo.svg" fill></Image>
              </div>
            </Link>
            {HeaderNav.map((item, index) => {
              return (
                <Link
                  onClick={() => {
                    router.push(item.path);
                    setIsOpen(false);
                  }}
                  href={item.path}
                  className="w-full text-[#FFAA27] text-[18px] mr-8 font-light hover:opacity-70 border-b-[0.5px] border-solid border-[white]"
                >
                  {item.navItem}
                </Link>
              );
            })}
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
  {
    navItem: "Limit",
    path: "/swap",
  },
  {
    navItem: "Launch",
    path: "/swap",
  },
  {
    navItem: "Farms",
    path: "/swap",
  },
  {
    navItem: "Pools",
    path: "/swap",
  },
  {
    navItem: "Nft",
    path: "/swap",
  },
  {
    navItem: "Lottery",
    path: "/swap",
  },
  {
    navItem: "More",
    path: "/swap",
  },
];

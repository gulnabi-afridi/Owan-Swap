import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Box from "@mui/material/Box";

function SecCoinModal({ open, setOpen, coin, setCoin }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 450,
    width:"100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 8,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    paddingLeft: "20px",
    paddingRight: "20px",
    maxHeight: "700px",
    outline: "none",
    background:"black",
    border:"2px solid white"
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose} className="mx-4">
      <Box sx={style}>
        {/* => Top bar */}
        <div className="w-full py-6 flex items-center justify-between gap-3 border-solid border-0 border-b border-[rgb(231,227,235)]">
          <h2 className="font-semibold text-xl text-[#FFAA27]">
            Select a Token
          </h2>
          <CloseIcon
            className="fill-[#FFAA27] cursor-pointer text-xl"
            onClick={() => setOpen(false)}
          />
        </div>
        {/* =>search input */}
        <div className="w-full h-[80px] ">
          <input
            className="w-full h-full px-4 rounded-xl bg-[#eeeaf4] border-[1px] border-solid border-[#cbcac9] focus:outline-[4px] focus:outline-solid focus:outline-[#FFAA27]"
            type="text"
            id="search"
            name="search"
            placeholder="Search name or paste address"
          ></input>
        </div>
        {/* =====>common tokens  */}
        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-[#FFAA27]">Common tokens</p>
          <div className="grid grid-cols-3 md:grid-cols-4 justify-center items-center gap-2">
            {CommonTokes.map((coin, index) => {
              return (
                <div
                  onClick={() => {
                    setCoin(coin);
                    setOpen(false);
                  }}
                  key={index}
                  className="cursor-pointer flex justify-center items-center gap-2 border-[1px] border-solid border-[#bdb8af] py-1 px-2 rounded-xl"
                >
                  <Image src={coin.ico} width={28} height={10}></Image>
                  <p className="uppercase text-[#FFAA27] text-[17px]">
                    {coin.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* =======>more coins */}
        <div className="cursor-pointer flex flex-col gap-3 overflow-scroll py-2 ">
          {MoreCoins.map((coin, index) => {
            return (
              <div
                onClick={() => {
                  setCoin(coin);
                  setOpen(false);
                }}
                className="flex gap-2 justify-start items-center"
              >
                <Image src={coin.ico} width={28} height={10}></Image>
                {/* coin name */}
                <p className="uppercase text-[#FFAA27] text-[18px] font-semibold leading-5">
                  {coin.title}
                  <br />{" "}
                  <span className="font-light text-[12px] text-[#FFAA27]">
                    {coin.subTitle}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        {/* ========> manage token button */}
        <button className="text-[#FFAA27] py-4 text-[18px] hover:opacity-70">
          Manage Token
        </button>
      </Box>
    </Modal>
  );
}

const CommonTokes = [
  {
    ico: "/Assets/CoinImage/ove.png",
    title: "ove",
  },
  {
    ico: "/Assets/Coin/cake.png",
    title: "cake",
  },
  {
    ico: "/Assets/Coin/bsud.png",
    title: "bsud",
  },
  {
    ico: "/Assets/Coin/bunny.png",
    title: "bunny",
  },
];

const MoreCoins = [
  {
    ico: "/Assets/CoinImage/ove.png",
    title: "NRV",
    subTitle: "NERVE FINANCE",
  },
  {
    ico: "/Assets/Coin/belt.png",
    title: "belt",
    subTitle: "belt",
  },
  {
    ico: "/Assets/Coin/eps.png",
    title: "eps",
    subTitle: "ellipsis",
  },
  {
    ico: "/Assets/Coin/tko.png",
    title: "eps",
    subTitle: "tokyocrypto",
  },
  {
    ico: "/Assets/Coin/cake.png",
    title: "cake",
    subTitle: "pancakeswap token",
  },
  {
    ico: "/Assets/Coin/bnb.svg",
    title: "bnb",
    subTitle: "binance chain native token",
  },
  {
    ico: "/Assets/Coin/bsud.png",
    title: "bsud",
    subTitle: "bsud token",
  },
  {
    ico: "/Assets/Coin/bunny.png",
    title: "bunny",
    subTitle: "pancakeswap token",
  },
  {
    ico: "/Assets/Coin/bunny.png",
    title: "bunny",
    subTitle: "pancakeswap token",
  },
  {
    ico: "/Assets/Coin/eps.png",
    title: "eps",
    subTitle: "ellipsis",
  },
  {
    ico: "/Assets/Coin/ove.png",
    title: "NRV",
    subTitle: "NERVE FINANCE",
  },
];
export default SecCoinModal;
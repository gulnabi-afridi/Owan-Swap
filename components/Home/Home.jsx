import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="w-full h-screen bg-[black]">
      <div className="w-full h-full max-w-[1200px] m-auto flex flex-col md:flex-row justify-center items-center px-6 xl:px-0">
        {/* ===============>left portion */}
        <div className="md:w-[50%] w-full flex flex-col justify-center items-center md:items-start gap-4 md:gap-7">
          <p className="text-pink text-[45px] md:text-[64px] font-semibold leading-[50px] md:leading-[70px]">
            Up to 100x
            <br /> Leverage.
          </p>
          <p className="text-[16px] md:text-[20px] lg:text-start text-center text-pink font-semibold">
            Trade, Earn & Win in Crypto on the newest & Most Popular
            Decentralized Platform.
          </p>
          {/* buttons */}
          <div className="md:w-[50%] w-full flex justify-center lg:justify-start items-center gap-4">
            {/*  connect wallet button */}
            <button className="text-black text-[17px] bg-pink w-[190px] py-3 rounded-xl hover:opacity-70">
              Connect Wallet
            </button>
            {/* trade now button */}
            <button className="text-pink text-[17px] border-[2px] border-solid border-pink w-[160px] py-[9px] rounded-xl hover:opacity-70">
              Trade Now
            </button>
          </div>
        </div>
        {/* ===============>right portion */}
        <div className="md:w-[50%] w-full h-[450px] md:h-[600px] flex justify-center items-center relative">
          <Image src="/Assets/ovenSwap.png" fill></Image>
        </div>
      </div>
    </div>
  );
}

export default Home;

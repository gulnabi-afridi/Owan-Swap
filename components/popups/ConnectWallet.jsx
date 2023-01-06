import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const ConnectWallet = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose} className="mx-4">
      <div
        className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[400px] w-full blackShadow dark:full-shadow
       outline-none bg-white dark:bg-black border-2 border-solid rounded-3xl border-black dark:border-white"
      >
        {/* => Top bar */}
        <div className="w-full py-9 px-4 flex items-center justify-between gap-3 border-solid border-0 border-b border-black dark:border-[rgb(231,227,235)]">
          <h2 className="font-semibold text-xl text-black dark:text-pink">
            Connect Wallet
          </h2>
          <CloseIcon
            className="fill-yellow-500 cursor-pointer text-xl"
            onClick={() => setOpen(false)}
          />
        </div>
        {/* => Middle */}
        <div className="cursor-pointer py-10 px-4 w-full flex items-center justify-center border-solid border-0 border-b border-[rgb(231,227,235)]">
          <div className="flex flex-col items-center justify-center gap-4 ">
            {/* => Icon */}
            <div className="relative flex items-center justify-center object-contain w-[35px] h-[35px]">
              <Image src="/Assets/Swap/metamask.svg" alt="" fill />
            </div>
            <p className="text-xl font-semibold text-black dark:text-pink">
              Metamask
            </p>
          </div>
        </div>
        {/* Bott/om */}
        <div className="w-full flex flex-col items-center justify-between gap-6 py-6 px-4 ">
          <p className="text-base text-[red] font-semibold text-center w-full">
            Haven’t got a crypto wallet yet?
          </p>
          {/* => Connect wallet button */}

          <button
            className="w-[95%] rounded-[25px] bg-black dark:bg-pink py-3 px-5 text-white dark:text-darkGrey font-semibold hover:opacity-80 transition-all duration-500"
          >
            Learn How To Connect Wallet
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWallet;

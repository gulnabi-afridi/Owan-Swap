import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const ConnectWallet = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    width: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 8,
    overflow: "hidden",
    background: "black",
    border: "2px solid white",
  };

  return (
    <Modal open={open} onClose={handleClose} className="mx-4">
      <Box sx={style}>
        {/* => Top bar */}
        <div className="w-full py-9 px-4 flex items-center justify-between gap-3 border-solid border-0 border-b border-[rgb(231,227,235)]">
          <h2 className="font-semibold text-xl text-[#FFAA27]">
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
            <p className="text-xl font-semibold text-[#FFAA27]">Metamask</p>
          </div>
        </div>
        {/* Bott/om */}
        <div className="w-full flex flex-col items-center justify-between gap-6 py-6 px-4 ">
          <p className="text-base text-[#FFAA27] font-semibold text-center w-full">
            Haven’t got a crypto wallet yet?
          </p>
          {/* => Connect wallet button */}

          <button
            onClick={() => setOpenModal(true)}
            className="w-[95%] rounded-[25px] bg-[#FFAA27] py-3 px-5 text-black font-semibold hover:opacity-80 transition-all duration-500"
          >
            Learn How To Connect Wallet
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ConnectWallet;

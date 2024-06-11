import React from "react";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { LuShuffle } from "react-icons/lu";
import { SlLoop } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiPlayListFill } from "react-icons/ri";
import { RiFolderAddLine } from "react-icons/ri";
import { MdOutlineDevicesOther } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import { CgMiniPlayer } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="w-[82%] h-[9%] text-white border-[0.5px] border-[#404040] rounded-lg fixed bottom-1 flex">
        <div className="first-part flex flex-row items-center h-full w-[50%] justify-between px-[1rem]">
          <div className="h-[2.75rem] w-[2.75rem] bg-[#1ed760] rounded-full z-10 flex justify-center items-center duration-200 drop-shadow-xl">
            <FaPlay className="text-black" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-7">
            <MdSkipPrevious className="text-3xl text-[#898989]" />
            <MdSkipNext className="text-3xl text-[#898989]" />
            <LuShuffle className="text-2xl text-[#898989]" />
            <SlLoop className="text-2xl text-[#898989]" />
          </div>
          <div className="progress flex flex-row gap-2 w-[50%]">
            <p className="text-sm">2:23</p>
            <input type="range" className="w-full" />
            <p className="text-sm">4:45</p>
          </div>
          <FiVolume2 className="text-2xl text-[#898989]" />
        </div>
        <div className="song-part h-full w-[25%] flex items-center justify-center gap-3">
          <div className="img h-full w-[20%] justify-center flex items-center">
            <img
              src="https://i.scdn.co/image/ab67616d00001e02d5f4378b1ffc9119fdc7306d"
              alt="song"
              className="h-[4.5rem] w-[4.5rem] rounded-md"
            />
          </div>
          <div className="text h-full w-[75%] text-white flex flex-col">
            <div className="text-lg">Sajni (From "Laapataa Ladies")</div>
            <div className="text-sm text-[#898989]">
              Ram Sampath, Arijit Singh
            </div>
            <div className="text-sm text-[#898989]">Laapataa Ladies</div>
          </div>
        </div>
        <div className="icons-part h-full w-[25%] flex flex-row justify-around items-center">
          <IoIosHeartEmpty className="text-2xl text-[#898989]" />
          <RiFolderAddLine className="text-2xl text-[#898989]" />
          <RiPlayListFill className="text-2xl text-[#898989]" />
          <MdOutlineDevicesOther className="text-2xl text-[#898989]" />
          <PiDotsThreeBold className="text-2xl text-[#898989]" />
          <div className="h-[60%] w-[1px] bg-white"></div>
          <CgMiniPlayer className="text-2xl text-[#898989]" />
          <IoMenu className="text-2xl text-[#898989]" />
        </div>
      </div>
    </>
  );
};

export default Footer;

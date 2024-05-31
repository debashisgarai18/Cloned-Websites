import React from "react";
import { LuLibrary } from "react-icons/lu";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdLockOpen } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import pphoto from "../../assets/PHOTO.jpg"
import { PiStarFour } from "react-icons/pi";

const Navbar = () => {
  return (
    <>  
      <div className="w-full h-[8%] px-5 flex flex-wrap items-center">
        <div className="fpart h-full w-[50%] flex justify-start items-center gap-3">
          <div className="flex flex-row items-center w-[33%] gap-3 text-white">
            <LuLibrary className="text-2xl" />
            <h1 className="text-lg">My Library</h1>
          </div>
          <div className="flex flex-row w-[33%]">
            <button className="flex flex-row items-center gap-3 w-[50%] focus:bg-[#111111] px-3 py-2 rounded-md text-[#898989] hover:text-white focus:text-white">
              <GoHomeFill className="text-2xl" />
              <h1 className="text-lg">Home</h1>
            </button>
            <button className="flex flex-row items-center gap-3 w-[50%] focus:bg-[#111111] px-3 py-2 rounded-md text-[#898989] hover:text-white focus:text-white">
              <PiStarFour className="text-2xl" />
              <h1 className="text-lg">Discover</h1>
            </button>
          </div>
          <div className="flex flex-row items-center w-[33%] gap-3 justify-center text-[#898989] hover:text-white">
            <IoSearch className="text-2xl" />
            <h1 className="textlgl">Search</h1>
          </div>
        </div>
        <div className="spart h-full w-[50%] flex flex-row items-center justify-end gap-7">
        <FaRegBell className="text-2xl text-[#898989] hover:text-white cursor-pointer"/>
        <MdLockOpen className="text-2xl text-[#898989] hover:text-white cursor-pointer"/>
        <SlPeople className="text-2xl text-[#898989] hover:text-white cursor-pointer"/>
        <IoSettingsOutline className="text-2xl text-[#898989] hover:text-white cursor-pointer"/>
        <div className="w-[4%] bg-red-400 h-[50%] rounded-full overflow-hidden">
            <img src={pphoto} alt="" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

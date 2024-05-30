import React from "react";
import { LuLibrary } from "react-icons/lu";
import { GoHomeFill } from "react-icons/go";
import { WiStars } from "react-icons/wi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[8%] text-white px-3">
        <div className="fpart h-full w-[50%] flex justify-start items-center gap-3">
          <div className="flex flex-row items-center w-[33%] gap-3">
            <LuLibrary className="text-2xl" />
            <h1 className="text-2xl">My Library</h1>
          </div>
          <div className="flex flex-row w-[33%]">
            <div className="flex flex-row items-center gap-2 w-[50%]">
              <GoHomeFill className="text-2xl" />
              <h1 className="text-2xl">Home</h1>
            </div>
            <div className="flex flex-row items-center gap-2 w-[50%]">
              <WiStars className="text-5xl" />
              <h1 className="text-2xl">Discover</h1>
            </div>
          </div>
          <div className="flex flex-row items-center w-[33%] gap-3 justify-center">
            <IoSearch className="text-2xl" />
            <h1 className="text-2xl">Search</h1>
          </div>
        </div>
        <div className="spart h-full w-[50%]"></div>
      </div>
    </>
  );
};

export default Navbar;

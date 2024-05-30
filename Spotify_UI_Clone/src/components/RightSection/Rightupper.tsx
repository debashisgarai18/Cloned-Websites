import React from "react";
import { BsFilterSquare } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const Rightupper = () => {
  return (
    <>
      <div className="w-full h-[86%] border-[0.5px] border-[#404040] rounded-lg overflow-y-auto hide-scrollbar mb-2 px-5 py-3">
        {/* right nav div */}
        <div className="right-nav w-full h-fit flex flex-row flex-wrap justify-between items-center mb-3">
          <div className="right-menu h-fit w-fit flex flex-wrap flex-row gap-3">
            <button className="px-4 py-2 text-sm text-semibold bg-[#141414] text-white hover:text-black hover:bg-white rounded-md">
              All
            </button>
            <button className="px-4 py-2 text-sm text-semibold bg-[#141414] text-white hover:text-black hover:bg-white rounded-md">
              Music
            </button>
            <button className="px-4 py-2 text-sm text-semibold bg-[#141414] text-white hover:text-black hover:bg-white rounded-md">
              Podcasts
            </button>
            <button className="px-4 py-2 text-sm text-semibold bg-[#141414] text-white hover:text-black hover:bg-white rounded-md">
              Audiobooks
            </button>
          </div>
          <div className="filter-icon px-4">
            <BsFilterSquare className="text-xl cursor-pointer hover:text-white text-[#898989]" />
          </div>
        </div>
        {/* made for you section */}
        <div className="mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-xl font-bold text-white">Made for you</h1>
            </div>
            <div className="right-icons flex flex-row flex-wrap gap-5 w-fit pr-4 text-2xl">
              <BiLeftArrowAlt className="cursor-pointer hover:text-white text-[#898989]" />
              <BiRightArrowAlt className="cursor-pointer hover:text-white text-[#898989]" />
              <BsThreeDots className="cursor-pointer hover:text-white text-[#898989]" />
            </div>
          </div>
        </div>
        {/* TOODO : start from the made for you part */}
      </div>
    </>
  );
};

export default Rightupper;

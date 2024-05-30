import React from "react";
import { BsPinAngle } from "react-icons/bs";
import { SlPlaylist } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { PiFolderSimpleBold } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { BiPodcast } from "react-icons/bi";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa6";

const warr: Array<{ [key: string]: string | JSX.Element}> = [
  {
    icon: <BsPinAngle className="text-xl"/>,
    name: "Pin",
  },
  {
    icon: <SlPlaylist className="text-xl"/>,
    name: "Playlists",
  },
];
const noarr: Array<{ [key: string]: string | JSX.Element}> = [
  {
    icon: <FaRegHeart className="text-xl"/>,
    name: "Liked Songs",
  },
  {
    icon: <FaRegBookmark className="text-xl"/>,
    name: "Saves",
  },
  {
    icon: <MdLibraryMusic className="text-xl"/>,
    name: "Albums",
  },
  {
    icon: <PiFolderSimpleBold className="text-xl"/>,
    name: "Folders",
  },
  {
    icon: <BiPodcast className="text-xl"/>,
    name: "Podcasts",
  },
  {
    icon: <IoBookOutline className="text-xl"/>,
    name: "Audiobooks",
  },
  {
    icon: <BsPersonLinesFill className="text-xl"/>,
    name: "Artists",
  },
];

const LeftSection = () => {
  return (
    <>
      <div className="w-[17%] h-full text-[#898989]">
        <div className="arr w-full h-fit flex flex-wrap flex-col gap-5 px-3 py-2">
          {
            warr.map((e) => ( 
              <div className="flex flex-row items-center justify-between hover:border-[0.5px] hover:border-white hover:text-white hover:rounded-md px-3 py-2 cursor-pointer">
                <div className="flex flex-row items-center w-fit gap-4">
                {e.icon}
                <h1 className="text-lg">{e.name}</h1>
                </div>
                <FaGreaterThan className="w-fit"/>
              </div>
            ))  
          }
        </div>
        <div className="narr w-full h-fit flex flex-wrap flex-col gap-5 px-3 py-2">
          {
            noarr.map((e) => (  
                <div className="flex flex-row items-center gap-4 hover:border-[0.5px] hover:text-white hover:border-white hover:rounded-md w-full px-3 py-2 cursor-pointer">
                {e.icon}
                <h1 className="text-lg">{e.name}</h1>
                </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default LeftSection;

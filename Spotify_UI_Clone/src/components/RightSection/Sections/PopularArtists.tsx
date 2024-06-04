import React from "react";
import { FaPlay } from "react-icons/fa6";

interface artists {
  artistArr: Array<{ img: string, name: string }>;
  name: string;
}

const PopularArtists = ({ artistArr, name }: artists) => {
  return (
    <div className="artists mt-3 w-full h-fit mb-3">
      <div className="top-text w-full h-fit flex flex-row justify-between py-3">
        <div className="this-text w-fit">
          <h1 className="text-2xl font-bold text-white hover:underline">
            {name}
          </h1>
        </div>
        <div className="right-icons flex flex-row flex-wrap gap-5 w-fit pr-4 text-2xl">
          <a href="" className="text-[#646465] text-sm hover:underline">
            Show all
          </a>
        </div>
      </div>
      {/* <div className="w-full h-fit grid grid-cols-6 gap-6 place-items-center">
            {artistArr.map((e) => (
              <div className="relative flex w-fit h-full flex-col hover:bg-gradient-to-b hover:from-[#1a1a1a] hover:via-[#2c2c2c] hover:to-[#1d1d1d] hover:rounded-lg px-5 py-1 justify-center">
                <div className="relative overflow-hidden rounded-full w-[100%] h-[65%] drop-shadow-xl">
                  <img src={e.img} className="object-cover w-full h-full"/>
                </div>
                <div className="mt-5">
                  <div className="text-lg font-bold text-white">{e.name}</div>
                  <div className="text-sm font-bold text-[#7f7f7f]">Artist</div>
                </div>
                <div className="absolute h-6 w-6 bg-geen-400 rounded-full bottom-2 right-2 z-10">

                </div>
              </div>
            ))}
          </div> */}
      <div className="w-full h-fit grid grid-cols-6 gap-6 place-items-center">
        {artistArr.map((e) => (
          <div className="relative flex w-fit h-full flex-col hover:bg-gradient-to-b hover:from-[#1a1a1a] hover:via-[#2c2c2c] hover:to-[#1d1d1d] hover:rounded-lg px-5 py-1 justify-center group">
            <div className="relative overflow-hidden rounded-full w-[100%] h-[65%] drop-shadow-xl">
              <img
                src={e.img}
                className="object-cover"
                alt={`${e.name} image`}
              />
            </div>
            <div className="mt-5">
              <div className="text-lg font-bold text-white">{e.name}</div>
              <div className="text-sm font-bold text-[#7f7f7f]">Artist</div>
            </div>
            <div className="absolute bottom-[31%] right-[7%] h-[3.2rem] w-[3.2rem] bg-[#1ed760] rounded-full z-10 flex justify-center items-center opacity-0 transition-opacity ease-in duration-200 group-hover:opacity-100 hover:scale-105 drop-shadow-xl">
              <FaPlay className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;

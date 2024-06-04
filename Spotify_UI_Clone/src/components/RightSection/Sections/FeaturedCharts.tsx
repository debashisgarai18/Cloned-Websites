import React from 'react'
import { FaPlay } from "react-icons/fa6";

interface featured {
    featuredArr: Array<{ img: string, name: string, desc : string }>;
    name: string;
}

const FeaturedCharts = ({featuredArr, name} : featured) => {
  return (
    <div className="featured-chart mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-2xl font-bold text-white">{name}</h1>
            </div>
          </div>
          <div className="w-full h-fit grid grid-cols-6 gap-6 place-items-center">
            {featuredArr.map((e) => (
              <div className="relative flex w-fit h-full flex-col hover:bg-gradient-to-b hover:from-[#1a1a1a] hover:via-[#2c2c2c] hover:to-[#1d1d1d] hover:rounded-lg px-3 py-1 justify-center group">
                <div className="relative overflow-hidden rounded-xl w-[100%] h-[70%] drop-shadow-xl flex items-center justify-center">
                  <img
                    src={e.img}
                    className="h-full w-full"
                    alt={`${e.name} image`}
                  />
                  <div className="absolute bottom-[3%] right-[3%] h-[3.2rem] w-[3.2rem] bg-[#1ed760] rounded-full z-10 flex justify-center items-center opacity-0 transition-opacity ease-in duration-200 group-hover:opacity-100 hover:scale-105 drop-shadow-xl">
                    <FaPlay className="text-xl" />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-lg font-bold text-white">{e.name}</div>
                  <div className="text-sm font-bold text-[#7f7f7f]">
                    {e.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default FeaturedCharts
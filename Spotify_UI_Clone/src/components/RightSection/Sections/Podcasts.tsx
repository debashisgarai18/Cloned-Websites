import React from "react";

interface podcasts {
  podcastArr: Array<{ img: string; name: string; desc: string }>;
  name: string;
}

const Podcasts = ({ podcastArr, name }: podcasts) => {
  return (
    <div className="featured-chart mt-3 w-full h-fit mb-3">
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
      <div className="w-full h-fit grid grid-cols-6 gap-6 place-items-center">
        {podcastArr.map((e) => (
          <div className="relative flex w-fit h-full flex-col hover:bg-gradient-to-b hover:from-[#1a1a1a] hover:via-[#2c2c2c] hover:to-[#1d1d1d] hover:rounded-lg px-3 py-1 justify-center group">
            <div className="relative overflow-hidden rounded-xl w-[100%] h-[70%] drop-shadow-xl flex items-center justify-center">
              <img
                src={e.img}
                className="h-full w-full"
                alt={`${e.name} image`}
              />
            </div>
            <div className="mt-5">
              <div className="text-lg font-bold text-white">{e.name}</div>
              <div className="text-sm font-bold text-[#7f7f7f]">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;

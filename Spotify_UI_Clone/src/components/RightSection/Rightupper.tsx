import React from "react";
import { BsFilterSquare } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

// the interfaces declared
interface artist {
  img: string;
  name: string;
}
interface album {
  img: string;
  name: string;
  artist_name: string;
}
interface radio {
  img: string;
  name: string;
  addons: string;
}
interface featured {
  img: string;
  name: string;
  desc: string;
}
interface playlists {
  img: string;
  name: string;
  desc: string;
}
interface podcasts {
  img: string;
  name: string;
  title: string;
}
interface trending{
  img: string;
  name : string,
  time : string
}

// the arrays declared
const artistArr: Array<artist> = [
  {
    img: "https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca",
    name: "Pritam",
  },
  {
    img: "https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3",
    name: "Arijit Singh",
  },
  {
    img: "https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c",
    name: "A.R. Rehman",
  },
  {
    img: "https://i.scdn.co/image/ab67616100005174fc7c542c04b5f7dc8f1b1c16",
    name: "Anirudh Ravichander",
  },
  {
    img: "https://i.scdn.co/image/ab67616100005174fb13d10be20fdcb5a670f551",
    name: "Vishal Mishra",
  },
  {
    img: "https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf",
    name: "Vishal-Shekhar",
  },
];
const albumArr: Array<album> = [
  {
    img: "https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9",
    name: "ANIMAL",
    artist_name: "Manan Bhardwaj, Vishal Mishra, Jaani",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e029bb2d30b01ac2cada8a8ad03",
    name: "Ek Tha Raja",
    artist_name: "Badshah",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0",
    name: "Still Rollin",
    artist_name: "Shubh",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3",
    name: "Ashiqui 2",
    artist_name: "Mithoon, anit Tiwari, Jeet Ganguli",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae",
    name: "Moosetape",
    artist_name: "Sidhu Moose Wala",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e021d93bb16bf3025587d001f45",
    name: "Aavesham",
    artist_name: "Sushin Shyam, Vinayak Sasikkumar",
  },
];
const radioArr: Array<radio> = [
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/4YRxDV8wJFPHPTeXepOstw/en-GB",
    name: "Arijit Singh Radio",
    addons: "With Neha Kakkar, Pritam, KK and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/2FKWNmZWDBZR4dE5KX4plR/en-GB",
    name: "Diljit Dosanjh Radio",
    addons: "With Gary Sandhu, Ranjit Bawa, Amrinder Gill and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/3m49WVMU4zCkaVEKb8kFW7/en",
    name: "Ilaiyaraaja Radio",
    addons: "With S. Janaki, S. P. Balasubrahmanyam and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/4K6blSRoklNdpw4mzLxwfn/en",
    name: "Kumar Sanu Radio",
    addons: "With Udit Narayan, Alka Yagnik, Anuradha Paduwal and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/70B80Lwx2sxti0M1Ng9e8K/en",
    name: "Udit Narayan Radio",
    addons: "With Kumar Sanu, Alka Yagnik, Anuradha Paduwal and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/2ae6PxICSOZHvjqiCcgon8/en",
    name: "S. P. Balasubrahmanyam Radio",
    addons: "With Mano, Ilaiyaraaja, S. Janaki and more",
  },
];
const featuredArr: Array<featured> = [
  {
    img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
    name: "Top Songs - Global",
    desc: "Your weekly update of the most played tracks right now - Global",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg",
    name: "Top Songs - USA",
    desc: "Your weekly update of the most played tracks right now - USA",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
    name: "Top 50 - Global",
    desc: "Your weekly update of the most played tracks right now - Global",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg",
    name: "Top 50 - USA",
    desc: "Your weekly update of the most played tracks right now - USA",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg",
    name: "Viral 50 - Global",
    desc: "Your weekly update of the most viral tracks right now - Global",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_us_default.jpg",
    name: "Viral 50 - USA",
    desc: "Your weekly update of the most viral tracks right now - USA",
  },
];
const playlistArr: Array<playlists> = [
  {
    img: "https://i.scdn.co/image/ab67706f000000024a9420e07762f56dbb62d778",
    name: "New Music Friday",
    desc: "The very best in new music from around the world. Cover: Eminem",
  },
  {
    img: "https://i.scdn.co/image/ab67706f00000002104f039c1cc982d3617f4e4b",
    name: "Feel Good Friday",
    desc: "Uplifting anthems to power you through till the weekend.",
  },
  {
    img: "https://i.scdn.co/image/ab67706f000000027bc86b77305df0039e922afd",
    name: "New Joints",
    desc: "All the New Joints featuring Roddy Ricch, Polo G, Eminem and more!",
  },
  {
    img: "https://i.scdn.co/image/ab67706f00000002518096c62a9e453db38093db",
    name: "Happy Beats",
    desc: "Feel-good dance music!",
  },
  {
    img: "https://i.scdn.co/image/ab67706f0000000283157e37fa78601698963145",
    name: "New Music Friday Dance",
    desc: "This weeks handpicked new dance and electronic music, featuring new music from Sara Landry",
  },
  {
    img: "https://i.scdn.co/image/ab67706f000000026f78f08632a4cdecf68d22e1",
    name: "A perfect Day",
    desc: "Timeless melodies from your favourite artists, both old and new.",
  },
];
const podcastArr: Array<podcasts> = [
  {
    img: "https://i.scdn.co/image/ab67656300005f1f9114d741247e2d26a7b48b6f",
    name: "Shri Krishna Leela",
    title: "Spotify Studios",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1f58e730e8341e29ca0f0671fe",
    name: "Pretkotha",
    title: "Gourab Tapadar",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1f20741e027668636723359069",
    name: "The Jog Rogan Experience",
    title: "Joe Rogan",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1f3c0cd1efd66f78f05f13632a",
    name: "True Story Bro! with Triggered Insaan",
    title: "Spotify",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1fa640450d0f9e4367ccf0fa8a",
    name: "Gopi Sudhakar Ennenna Solranga Parunga",
    title: "Spotify Studios",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1f3d98770ebf9b336adc2a69e5",
    name: "Garikapati Gyananidhi (Telugu)",
    title: "TeluguOne",
  },
];
const trendingArr : Array<trending> = [
  {
    img : 'https://i.scdn.co/image/ab67656300005f1fe46079c9a5b7c544c6922ac9',
    name : 'Welcome Back - RJ Balaji',
    time : 'June 2021 - 15 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1f099a357ed0a2a39424f2903d',
    name : '#73: Hotel of Horrors',
    time : 'June 2021 - 93 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1f21f7ead44047173302bc912e',
    name : 'Anubis: God of Death - 1',
    time : 'June 2021 - 16 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1ff875734f742a55ac2dd62637',
    name : 'Anubis: God of Death - 2',
    time : 'June 2021 - 13 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1f36dbb0b2d65004488fcc322f',
    name : 'Mahabharata Episode1 : Beginnings',
    time : 'August 2014 - 24 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1f65fc4856285f7fcb49c08d43',
    name : 'Relaxing Rain Sounds',
    time : 'Aug 2019 - 122 min'
  },  
]

// now the footer part
const base : {[key : string] : Array<string>} = {
  "Company" : ["About" , "Jobs", "For the Record"],
  "Communities" : ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
  "Useful Links" : ['Support', "Free Mobile App"],
  "Spotify Plans" : ['Premium Individual', "Premium Duo", "Premium Family", "Premium Student", "Spotify Free"]
}

const Rightupper = () => {
  return (
    <>
      <div className="w-full h-[86%] border-[0.5px] border-[#404040] bg-gradient-to-b from-[#1d1d1d] via-[#0a0a0a] to-[#121212] rounded-lg overflow-y-auto hide-scrollbar mb-2 px-5 py-3">
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
        {/* artists section */}
        <div className="artists mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-2xl font-bold text-white hover:underline">
                Popular Artists
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
        {/* popular albums part */}
        <div className="albums mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-2xl font-bold text-white hover:underline">
                Popular Albums
              </h1>
            </div>
            <div className="right-icons flex flex-row flex-wrap gap-5 w-fit pr-4 text-2xl">
              <a href="" className="text-[#646465] text-sm hover:underline">
                Show all
              </a>
            </div>
          </div>
          <div className="w-full h-fit grid grid-cols-6 gap-6 place-items-center">
            {albumArr.map((e) => (
              <div className="relative flex w-fit h-full flex-col hover:bg-gradient-to-b hover:from-[#1a1a1a] hover:via-[#2c2c2c] hover:to-[#1d1d1d] hover:rounded-lg px-3 py-1 justify-center group">
                <div className="relative overflow-hidden rounded-xl w-[100%] h-[70%] drop-shadow-xl flex items-center justify-center">
                  <img
                    src={e.img}
                    className="object-cover h-full w-full"
                    alt={`${e.name} image`}
                  />
                  <div className="absolute bottom-[3%] right-[3%] h-[3.2rem] w-[3.2rem] bg-[#1ed760] rounded-full z-10 flex justify-center items-center opacity-0 transition-opacity ease-in duration-200 group-hover:opacity-100 hover:scale-105 drop-shadow-xl">
                    <FaPlay className="text-xl" />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-lg font-bold text-white">{e.name}</div>
                  <div className="text-sm font-bold text-[#7f7f7f]">
                    {e.artist_name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* popular radio part */}
        <div className="radios mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-2xl font-bold text-white hover:underline">
                Popular radio
              </h1>
            </div>
            <div className="right-icons flex flex-row flex-wrap gap-5 w-fit pr-4 text-2xl">
              <a href="" className="text-[#646465] text-sm hover:underline">
                Show all
              </a>
            </div>
          </div>
          <div className="w-full h-fit grid grid-cols-6 gap-6 place-items-center">
            {radioArr.map((e) => (
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
                    {e.addons}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* featured charts part */}
        <div className="featured-chart mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-2xl font-bold text-white">Featured Charts</h1>
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
        {/* main playlists */}
        <div className="featured-chart mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-2xl font-bold text-white hover:underline">
                Main Playlists
              </h1>
            </div>
            <div className="right-icons flex flex-row flex-wrap gap-5 w-fit pr-4 text-2xl">
              <a href="" className="text-[#646465] text-sm hover:underline">
                Show all
              </a>
            </div>
          </div>
          <div className="w-full h-fit grid grid-cols-6 gap-6 place-items-center">
            {playlistArr.map((e) => (
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
        {/* main podcasts */}
        <div className="featured-chart mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-2xl font-bold text-white hover:underline">
                Main Podcasts
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
                  <div className="text-sm font-bold text-[#7f7f7f]">
                    {e.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* trending episodes */}
        <div className="trending-episode mt-3 w-full h-fit mb-3">
          <div className="top-text w-full h-fit flex flex-row justify-between py-3">
            <div className="this-text w-fit">
              <h1 className="text-2xl font-bold text-white hover:underline">
                Trending Episodes
              </h1>
            </div>
            <div className="right-icons flex flex-row flex-wrap gap-5 w-fit pr-4 text-2xl">
              <a href="" className="text-[#646465] text-sm hover:underline">
                Show all
              </a>
            </div>
          </div>
          <div className="w-full h-fit grid grid-cols-6 gap-6 place-items-center">
            {trendingArr.map((e) => (
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
                    {e.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right-section footer part */}
        <div className="right-footer w-full mt-14 h-fit mb-5">
            <div className="w-full h-fit flex flex-col flex-wrap mb-5">
              <div className="gmenu h-fit w-[60%] grid grid-cols-4">
                {/* TODO : need to upadate this part */}
              </div>
              <div className="ficons h-fit w-[60%]"></div>
            </div>
        </div>
        {/* make all the parts containerized */}
      </div>
    </>
  );
};

export default Rightupper;

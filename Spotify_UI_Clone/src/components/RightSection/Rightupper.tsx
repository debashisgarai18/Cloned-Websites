import React from "react";
import { BsFilterSquare } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
import PopularArtists from "./Sections/PopularArtists";
import PopularAlbums from "./Sections/PopularAlbums";
import PopularRadio from "./Sections/PopularRadio";
import FeaturedCharts from "./Sections/FeaturedCharts";
import SpotifyPlaylists from "./Sections/SpotifyPlaylists";
import Podcasts from "./Sections/Podcasts";
import Episodes from "./Sections/Episodes";

// the interfaces declared
interface artist {
  img: string;
  name: string;
}
interface common {
  img: string;
  name: string;
  desc: string;
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
const albumArr: Array<common> = [
  {
    img: "https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9",
    name: "ANIMAL",
    desc: "Manan Bhardwaj, Vishal Mishra, Jaani",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e029bb2d30b01ac2cada8a8ad03",
    name: "Ek Tha Raja",
    desc: "Badshah",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0",
    name: "Still Rollin",
    desc: "Shubh",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3",
    name: "Ashiqui 2",
    desc: "Mithoon, anit Tiwari, Jeet Ganguli",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae",
    name: "Moosetape",
    desc: "Sidhu Moose Wala",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e021d93bb16bf3025587d001f45",
    name: "Aavesham",
    desc: "Sushin Shyam, Vinayak Sasikkumar",
  },
];
const radioArr: Array<common> = [
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/4YRxDV8wJFPHPTeXepOstw/en-GB",
    name: "Arijit Singh Radio",
    desc: "With Neha Kakkar, Pritam, KK and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/2FKWNmZWDBZR4dE5KX4plR/en-GB",
    name: "Diljit Dosanjh Radio",
    desc: "With Gary Sandhu, Ranjit Bawa, Amrinder Gill and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/3m49WVMU4zCkaVEKb8kFW7/en",
    name: "Ilaiyaraaja Radio",
    desc: "With S. Janaki, S. P. Balasubrahmanyam and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/4K6blSRoklNdpw4mzLxwfn/en",
    name: "Kumar Sanu Radio",
    desc: "With Udit Narayan, Alka Yagnik, Anuradha Paduwal and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/70B80Lwx2sxti0M1Ng9e8K/en",
    name: "Udit Narayan Radio",
    desc: "With Kumar Sanu, Alka Yagnik, Anuradha Paduwal and more",
  },
  {
    img: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/2ae6PxICSOZHvjqiCcgon8/en",
    name: "S. P. Balasubrahmanyam Radio",
    desc: "With Mano, Ilaiyaraaja, S. Janaki and more",
  },
];
const featuredArr: Array<common> = [
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
const playlistArr: Array<common> = [
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
const podcastArr: Array<common> = [
  {
    img: "https://i.scdn.co/image/ab67656300005f1f9114d741247e2d26a7b48b6f",
    name: "Shri Krishna Leela",
    desc: "Spotify Studios",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1f58e730e8341e29ca0f0671fe",
    name: "Pretkotha",
    desc: "Gourab Tapadar",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1f20741e027668636723359069",
    name: "The Jog Rogan Experience",
    desc: "Joe Rogan",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1f3c0cd1efd66f78f05f13632a",
    name: "True Story Bro! with Triggered Insaan",
    desc: "Spotify",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1fa640450d0f9e4367ccf0fa8a",
    name: "Gopi Sudhakar Ennenna Solranga Parunga",
    desc: "Spotify Studios",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1f3d98770ebf9b336adc2a69e5",
    name: "Garikapati Gyananidhi (Telugu)",
    desc: "TeluguOne",
  },
];
const trendingArr : Array<common> = [
  {
    img : 'https://i.scdn.co/image/ab67656300005f1fe46079c9a5b7c544c6922ac9',
    name : 'Welcome Back - RJ Balaji',
    desc : 'June 2021 - 15 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1f099a357ed0a2a39424f2903d',
    name : '#73: Hotel of Horrors',
    desc : 'June 2021 - 93 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1f21f7ead44047173302bc912e',
    name : 'Anubis: God of Death - 1',
    desc : 'June 2021 - 16 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1ff875734f742a55ac2dd62637',
    name : 'Anubis: God of Death - 2',
    desc : 'June 2021 - 13 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1f36dbb0b2d65004488fcc322f',
    name : 'Mahabharata Episode1 : Beginnings',
    desc : 'August 2014 - 24 min'
  },
  {
    img : 'https://i.scdn.co/image/ab67656300005f1f65fc4856285f7fcb49c08d43',
    name : 'Relaxing Rain Sounds',
    desc : 'Aug 2019 - 122 min'
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
        <PopularArtists artistArr={artistArr} name="Popular Artists" />
        <PopularAlbums albumArr={albumArr} name="Popular Albums" />
        <PopularRadio radioArr={radioArr} name="Popular Radio"/>
        <FeaturedCharts featuredArr={featuredArr} name="Featured Charts"/>
        <SpotifyPlaylists playlistArr={playlistArr} name="Main Playlists" />
        <Podcasts podcastArr={podcastArr} name="Main Podcasts"/>
        <Episodes trendingArr={trendingArr} name="Trending Episodes"/>

        
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

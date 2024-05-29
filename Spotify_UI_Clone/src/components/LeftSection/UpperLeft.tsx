import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import SpotifyLogo from "../../assets/spotify-logo.svg";
const UpperLeft = () => {
  return (
    <>
    <div className='w-full h-[20%] bg-[#1c1d1c] rounded-lg py-4 px-5 flex flex-col flex-wrap justify-between'>
        <div>
        <img src={SpotifyLogo} alt="logo" className='invert pointer-cursor'/>
        </div>
        <div className='invert flex items-center gap-3 pointer-cursor'>
            <GoHomeFill className='text-3xl' />
            <h1 className='text-lg font-bold'>Home</h1>
        </div>
        <div className='invert flex items-center gap-3 pointer-cursor'>
            <IoSearchOutline className='text-3xl'/>
            <h1 className='text-lg font-bold'>Search</h1>
        </div>
    </div>
    </>
  )
}

export default UpperLeft
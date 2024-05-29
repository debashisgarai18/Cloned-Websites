import React from 'react'
import { LuLibrary } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";

const LowerLeft = () => {
  return (
    <>
    <div className='h-[80%] bg-[#1c1d1c] w-full relative flex flex-col justify-between rounded-lg p-2'>
        <div className='first-part w-full h-[55%] flex flex-col gap-3'>
            <div className='lib w-full h-[20%] py-2 px-5 invert flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <LuLibrary  className='text-3xl'/>
                    <h1 className='text-lg font-bold'>Your Library</h1>
                </div>
                <IoMdAdd  className='text-3xl'/>
            </div>
            <div className='playlists w-full h-[40%] bg-[#2e2e2e] rounded-lg py-4 px-3 flex flex-col justify-center items-start gap-5'>
                <div className='w-full'>
                    <h1 className='text-regular font-bold text-white'>Create your first playlist</h1>
                    <h2 className='text-white font-semibold text-sm'>It's easy, we'll help you</h2>
                </div>
                <button className='w-[40%] bg-white py-1 rounded-2xl'>Create playlist</button>
            </div>
            <div className='podcasts w-full h-[40%] bg-[#2e2e2e] rounded-lg'></div>
        </div>
        <div className='sec-part w-full h-[25%] bg-green-500'>

        </div>
    </div>
    </>
  )
}

export default LowerLeft
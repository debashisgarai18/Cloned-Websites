import React from 'react'

const Mainhero = () => {
  return (
    <div className='w-full h-fit pt-[7rem]'>
        <div className="w-[70%] h-fit m-auto flex flex-col flex-wrap justify-center items-center gap-[6rem]">
            <img src="https://zerodha.com/static/images/landing.png" className='w-[65%]'/>
            <div className='flex flex-col w-full h-fit justify-center items-center gap-5 text-[#424242]'>
                <h1 className='text-5xl'>Invest in everything</h1>   
                <h1 className='text-xl'>Online platform to invest in stocks, derivatives, mutual funds, and more</h1>
            </div>
        </div>
        <div className='btn w-full h-fit flex justify-center items-center mt-[3rem] mb-[3rem]'>
        <button className='bg-[#387fd1] px-6 py-2 text-[19px] hover:bg-[#313131] text-white font-[500] rounded'>Sign up now</button>
        </div>
    </div>
  )
}

export default Mainhero
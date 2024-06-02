import { TiArrowRight } from "react-icons/ti";
import React from 'react'
interface twc{
  topic:string,
  desc:string
}
const twcArr : Array<twc> = [
  {
    topic : "Customer-first always",
    desc : "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments."
  },
  {
    topic : "No spam or gimmicks",
    desc : `No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.`
  },
  {
    topic : "The Zerodha universe",
    desc : "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
  },
  {
    topic : "Customer-first always",
    desc : "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
  },  
]

const Mainhero = () => {
  return (
    <div className='w-full h-fit pt-[10rem]'>
        <div className="entry-img w-[70%] h-fit m-auto flex flex-col flex-wrap justify-center items-center gap-[5rem]">
            <img src="https://zerodha.com/static/images/landing.png" className='w-[73%]'/>
            <div className='flex flex-col w-full h-fit justify-center items-center gap-5 text-[#424242]'>
                <h1 className='text-5xl'>Invest in everything</h1>   
                <h1 className='text-xl'>Online platform to invest in stocks, derivatives, mutual funds, and more</h1>
            </div>
        </div>
        <div className='invest-part btn w-full h-fit flex justify-center items-center mt-[3rem] mb-[3rem]'>
        <button className='bg-[#387fd1] px-8 py-2 text-[19px] hover:bg-[#313131] text-white font-[500] rounded'>Sign up now</button>
        </div>
        <div className='full-lower mt-[7rem] w-[70%] h-fit m-auto'>
          {/* stock broker part */}
          <div className='stk-brker w-full h-fit flex flex-row justify-center gap-[4.5rem] mb-[3rem]'>
          <div className='stk-img w-[40%] pt-10'>
            <img src="https://zerodha.com/static/images/largest-broker.svg"  className="w-[85%] flex justify-center items-center" />
            </div>
            <div className='stk-text w-[40%] pt-10 flex flex-col gap-5'>
              <div className='w-full h-fit text-4xl'>Largest stock broker in India</div>
              <div className='w-full h-fit mt-3'>1.3+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</div>
              <div className='w-full h-fit mt-3 pl-5'>
                <ul className='grid grid-cols-2 list-disc gap-4 place-items-start'>
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>
              </div>
              <div className='w-full h-fit mt-3'>
                <img src="https://zerodha.com/static/images/press-logos.png" alt="" />
              </div>
            </div>
          </div>
          {/* trust with confidence part */}
          <div className='w-full h-fit mt-[7rem] flex flex-wrap gap-2 mb-2'>
            <div className='trust-text w-[45%] h-fit flex flex-col px-[6.5rem] gap-[3rem]'>
              <h1 className='text-3xl'>Trust With Confidence</h1>
              {
                twcArr.map((e) => (
                  <div className='flex flex-col flex-wrap gap-2'>
                    <h2 className='text-2xl'>{e.topic}</h2>
                    <h3 className='text-lg leading-relaxed text-[#808080]'>{e.desc}</h3>
                  </div>
                ))
              }
            </div>
            <div className='trust-image w-[53%] h-fit'>
              <img src="https://zerodha.com/static/images/ecosystem.png" className=''/>
              <div className="flex justify-center gap-3">
                <button className="flex justify-center gap-1 items-center text-[#387fd1] hover:text-[#313131]">Explore our products <TiArrowRight className="text-2xl"/></button>
                <button className="flex justify-center gap-1 items-center text-[#387fd1] hover:text-[#313131]">Try Kite demo <TiArrowRight className="text-2xl"/></button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Mainhero
import { TiArrowRight } from "react-icons/ti";
import React from "react";
interface twc {
  topic: string;
  desc: string;
}
const twcArr: Array<twc> = [
  {
    topic: "Customer-first always",
    desc: "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.",
  },
  {
    topic: "No spam or gimmicks",
    desc: `No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.`,
  },
  {
    topic: "The Zerodha universe",
    desc: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
  },
  {
    topic: "Customer-first always",
    desc: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
  },
];

const Mainhero = () => {
  return (
    <div className="w-full h-fit pt-[10rem] shadow-lg pb-[6rem]">
      <div className="entry-img w-[70%] h-fit m-auto flex flex-col flex-wrap justify-center items-center gap-[5rem]">
        <img
          src="https://zerodha.com/static/images/landing.png"
          className="w-[73%]"
        />
        <div className="flex flex-col w-full h-fit justify-center items-center gap-5 text-[#424242]">
          <h1 className="text-5xl">Invest in everything</h1>
          <h1 className="text-xl">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </h1>
        </div>
      </div>
      <div className="invest-part btn w-full h-fit flex justify-center items-center mt-[3rem] mb-[3rem]">
        <button className="bg-[#387fd1] px-8 py-2 text-[19px] hover:bg-[#313131] text-white font-[500] rounded">
          Sign up now
        </button>
      </div>
      <div className="full-lower mt-[7rem] w-[70%] h-fit m-auto">
        {/* stock broker part */}
        <div className="stk-brker w-full h-fit flex flex-row justify-center gap-[4.5rem] mb-[3rem]">
          <div className="stk-img w-[40%] pt-10">
            <img
              src="https://zerodha.com/static/images/largest-broker.svg"
              className="w-[85%] flex justify-center items-center"
            />
          </div>
          <div className="stk-text w-[40%] pt-10 flex flex-col gap-5">
            <div className="w-full h-fit text-4xl">
              Largest stock broker in India
            </div>
            <div className="w-full h-fit mt-3">
              1.3+ Crore Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </div>
            <div className="w-full h-fit mt-3 pl-5">
              <ul className="grid grid-cols-2 list-disc gap-4 place-items-start">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <div className="w-full h-fit mt-3">
              <img
                src="https://zerodha.com/static/images/press-logos.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* trust with confidence part */}
        <div className="trust-confid w-full h-fit mt-[7rem] flex flex-wrap gap-2 mb-2">
          <div className="trust-text w-[45%] h-fit flex flex-col px-[6.5rem] gap-[3rem]">
            <h1 className="text-3xl">Trust With Confidence</h1>
            {twcArr.map((e) => (
              <div className="flex flex-col flex-wrap gap-2">
                <h2 className="text-2xl">{e.topic}</h2>
                <h3 className="text-lg leading-relaxed text-[#808080]">
                  {e.desc}
                </h3>
              </div>
            ))}
          </div>
          <div className="trust-image w-[53%] h-fit">
            <img
              src="https://zerodha.com/static/images/ecosystem.png"
              className=""
            />
            <div className="flex justify-center gap-3">
              <button className="flex justify-center gap-1 items-center text-[#387fd1] hover:text-[#313131] tracking-wide font-semibold">
                Explore our products <TiArrowRight className="text-2xl" />
              </button>
              <button className="flex justify-center gap-1 items-center text-[#387fd1] hover:text-[#313131] tracking-wide font-semibold">
                Try Kite demo <TiArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        {/* Unbeatable pricing */}
        <div className="w-full h-fit mt-[7rem] flex flex-row flex-wrap items-center justify-center gap-[4rem] mb-3 px-[7rem]">
          <div className="text-part w-[45%] h-fit flex flex-col flex-wrap justify-center gap-[2rem]">
            <div className="text-3xl">Unbeatable pricing</div>
            <div className="text-lg leading-relaxed text-[#808080]">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </div>
            <button className="flex gap-1 text-[#387fd1] hover:text-[#313131] tracking-wide font-semibold">
              See Pricing <TiArrowRight className="text-2xl" />
            </button>
          </div>
          <div className="icon-part w-[45%] flex flex-wrap justify-center items-center h-fit">
            <div className="flex flex-wrap flex-row w-[90%] justify-center items-center h-[10rem]">
              <div className="w-[50%] h-full border border-[#9c9b9b] flex flex-col items-center justify-center gap-[1.5rem] px-[1.5rem]">
                <div className="text-5xl">₹0</div>
                <div className="text-center leading-relaxed text-[#808080]">
                  Free equity delivery and direct mutual funds
                </div>
              </div>
              <div className="w-[50%] h-full border-t border-r border-b border-[#9c9b9b] flex flex-col items-center gap-[1.5rem] pt-[1.5rem]">
                <div className="text-5xl">₹20</div>
                <div className="text-center text-[#808080]">
                  Intraday and F&O
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* market educatioon part */}
        <div className="w-full h-fit mt-[7rem] flex flex-wrap items-center justify-center px-[1.5rem] gap-[4rem] mb-3">
          <div className="w-[45%] h-fit">
            <img
              src="https://zerodha.com/static/images/index-education.svg"
              alt=""
            />
          </div>
          <div className="w-[45%] h-fit flex flex-col flex-wrap gap-[1.5rem]">
            <div className="text-2xl">Free and open market education</div>
            <div className="w-full h-fit flex flex-col gap-[1.5rem]">
              <p className="text-lg leading-relaxed text-[#808080]">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <button className="flex gap-1 text-[#387fd1] hover:text-[#313131] tracking-wide font-semibold">
                Varsity <TiArrowRight className="text-2xl" />
              </button>
            </div>
            <div className="w-full h-fit flex flex-col gap-[1.5rem]">
              <p className="text-lg leading-relaxed text-[#808080]">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <button className="flex gap-1 text-[#387fd1] hover:text-[#313131] tracking-wide font-semibold">
                TradingQ&A
                <TiArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        {/* open zerodha account part */}
        <div className="w-full h-fit mt-[7rem] flex flex-col justify-center items-center gap-[2rem]">
          <div className="text-3xl">Open a Zerodha account</div>
          <div className="text-lg text-[#808080]">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </div>
          <div>
            <button className="bg-[#387fd1] px-8 py-2 text-[19px] hover:bg-[#313131] text-white font-[500] rounded">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainhero;

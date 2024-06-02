import React from "react";
import { FiMenu } from "react-icons/fi";

const nav: Array<string> = [
  "Signup",
  "About",
  "Products",
  "Pricing",
  "Support",
];
const Navbar = () => {
  return (
    <div className="w-full h-fit bg-transparent fixed top-0 py-5 px-[25rem] flex flex-wrap justify-between items-center shadow-md backdrop-blur-md">
      <div className="logo">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          className="w-[7.8rem] cursor-pointer"
        />
      </div>
      <div className="menu-content flex items-center gap-11">
        <div className="nav-to  pics h-fit w-fit flex gap-11 items-center">
          {nav.map((e) => (
            <div className="w-fit h-fit text-[#808080] cursor-pointer text-[14px] tracking-wider hover:text-[#387fd1]">
              {e}
            </div>
          ))}
        </div>
        <div className="nav-logo w-fit h-fit">
          <FiMenu className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

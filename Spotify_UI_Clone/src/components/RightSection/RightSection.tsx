import React from "react";
import Footer from "../Footer/Footer";
import Rightupper from "./Rightupper";

const RightSection = () => {
  return (
    <>
      <div className="w-[83%] h-full relative flex flex-col px-2 gap-3">
        <Rightupper />
        <Footer />
      </div>
    </>
  );
};

export default RightSection;

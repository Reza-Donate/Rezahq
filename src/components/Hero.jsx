import React from "react";
import { Store } from "../store/context/AppContext";
import rightMobilePattern from "../assets/right-mobile-pattern.png";
import rightDesktopPattern from "../assets/right-pattern.png";
import leftMobilePattern from "../assets/left-mobile-pattern.png";
import leftDesktopPattern from "../assets/left-pattern.png";

const Hero = () => {
  const { width } = Store();
  const rightPattern = width > 540 ? rightMobilePattern : rightDesktopPattern;
  const leftPattern = width > 540 ? leftMobilePattern : leftDesktopPattern;
  return (
    <div>
      <img
        className="h-[400px] md:w-[600px] md:h-[550px] lg:h-[700px]  mx-auto"
        src="../../public/hero.png"
        alt=""
      />
      <div className="absolute top-24 md:top-32  md:px-3 text-[#0D265C] ">
        <div className="absolute md:top-4 z-0 md:w-28 rounded-md w-16 h-1 top-[14px] left-[48px]   md:left-[136px] lg:left-[230px] xl:left-[310px] md:h-2  bg-[#E38900] "></div>
        <p className=" text-xl relative z-0 pl-14  md:text-3xl font-extrabold md:pl-36  lg:pl-60 xl:pl-80  ">
          Reza
        </p>
        <h1 className="text-3xl md:text-6xl lg:px-44 xl:px-36 text-center pb-2 xl:text-7xl xl:leading-[5rem]  md:py-2 font-extrabold">
          Africa’s Number 1 Fundraising Platform
        </h1>
        <p className="text-center px-6 font-medium text-sm md:text-2xl  md:px-24  lg:px-56 xl:px-72">
          At Reza, our work is to help you raise that funds that you need for
          things that matters to you.
        </p>
      </div>
      <div className="flex">
        <img className="absolute top-[20rem]" src={leftPattern} alt="pattern" />
        <img
          className="absolute top-[20rem] right-0"
          src={rightPattern}
          alt="pattern"
        />
      </div>
    </div>
  );
};

export default Hero;

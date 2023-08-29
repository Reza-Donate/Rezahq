import React from "react";
import hero from "../assets/hero.png";
import { NavHashLink as Link } from "react-router-hash-link";
const Hero = () => {
  return (
    <div className="bg-[#e3fffc] pb-8 lg:grid grid-cols-2 ">
      <div className="order-last">
        <img
          className="h-[400px] md:w-[600px] md:h-[550px] lg:h-[500px]  mx-auto"
          src={hero}
          alt="hero image"
        />
      </div>
      <div className="pt-5 md:pt-12 md:px-3 text-[#0D265C] px-5 lg:pl-[80px] lg:mt-20 ">
        <div className="mx-auto -mb-[18px] lg:mx-0 md:-mb-6 z-0 md:w-24  rounded-md w-16 h-1 top-[18px] left-[136px]  md:left-[340px] lg:left-[230px] xl:left-[310px] md:h-2  bg-[#E38900] "></div>
        <p className=" text-xl relative z-0 text-center lg:text-left md:text-3xl font-extrabold lg:pl-3  ">
          Reza
        </p>
        <h1 className="text-2xl md:text-6xl md:leading-[5rem] text-center lg:text-4xl lg:leading-[3rem] pb-2 xl:text-5xl xl:leading-[4rem] lg:text-left   md:py-2 font-extrabold">
          Africa’s Number 1 Crowdfunding Platform
        </h1>
        <p className="text-center px-3 font-medium  lg:text-left text-lg md:text-3xl md:leading-[3rem]  lg:px-0 lg:text-2xl lg:leading-8 md:px-20  ">
          At Reza, our work is to help you raise that funds that you need for
          things that matters to you.
        </p>
        <div className="flex justify-center lg:justify-start mt-5">
          <Link to={"#waitlist"} smooth>
            <button className="w-[320px] md:w-80 md:p-6 md:text-lg h-max p-4 lg:p-4 rounded bg-[#0D265C] text-white text-sm lg:hover:bg-[#E38900] ">
              Join Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

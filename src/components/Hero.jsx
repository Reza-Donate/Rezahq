import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img
        className="h-[400px] md:w-[600px] md:h-[600px] lg:h-[700px]  mx-auto"
        src={hero}
        alt="hero image"
      />
      <div className="absolute top-24 md:top-36 ` md:px-3 text-[#0D265C] ">
        <p className="line-through text-xl pl-12 md:text-3xl font-extrabold md:pl-28  lg:pl-56 xl:pl-72 decoration-4  md:decoration-8  decoration-[#E38900]">
          Rezah
        </p>
        <h1 className="text-3xl md:text-6xl lg:px-44 xl:px-36 text-center pb-2 xl:text-7xl xl:leading-[5rem]   md:py-4 font-extrabold">
          Africa’s Number 1 Fundraising Platform
        </h1>
        <p className="text-center px-6 font-medium text-sm md:text-2xl md:px-24  lg:px-56 xl:px-72">
          At Reza, our work is to help you raise that funds that you need for
          things that matters to you.
        </p>
      </div>
    <div className="flex  ">
       <picture>
        <source
          srcSet="./public/left-mobile-pattern.png"
          media="(min-width:768px)"
        />
        <source srcSet="./public/left-pattern.png" />
        <img className="absolute top-[20rem] z-0 " src="./public/left-pattern.png" alt="pattern" />
      </picture>
      <picture>
        <source
          srcSet="./public/right-mobile-pattern.png"
          media="(min-width:768px)"
        />
        <source srcSet="./public/right-pattern.png" />
        <img className="absolute top-[20rem] z-0 right-0" src="./public/right-pattern.png" alt="pattern" />
      </picture>
    </div>
    </div>
  );
};

export default Hero;

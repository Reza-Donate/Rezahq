import React from "react";

const JoinList = ({ img, heading, paragraph }) => {
  return (
  <section >
    {/* mobile */}
      <div className="h-[150px] w-full py-2 items-center gap-4 flex border-2 lg:hidden border-[#D9D9D9]    px-5 rounded-lg  mb-6 text-[#7B7B7B]">
      <div>
        <h4 className="text-base mt-1 font-bold   text-[#545454]">
          {heading}
        </h4>
        <p className="text-sm mt-1 leading-5 ">{paragraph}</p>
      </div>
    
        <img width={120} src={img} alt="" />
    </div>
    {/* desktop */}
    <div className="h-[150px]  w-full py-2 items-center gap-4  hidden lg:flex justify-between border-2 border-[#D9D9D9]  md:mx-auto  px-5 rounded-lg  mb-6 text-[#7B7B7B]">
      <div>
        <input className="w-8" type="radio" name="" id="" />
        <label className="text-xl mt-1 font-bold  text-[#545454]">
          {heading}
        </label>
        <p className="text-sm leading-7">{paragraph}</p>
      </div>
      {/* <div> */}
        <img width={120} src={img} alt="" />
      {/* </div>{" "} */}
    </div>
  </section>
  );
};

export default JoinList;

import React from "react";

const ServiceList = ({ img, heading, paragraph, bg }) => {
  return (
    <div
      style={{ backgroundColor: `${bg}` }}
      className="pt-12 h-[380px] md:w-[50%] md:h-[420px] xl:h-[350px] md:mx-auto  px-5 rounded-lg  mb-6 text-[#7B7B7B]">
      <img width={50} src={img} alt="" />
      <h4 className="text-xl mt-5 font-bold mb-4 text-[#545454]">{heading}</h4>
      <p className="text-base leading-7">{paragraph}</p>
    </div>
  );
};

export default ServiceList;

import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Select = ({ name }) => {
  return (
    <div className="flex justify-between  mt-5 items-center h-12 lg:h-16 rounded-md text-xs  w-[100%] md:w-[50%]  text-[#A8A8A8]  bg-white px-2 ">
      {name}
      <MdOutlineKeyboardArrowDown color="black"  fontSize="1.8em" />
    </div>
  );
};

export default Select;

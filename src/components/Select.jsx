import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Store } from "../store/context/AppContext";

const Select = ({ name }) => {
  const { handleClick } = Store();
  return (
    <div className="flex justify-between  mt-5 items-center h-12 lg:h-16 rounded-md text-xs  w-[100%] md:w-[50%]  text-[#A8A8A8]  bg-white px-2 ">
      {name}
      <div onClick={handleClick}>
        <MdOutlineKeyboardArrowDown color="black" fontSize="1.5em" />
      </div>
    </div>
  );
};

export default Select;

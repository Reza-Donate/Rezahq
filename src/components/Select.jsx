import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { selectHandleClick } from "../store/slices/app-slice";
// import { Store } from "../store/context/AppContext";

const Select = ({ name }) => {
  // const { handleClick } = Store();
  const dispatch = useDispatch();
  // const selectHandleClick = () => {

  // }

  return (
    <div
      onClick={() => dispatch(selectHandleClick(name))}
      className={`flex justify-between border-2 col-span-2 border-[#0d265c8d]  mt-5 items-center h-14 lg:h-16 rounded-md text-sm  w-[100%] text-[#A8A8A8]  bg-white px-2 `}>
      <p>{name}</p>
      <div>
        <MdOutlineKeyboardArrowDown color="black" fontSize="1.5em" />
      </div>
    </div>
  );
};

export default Select;

import React from "react";

const Input = ({ name }) => {
  return (
    <input
      type="text"
      placeholder={name}
      className={`h-14 rounded-md text-xs w-[100%] border-2 border-[#0d265c6d] lg:h-16  mt-5 p-2`}
    />
  );
};

export default Input;

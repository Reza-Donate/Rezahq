import React from "react";

const Input = ({ name }) => {
  return (
    <input
      type="text"
      placeholder={name}
      className="h-12 rounded-md text-xs w-[100%] lg:h-16  mt-5 p-2"
    />
  );
};

export default Input;

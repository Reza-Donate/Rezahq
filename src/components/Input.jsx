import React from "react";

const Input = ({ name }) => {
  return (
    <input
      type="text"
      placeholder={name}
      className="h-12 rounded-sm text-xs w-[100%]  mt-5 p-2"
    />
  );
};

export default Input;

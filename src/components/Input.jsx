import React from "react";


const Input = ({ placeholder, name, formik }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
      className={`h-14 rounded-md text-xs w-[100%] border-2 border-[#0d265c6d] lg:h-16  mt-5 p-2`}
    />
  );
};

export default Input;

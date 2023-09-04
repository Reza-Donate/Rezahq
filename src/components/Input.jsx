import React from "react";
// import { useDispatch } from "react-redux";
// import { appActions } from "../store/slices/app-slice";
// import { Store } from "../store/context/AppContext";

const Input = ({ name }) => {
  // const {handleChange} = Store()
  // const dispatch = useDispatch()

  return (
    <input
      type="text"
      placeholder={name}
      name={name}
      className={`h-14 rounded-md text-xs w-[100%] border-2 border-[#0d265c6d] lg:h-16  mt-5 p-2`}
    />
  );
};

export default Input;

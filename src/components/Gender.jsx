import React from "react";
import { Store } from "../store/context/AppContext";

const Gender = () => {
  const arr = ["Male", "Female", "Others"];
  const { gender } = Store();
  if (!gender) return null;
  return (
    <div className="w-[87%] top-[205rem] border-2 lg:w-[38%] border-[#0d265c8d]   xl:w-[39%] lg:right-[8rem] rounded-md max-h-44 shadow-md overflow-scroll bg-white p-5 absolute lg:top-[145rem] xl:top-[144rem] ">
      {arr.map((Gender, index) => {
        return (
          <p className="mb-3" key={index}>
            {Gender}
          </p>
        );
      })}
    </div>
  );
};

export default Gender;

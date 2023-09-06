import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelect } from "../store/slices/form-slice";

const Gender = () => {
  const arr = ["Male", "Female", "Others"];
  const { genderMenu } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const handleChange = (field) => (evt) => {
    dispatch(updateSelect({ field, value: evt.target.innerText }));
  };
  if (!genderMenu) return null;
  return (
    <div className="w-[87%] top-[225rem] border-2 lg:w-[36%] border-[#0d265c8d]   xl:w-[36%] lg:right-[8rem] rounded-md max-h-44 shadow-md overflow-scroll bg-white p-5 absolute lg:top-[178rem] xl:top-[174rem] xl:right-[10rem] ">
      {arr.map((Gender, index) => {
        return (
          <p onClick={handleChange("gender")} className="mb-3" key={index}>
            {Gender}
          </p>
        );
      })}
    </div>
  );
};

export default Gender;

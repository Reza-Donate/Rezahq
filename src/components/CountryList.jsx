import React from "react";
import { useDispatch } from "react-redux";
import { updateSelect } from "../store/slices/form-slice";

const CountryList = ({ flag, name }) => {
  const dispatch = useDispatch();
  const handleChange = (field) => (evt) => {
    dispatch(updateSelect({ field, value: evt.target.textContent }));
  };

  return (
    <div onClick={handleChange("country")} className="flex gap-5 mb-3">
      <img src={flag} alt="flag" />
      <p>{name}</p>
    </div>
  );
};

export default CountryList;

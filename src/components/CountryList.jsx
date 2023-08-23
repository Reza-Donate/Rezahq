import React from "react";

const CountryList = ({ flag, name }) => {
  return (
    <div className="flex gap-5 mb-3">
      <img src={flag} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default CountryList;

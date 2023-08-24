import React from "react";

const CountryList = ({ flag, name }) => {
  return (
    <div className="flex gap-5 mb-3">
      <img src={flag} alt="flag" />
      <p>{name}</p>
    </div>
  );
};

export default CountryList

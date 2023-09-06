import React from "react";
import CountryList from "./CountryList";
import RW from "../assets/RW.png";
import CM from "../assets/CM.png";
import GH from "../assets/GH.png";
import KY from "../assets/KE.png";
import NG from "../assets/NG.png";
import UG from "../assets/UG.png";
import SA from "../assets/ZA.png";
import ZM from "../assets/ZM.png";
import { useSelector } from "react-redux";

const Countries = () => {
   const {countryMenu} = useSelector((state) => state.app)
  if (!countryMenu) return null;
  return (
    <div className="w-[87%] top-[220rem] lg:w-[36%] border-2 border-[#0d265c8d]  rounded-md max-h-44 shadow-md overflow-scroll bg-white p-5 absolute lg:top-[176rem] xl:top-[174rem] ">
      <CountryList flag={RW} name={"Rwanda"} />
      <CountryList flag={CM} name={"Cameroon"} />
      <CountryList flag={GH} name={"Ghana"} />
      <CountryList flag={KY} name={"Kenya"} />
      <CountryList flag={NG} name={"Nigeria"} />
      <CountryList flag={UG} name={"Uganda"} />
      <CountryList flag={SA} name={"South Africa"} />
      <CountryList flag={ZM} name={"Zambia"} />
    </div>
  );
};

export default Countries;

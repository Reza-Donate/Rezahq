import React from "react";
import logo from "../assets/reza-logo.png";
import Socials from "../components/Socials";
import mail from "../assets/ic_round-email.png";
import phone from "../assets/Group.png";
import location from "../assets/mdi_location.png";

const Footer = () => {
  return (
    <div className="flex gap-80  bg-[#0D265C] text-white px-16 ">
      <div>
        <img src={logo} alt="reza logo" className="" />
        <p className="px-11">Lets help you raise.......</p>
        <Socials />
      </div>

      <div className="py-8 mb-8">
        <h2 className="font-bold text-4xl mb-8 ">About Us</h2>
        <p className="flex gap-3">
          <img src={mail} alt="" /> RezaNg@gmail.com
        </p>
        <p className="flex gap-3">
          <img src={phone} alt="" /> +2348103651314
        </p>
        <p className="flex gap-3">
          <img src={location} alt="" />
          Lagos, Nigeria
        </p>
      </div>
    </div>
  );
};

export default Footer;

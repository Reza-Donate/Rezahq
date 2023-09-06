import React from "react";
import logo from "../assets/reza-logo.png";
import Socials from "../components/Socials";
import mail from "../assets/ic_round-email.png";
import phone from "../assets/Group.png";
import location from "../assets/mdi_location.png";

const Footer = () => {
  return (
    <div className=" bg-[#0D265C] lg:py-5 text-white md:flex lg:gap-72 md:px-[70px] ">
      <div className="pl-5">
        <img
          className="-ml-9 lg:-ml-16 w-[11rem] lg:w-[20rem]"
          src={logo}
          alt="reza logo"
        />
        <p className="">Lets help you raise.......</p>
        <Socials />
      </div>
      <div className="py-8 pl-5 lg:pt-24 ">
        <h5 className="font-bold text-xl mb-5  ">About Us</h5>
        <p className="flex gap-3 ">
          <img src={mail} alt="mail" /> RezaNg@gmail.com
        </p>
        <p className="flex gap-3 my-3 ">
          <img src={phone} alt="phone" /> +2348103651314
        </p>
        <p className="flex gap-3 ">
          <img src={location} alt="location" />
          Lagos, Nigeria
        </p>
      </div>
    </div>
  );
};

export default Footer;

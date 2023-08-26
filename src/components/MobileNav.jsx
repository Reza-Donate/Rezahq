import React from "react";
import logo from "../assets/reza-logo.png";
import Hamburger from "./Hamburger";

const MobileNav = () => {
  return (
    <nav className="flex md:hidden  -ml-6 h-16 p-5 bg-[#0D265C] items-center justify-between ">
      <img width={100} className="" src={logo} alt="reza logo" />
      <Hamburger />
    </nav>
  );
};

export default MobileNav;

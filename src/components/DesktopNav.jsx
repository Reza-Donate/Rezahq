import React from "react";
import logo from "../assets/reza-logo.png";

const DesktopNav = () => {
  const links = ["About Us", "Meet the Team", "Contact Us"];

  return (
    <nav className="hidden md:flex px-12 lg:px-28 xl:px-32 text-lg text-[#D2D2D2]  bg-[#0D265C] items-center justify-between ">
      <div>
        <img width={160} className="" src={logo} alt="reza logo" />
      </div>
      <div className="flex gap-5">
        {links.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav;

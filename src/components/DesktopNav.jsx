import React from "react";
import logo from "../assets/reza-logo.png";

const DesktopNav = () => {
  const links = ["About Us", "Meet the Team", "Contact Us"];

  return (
    <nav className="hidden md:flex px-12 md:pl-2 lg:pl-12 lg:pr-20 text-lg text-[#D2D2D2]  bg-[#0D265C]  items-center justify-between ">
      <div>
        <img width={160} className="" src={logo} alt="reza logo" />
      </div>
      <div className="flex gap-9 ">
        {links.map((item, index) => (
          <p
            className="hover:text-xl cursor-pointer hover:text-[#E38900]"
            key={index}>
            {item}
          </p>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav;

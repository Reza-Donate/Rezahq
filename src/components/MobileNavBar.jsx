import React from "react";
import logo from "../assets/reza-logo.png";

const MobileNavBar = () => {
  const links = ["About Us", "Meet the Team", "Contact Us"];
  return (
    <nav className="">
      <div>
        <img width={100} className="" src={logo} alt="reza logo" />
      </div>
      <div className="">
        {links.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavBar;

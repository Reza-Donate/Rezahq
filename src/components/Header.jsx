import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
      <header>
        <MobileNav />
        <DesktopNav />
      </header>
  );
};

export default Header;

import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Header;

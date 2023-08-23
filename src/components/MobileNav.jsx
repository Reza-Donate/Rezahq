import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../assets/reza-logo.png";
import { useDispatch } from "react-redux";
import { appActions } from "../store/slices/app-slice";

const MobileNav = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex md:hidden  -ml-6 h-16 p-5 bg-[#0D265C] items-center justify-between ">
      <img width={100} className="" src={logo} alt="reza logo" />
      <div
        className="hamburger"
        onClick={() => dispatch(appActions.menuHandleClick())}>
        <RiMenu3Fill color="E38900" fontSize="1.8em" />
      </div>
    </nav>
  );
};

export default MobileNav;

import React from "react";
import logo from "../assets/reza-logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../store/slices/app-slice";
import Socials from "./Socials";

const MobileMenu = () => {
  const links = ["About Us", "Meet the Team", "Contact Us"];
  const { menuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <>
      {menuOpen && (
        <nav className="w-full h-max md:hidden  pt-2 absolute top-0 z-10 shadow-md py-8  bg-[#0D265C] ">
          <div className="flex items-center justify-between pr-7">
            <img width={100} className="" src={logo} alt="reza logo" />
            <div onClick={() => dispatch(appActions.menuHandleClick())}>
              <AiOutlineClose color="E38900" fontSize="1.5rem" />
            </div>
          </div>
          <div className="text-white border-b-2 mt-4 border-[#e388007b]  ">
            {links.map((item, index) => (
              <p
                className="pb-4 px-6 py-4  border-t-2 border-[#e388006b]"
                key={index}>
                {item}
              </p>
            ))}
          </div>
          <Socials color={"white"} />
        </nav>
      )}
    </>
  );
};

export default MobileMenu;

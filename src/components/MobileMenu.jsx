import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { appActions } from "../store/slices/app-slice";

const MobileMenu = () => {
  const links = ["About Us", "Meet the Team", "Contact Us"];
  const { menuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  if (!menuOpen) return null;
  return (
    <>
      <div
        onClick={() => dispatch(appActions.menuHandleClick())}
        className="fixed bottom-0 top-20 right-0 left-0 bg-[rgb(0,0,0,0.7)] z-10"
      />
      <motion.nav
        initial={{ height: 0 }}
        animate={{ height: 280 }}
        className="w-full md:hidden fixed  pt-2   top-12 z-10 shadow-md py-12  bg-[#0D265C] ">
        <div className="text-white border-b-2 mt-4 border-[#e388007b]  ">
          {links.map((item, index) => (
            <p
              className="pb-4 px-6 py-4   border-t-2 border-[#e388006b]"
              key={index}>
              {item}
            </p>
          ))}
        </div>
        <Socials location={"justify-center"} />
      </motion.nav>
    </>
  );
};

export default MobileMenu;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuHandleClick} from "../store/slices/app-slice";

const Hamburger = () => {
  const { menuOpen } = useSelector((state) => state.app);
  const genericHamburgerLine = `h-1 w-6 mt-1 rounded-full bg-[#E38900] transition ease transform duration-300`;
  const dispatch = useDispatch();
  return (
    <button
      className="flex flex-col h-12 w-12  rounded justify-center items-center group"
      onClick={() => dispatch(menuHandleClick())}>
      <div
        className={`${genericHamburgerLine} ${
          menuOpen
            ? "rotate-45 translate-y-1 group-hover:opacity-100"
            : " group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          menuOpen ? "opacity-0" : " group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          menuOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : " group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default Hamburger;

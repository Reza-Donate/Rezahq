import React from "react";
import { BsFillShareFill } from "react-icons/bs";
import Lottie from "lottie-react";
import animation from "../lotties/mail.json";
// import { useDispatch } from "react-redux";
// import { shareHandleClick } from "../store/slices/app-slice";

const Success = ({handleClick}) => {
  // const dispatch = useDispatch();
  return (
    <>
      <div className="fixed bottom-0 top-0 right-0 left-0 bg-[rgb(0,0,0,0.7)] z-10" />
      <div className="flex justify-center">
        <div className="w-[90%]  fixed  text-center top-40  h-max p-5  bottom-36 z-10   bg-white shadow-md ">
          <Lottie
            style={{ height: 250 }}
            animationData={animation}
            loop={true}
          />
          <h6 className="text-lg font-bold">Received Successfully !!!</h6>
          <p className="text-[#545454] py-4 text-base" >
            Thank you for joining our waitlist. Want to share information about
            Reza on your social medias ?
          </p>
          <button onClick={handleClick} className="h-12 p-2 flex justify-center items-center gap-4  border-2 text-[#0D265C] border-[#0D265C] lg:h-16  rounded-md text-xs w-[100%] md:w-[30%]    ">
            <BsFillShareFill color="#0D265C" /> Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Success;

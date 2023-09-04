import React from "react";
import { BsFillShareFill } from "react-icons/bs";
import Lottie from "lottie-react";

import animation from "../lotties/mail.json";

const Success = () => {
  return (
    <>
      <div className="fixed bottom-0 top-0 right-0 left-0 bg-[rgb(0,0,0,0.7)] z-10" />
      <div className="flex justify-center">
        <div className="w-[90%]  fixed   h-max p-5  bottom-36 z-10   bg-white shadow-md ">
          <Lottie   style={{ height: 200 }} animationData={animation} loop={true} height={200} />
          <h6>Received Successfully !!!</h6>
          <p>
            Thank you for joining our waitlist. Want to share information about
            Reza on your social medias ?
          </p>
          <button className="h-12 p-2 flex justify-center items-center gap-4 text-white bg-[#0D265C] lg:h-16  rounded-md text-xs w-[90%] md:w-[30%] hover:bg-[#E38900]   ">
            <BsFillShareFill /> Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Success;

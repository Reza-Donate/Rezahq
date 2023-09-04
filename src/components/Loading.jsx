import React from "react";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <>
      <div className="fixed bottom-0 top-0 right-0 left-0 bg-[rgb(0,0,0,0.7)] z-10" />
      <div className="flex justify-center">
        <div className="w-[35%] flex justify-center items-center fixed   h-36  bottom-36 z-10   bg-white shadow-md ">
          <Spinner />
        </div>
      </div>
    </>
  );
};

export default Loading;

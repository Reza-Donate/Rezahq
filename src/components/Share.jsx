import React from "react";
import { LinkedinShareButton, FacebookShareButton } from "react-share";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Share = () => {
  return (
    <>
      <div className="fixed bottom-0 top-0 right-0 left-0 bg-[rgb(0,0,0,0.7)] z-10" />
      <div className="w-[90%]  fixed  text-center top-40  h-max p-5  bottom-36 z-10   bg-white shadow-md ">
        <LinkedinShareButton
          url={`www.ihatereading.in/createrepo?framework=Create-React-App&repoId=`}
          title="Check out this iHateReading custom repository ">
          <AiFillLinkedin size={18} />
        </LinkedinShareButton>
        <FacebookShareButton
          url={`www.ihatereading.in/createrepo?framework=Create-React-App&repoId=`}
          title="Check out this iHateReading custom repository ">
          <BsFacebook />
        </FacebookShareButton>
      </div>
    </>
  );
};

export default Share;

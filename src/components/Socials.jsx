import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Socials = ({ location }) => {
  return (
    <div className={`flex gap-5 pt-7 ${location}`}>
      <FaLinkedin color="white" fontSize="1.6rem" />
      <FaTwitterSquare color="white" fontSize="1.6rem" />
      <FaFacebookSquare color="white" fontSize="1.6rem" />
    </div>
  );
};

export default Socials;

import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Socials = ({color}) => {
  return (
    <div className="flex gap-5 justify-center pt-6">
      <FaLinkedin color={color}  fontSize="1.8rem" />
      <FaTwitterSquare color={color}  fontSize="1.8rem" />
      <FaFacebookSquare color={color} fontSize="1.8rem" />
    </div>
  );
};

export default Socials;

import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-5 justify-center py-10">
      <FaLinkedin fontSize="1.8rem" />
      <FaTwitterSquare fontSize="1.8rem"  />
      <FaFacebookSquare fontSize="1.8rem" />
    </div>
  );
};

export default Socials;

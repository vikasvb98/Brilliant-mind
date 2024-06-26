import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Rightsidebar = () => {
  return (
    <>
      <div className="fixed flex justify-between items-center px-4 py-4 w-64 h-16 ml-16 bottom-0 rounded-tl-xl rounded-tr-xl bg-gray-800 shadow-2xl shadow-sky-300 md:flex-col md:top-1/3 md:w-16 md:h-64 md:right-0 md:rounded-bl-xl md:rounded-tr-none md:mx-auto lg:ml-0">
        <Link to="https://www.facebook.com/" target="_blank">
          <FaFacebookSquare className="cursor-pointer text-3xl text-white hover:text-sky-300 hover:text-4xl" />
        </Link>
        <Link to="https://www.linkedin.com/" target="_blank">
          <FaLinkedin className="cursor-pointer text-3xl text-white hover:text-sky-300 hover:text-4xl" />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <IoLogoInstagram className="cursor-pointer text-3xl text-white hover:text-sky-300 hover:text-4xl" />
        </Link>
        <Link to="https://twitter.com/i/flow/login" target="_blank">
          <FaXTwitter className="cursor-pointer text-3xl text-white hover:text-sky-300 hover:text-4xl" />
        </Link>
      </div>
    </>
  );
};

export default Rightsidebar;

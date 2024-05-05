import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo.gif";
import brandName from "../assets/logo.svg";
import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const Navlist = [ "Services", "About", "Contact"];

  return (
    <>
      <div className="w-full h-20 flex items-center justify-between px-5 bg-gray-300 sticky top-0 z-10 rounded-bl-xl rounded-br-xl shadow-lg  ">
        <Link to="/">
          <div className="flex items-center cursor-pointer gap-x-2  px-2 ">
            <img
              src={logo}
              alt="Modified GIF"
              className=" w-16 h-16"
            />
            <img
              src={brandName}
              alt="logo"
              className=" w-44 h-32 text-white bg-transparent"
            />
          </div>
        </Link>
        <div className="flex items-center md:hidden">
          {openNav ? (
            <RxCross1
              className="text-white text-4xl cursor-pointer"
              onClick={handleNav}
            />
          ) : (
            <IoMdMenu
              className="text-white text-4xl cursor-pointer"
              onClick={handleNav}
            />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:gap-x-8 ${
            openNav ? "flex" : "hidden"
          } absolute top-20 left-0 right-0 bg-transparent z-10 md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent md:gap-x-0 flex-col md:flex-row  `}
        >
          {Navlist.map((item, index) => (
            <Link to={`/${item}`} key={index}>
              <li key={index} className=" flex items-center mx-3 my-2 md:my-0 ">
                <span
                  className="btn"
                  onClick={handleNav}
                >
                  <button className="btn">{item}</button>
                  
                </span>
              </li>
            </Link>
          ))}
          <div className="flex items-center justify-around mx-1 my-2 gap-x-4">
          <Link to="/jobs">
            <button className="shadow__btn ">
              Explore        
            </button>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

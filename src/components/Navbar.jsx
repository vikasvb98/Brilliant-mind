import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo-no-background.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const Navlist = ["Home", "Services", "About", "Contact"];

  return (
    <>
      <div className="w-full h-20 flex items-center justify-between px-5 bg-gray-300 sticky top-0 z-10 rounded-bl-xl rounded-br-xl shadow-lg ">
        <Link to="/">
          <div className=" h-20 flex items-center cursor-pointer  px-2 ">
            <img src={logo} alt="logo" className="w-52 h-52 text-gray-900" />
          </div>
        </Link>
        <div className="flex items-center md:hidden">
          {openNav ? (
            <RxCross1
              className="text-gray-800 text-5xl cursor-pointer"
              onClick={handleNav}
            />
          ) : (
            <IoMdMenu
              className="text-gray-800 text-5xl cursor-pointer"
              onClick={handleNav}
            />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:gap-x-8 ${
            openNav ? "flex" : "hidden"
          } absolute top-20 left-0 right-0 bg-gray-800 z-10 md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent md:gap-x-0 flex-col md:flex-row `}
        >
          {Navlist.map((item, index) => (
            <Link to={`/${item}`} key={index}>
              <li key={index} className="flex items-center mx-3 my-2 md:my-0 ">
                <span
                  className="text-white text-xl md:text-gray-800 font-bold cursor-pointer hover:text-white hover:bg-gray-800 rounded-lg p-2"
                  onClick={handleNav}
                >
                  {item}
                </span>
              </li>
            </Link>
          ))}
          <div className="flex items-center justify-around mx-1 my-2 gap-x-4">
            <Link to="/jobs">
              <button className="text-white bg-yellow-800 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5">
                Find a Job
              </button>
            </Link>
            <Link to="/hire">
              <button className="text-white bg-yellow-800 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5">
                Hire talent
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

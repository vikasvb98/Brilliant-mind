import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const iconsTab = [
    { icon: <FaFacebookSquare />, link: "https://www.facebook.com/" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
    { icon: <IoLogoInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaXTwitter />, link: "https://twitter.com/i/flow/login" },
  ];
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-between gap-y-6  px-8 antialiased mt-1  ml-2 md:flex-row md:w-11/12">
        <div className="flex h-full flex-col justify-between gap-y-10 md:w-1/3">
          <div>
            <h1 className="text-6xl font-bold">Contact Us</h1>
            <p className="pt-4 text-2xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse
              distinctio, sint laborum quae.
            </p>
          </div>
          <div className=" p-2 flex flex-col gap-y-8">
            <div className="flex items-center gap-x-8  px-4 py-2 rounded-xl md:w-64">
              <IoCallOutline className="text-3xl text-gray-800 cursor-pointer hover:text-yellow-800 " />
              <p className="hover:text-yellow-800  hover:font-bold">+91 1234567890</p>
            </div>
            <div className="flex items-center gap-x-8  px-4 py-2 rounded-xl md:w-72">
              <HiOutlineMail className="text-3xl text-gray-800 cursor-pointer hover:text-yellow-800 " />
              <p className="hover:text-yellow-800  hover:font-bold">user@example.com</p>
            </div>
            <div className="flex items-center gap-x-8  px-4 py-2 rounded-xl md:w-64">
              <IoLocationOutline className="text-3xl text-gray-800 cursor-pointer hover:text-yellow-800 " />
              <p className="hover:text-yellow-800  hover:font-bold">Delhi, India</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {iconsTab.map(({ icon }, index) => {
              return (
                <Link to={iconsTab[index].link} key={index} target="_blank">
                  <div key={index} className="text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-yellow-800" style={{ transition: "all 0.5s" }}>
                    {icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" w-full md:w-1/3">
          <div className="bg-gray-300 rounded-xl shadow-xl shadow-yellow-800 p-8 text-gray-800">
            <form action="" className="flex flex-col gap-y-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-md px-4 py-2 border-gray-200 outline-none focus:ring-2 focus:ring-yellow-800 "
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full rounded-md px-4 py-2 border-gray-200 outline-none focus:ring-2 focus:ring-yellow-800 "
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Message
                </label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Message"
                  className="w-full h-24 rounded-md px-4 py-2 border-gray-200 outline-none focus:ring-2 focus:ring-yellow-800"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-yellow-800 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

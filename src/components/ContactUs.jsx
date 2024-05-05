import React, { useState } from "react";
import axios from "axios";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Meteors } from "./ui/meteor";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/api/v1/conatct", formData);
      setSuccessMessage("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
      console.error("Error:", error);
    }
    setLoading(false);
  };


  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMessageLength = (message) => {
    const validateMessage = message.trim();
    if (validateMessage.length < 10) {
      return false;
    }
    return true;
  };

  const iconsTab = [
    { icon: <FaFacebookSquare />, link: "https://www.facebook.com/" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
    { icon: <IoLogoInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaXTwitter />, link: "https://twitter.com/i/flow/login" },
  ];

  return (
    <>
      <Meteors number={30} speed={0.5} className="-z-10" />
      <div className="w-full min-h-screen flex flex-col items-center justify-between gap-y-6  px-8 antialiased md:flex-row md:w-11/12">
        <div className="flex h-full flex-col justify-between gap-y-10 md:w-1/3">
          <div>
            <h1 className="text-6xl font-bold">Contact Us</h1>
            <p className="pt-4 text-2xl text-gray-600 text-nowrap">
              Let's Connect and discuss about your requirement
            </p>
          </div>
          <div className=" p-2 flex flex-col gap-y-6">
            <div className="flex items-center gap-x-8  px-4 py-2 rounded-xl md:w-64">
              <IoCallOutline className="text-3xl text-gray-800 cursor-pointer hover:text-sky-300 " />
              <p className="hover:text-sky-400  hover:font-bold">
                +91 1234567890
              </p>
            </div>
            <div className="flex items-center gap-x-8  px-4 py-2 rounded-xl md:w-72">
              <HiOutlineMail className="text-3xl text-gray-800 cursor-pointer hover:text-sky-300 " />
              <p className="hover:text-sky-400  hover:font-bold">
                user@example.com
              </p>
            </div>
            <div className="flex items-center gap-x-8  px-4 py-2 rounded-xl md:w-64">
              <IoLocationOutline className="text-3xl text-gray-800 cursor-pointer hover:text-sky-300" />
              <p className="hover:text-sky-400 hover:font-bold">
                Delhi, India
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {iconsTab.map(({ icon }, index) => {
              return (
                <Link to={iconsTab[index].link} key={index} target="_blank">
                  <div
                    key={index}
                    className="text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-sky-300"
                    style={{ transition: "all 0.5s" }}
                  >
                    {icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" w-full md:w-1/3">
          <div className="bg-gray-300  rounded-xl shadow-xl shadow-sky-300 p-8 text-gray-800 relative md:mb-24">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full rounded-md px-4 py-2 border-gray-200 outline-none focus:ring-2 focus:ring-sky-300 "
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full rounded-md px-4 py-2 border-gray-200 outline-none focus:ring-2 focus:ring-yellow-800 "
                />
                {formData.email && !validateEmail(formData.email) && (
                  <p className="text-red-500 text-xs mt-1">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  className="w-full h-24 rounded-md px-4 py-2 border-gray-200 outline-none focus:ring-2 focus:ring-yellow-800"
                />
                {formData.message &&
                  !validateMessageLength(formData.message) && (
                    <p className="text-red-500 text-xs mt-1">
                      Message should be at least 10 characters long.
                    </p>
                  )}
              </div>
              <button
                type="submit"
                className="shadow__btn "
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              {successMessage && (
                <p className="text-green-500 text-sm mt-2 text-center">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

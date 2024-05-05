import React from "react";
import heroVideo from "../assets/hero video.mp4";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import "../App.css";

const Main = () => {
  const handleCallButtonClick = () => {
    const phoneNumber = "9877817339";

    window.open(`tel:${phoneNumber}`, "_blank");
  };
  return (
    <div className="flex h-screen items-center justify-around ">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 object-cover w-full h-full -z-20 opacity-90"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
      initial={{
        scale :0.9
      }}
      animate={{
        scale :1
      }}
      transition={{ ease: "easeOut", duration: 1 }}
      className=" flex flex-col items-center gap-6  ">
        <div className=" flex justify-start ">
          <div className="flex flex-col h-5/6 items-center px-4 py-6 mx-4 justify-center gap-y-4 bg-gray-300 rounded-xl mt-10 shadow-lg shadow-sky-300">
            <div className=" ">
              <h1 className="text-2xl font-bold text-black text-center md:text-5xl ">
                Welcome to{" "}
                <span className="shine uppercase">
                  BrilliantMindTech
                </span>{" "}
                <br />{" "}
                <p className="text-lg font-bold text-center py-2 text-gray-600">
                  India's NO. 1 Candidate Outsourcing Company.
                </p>{" "}
              </h1>
            </div>
            <div className="flex items-center gap-x-8">
              <button onClick={handleCallButtonClick} className="shadow__btn">
                Call us{" "}
                <span className="inline-block ml-2">
                  <IoCallSharp />
                </span>
              </button>

              <Link
                to="https://wa.me/9877817339?text=Hello How Can I Help You"
                target="_blank"
              >
                <button className="shadow__btn">
                  WhatsApp{" "}
                  <span className="inline-block ml-2">
                    <FaWhatsapp />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;

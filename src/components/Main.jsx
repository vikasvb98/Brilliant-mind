import React from "react";
import heroVideo from "../assets/hero video.mp4";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 object-cover w-full h-full blur-sm"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 flex flex-col items-center  gap-y-4 px-4">
          <div>
            <h1 className="text-5xl font-bold text-white ">
              Welcome to{" "}
              <span className="text-orange-800 uppercase">Brilliant Mind</span>{" "}
              <br />{" "}
              <p className="text-lg font-bold text-center py-2">
                NO. 1 IT <span className="text-gray-800"> Outsourcing </span>{" "}
                Company In India{" "}
              </p>{" "}
            </h1>
          </div>
          <div className="flex items-center gap-x-8">
            <button className="flex items-center justify-center text-white bg-gray-800 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5">
              Call us{" "}
              <span className="inline-block ml-2">
                <IoCallSharp />
              </span>
            </button>
            <button className="flex items-center justify-center text-white bg-gray-800 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5">
              WhatsApp{" "}
              <span className="inline-block ml-2">
                <FaWhatsapp />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

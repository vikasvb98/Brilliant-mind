import React from "react";
import heroVideo from "../assets/hero video.mp4";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
  const handleCallButtonClick = () => {
    const phoneNumber = '9877817339';
    
    window.open(`tel:${phoneNumber}`, '_blank');
  };
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
        <div className="absolute top-1/2 flex flex-col items-center mx-2 gap-y-4 bg-gray-300 shadow-lg shadow-yellow-800 p-4 rounded-2xl md:ml-4">
          <div className=" ">
            <h1 className="text-5xl font-bold text-gray-800 ">
              Welcome to{" "}
              <span className="text-yellow-800 font-bold uppercase">Brilliant Mind</span>{" "}
              <br />{" "}
              <p className="text-lg font-bold text-center py-2 text-gray-800">
                NO. 1 IT <span className="text-yellow-800 font-bold"> Outsourcing </span>{" "}
                Company In India{" "}
              </p>{" "}
            </h1>
          </div>
          <div className="flex items-center gap-x-8">
            <button onClick={handleCallButtonClick} className="flex items-center justify-center text-white bg-gray-800 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5">
              Call us{" "}
              <span className="inline-block ml-2">
                <IoCallSharp />
              </span>
            </button>
            
            <Link to="https://wa.me/9877817339?text=Hello How Can I Help You" target="_blank">
            <button className="flex items-center justify-center text-white bg-gray-800 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5">
              WhatsApp{" "}
              <span className="inline-block ml-2">
                <FaWhatsapp />
              </span>
            </button>
            </Link>
                      </div>
        </div>
      </div>
    </>
  );
};

export default Main;

import React from "react";
import Image from "../assets/About2.jpg";
import Image2 from "../assets/About1.jpg";
import Image3 from "../assets/About3.jpg";

const AboutUs = () => {
  return (
    <>
      <div className=" w-full min-h-screen flex flex-col items-center px-3 mt-2 antialiased md:flex-row  md:justify-around">
        <div className="flex flex-col md:w-1/2 gap-y-4 px-2 py-4">
          <div className="font-bold">
            <p className="text-sky-300 mt-2 text-lg font-bold align-top">
              How It started ?
            </p>
          </div>
          <div className="text-5xl font-bold ">
            <p>How We See Outsourcing in 2024 for You.</p>
          </div>
          <div className="text-lg mt-6">
            <p className="text-gray-600">
              Welcome to Brilliant Mind Tech, where outsourcing isn't just a
              service; it's a strategic partnership crafted from a rich history
              of innovation and dedication. From our humble beginnings, we've
              grown into a leading provider of outsourcing solutions, driven by
              a commitment to excellence and a passion for empowering businesses
              to thrive in a dynamic global landscape. Join us as we continue to
              redefine the possibilities of outsourcing, delivering exceptional
              value and driving sustainable growth for our clients worldwide.
            </p>
          </div>
        </div>
        <div>
          <div className=" w-96 h-72 rounded-md flex items-center justify-center">
            <img
              src={Image}
              alt="Img"
              className=" object-cover rounded-xl shadow-xl"
            />
          </div>
          <div className="grid grid-cols-2 ">
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">3.5 K</h1>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">100k</h1>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">50 +</h1>
              <p className="text-gray-600">Industries</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">2+</h1>
              <p className="text-gray-600">Years</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full min-h-screen flex flex-col items-center px-3 mt-2 antialiased md:flex-row  md:justify-around">
        <div>
          <div className="font-bold">
            <p className="text-sky-300 mt-2 text-lg  font-bold align-top">
              Our Mission{" "}
            </p>
          </div>
          <div className=" w-96 h-72 rounded-md flex items-center justify-center">
            <img
              src={Image2}
              alt="Img"
              className=" object-cover rounded-xl shadow-xl"
            />
          </div>
          <div className="grid grid-cols-2 ">
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">3.5 K</h1>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">100k</h1>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">50 +</h1>
              <p className="text-gray-600">Industries</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">2+</h1>
              <p className="text-gray-600">Years</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/2 gap-y-4 px-2 py-4">
          <div className="text-5xl font-bold">
            <p className="text-nowrap">Our Mission is to revolutionize.</p>
          </div>
          <div className="text-lg mt-6">
            <p className="text-gray-600">
            At Brilliant Mind Tech, our mission is to revolutionize the way businesses operate by providing innovative outsourcing solutions that empower our clients to achieve their goals with confidence and efficiency. We are committed to delivering exceptional value through strategic partnerships, cutting-edge technology, and a relentless focus on customer satisfaction. By leveraging our expertise and global network of talent, we aim to drive sustainable growth, foster innovation, and create lasting impact in the industries we serve. Together, we're shaping the future of outsourcing, one partnership at a time.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full min-h-screen flex flex-col items-center px-3 mt-2 antialiased md:flex-row  md:justify-around">
        <div className="flex flex-col md:w-1/2 gap-y-4 px-2 py-4">
          <div className="font-bold">
            <p className="text-sky-300 mt-2 text-lg align-top">
              Our Goals
            </p>
          </div>
          <div className="text-6xl font-bold">
            <p>Our Goals are Interwoven with our Mission</p>
          </div>
          <div className="text-lg mt-6">
            <p className="text-gray-600">
            At Brilliant Mind Tech, our goals are intertwined with our mission to revolutionize the outsourcing landscape and empower businesses worldwide. We are dedicated to delivering exceptional value through innovative solutions and strategic partnerships while driving continuous innovation to meet evolving client needs. Customer satisfaction is our top priority, and we strive to ensure transparency, responsiveness, and excellence in every interaction. By fostering sustainable growth, driving efficiency, and maximizing value, we aim to create lasting impact in the industries we serve, contributing to the success of our clients, our company, and the communities we operate in. Through passion, integrity, and dedication, we are committed to achieving our mission and making a positive difference in the outsourcing ecosystem.
            </p>
          </div>
        </div>
        <div>
          <div className=" w-96 h-72 rounded-md flex items-center justify-center">
            <img
              src={Image3}
              alt="Img"
              className=" object-cover rounded-xl shadow-xl"
            />
          </div>
          <div className="grid grid-cols-2 ">
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">3.5 K</h1>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">100k</h1>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">50 +</h1>
              <p className="text-gray-600">Industries</p>
            </div>
            <div className=" m-2 bg-gray-200 rounded-xl px-2 py-4 text-center shadow-md shadow-sky-300">
              <h1 className="text-lg font-bold">2+</h1>
              <p className="text-gray-600">Years</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

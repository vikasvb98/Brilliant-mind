import React from "react";
import Image from "../assets/Whyus1.jpg";
import Image2 from "../assets/Whyus2.jpg";
import Image3 from "../assets/Whyus3.jpg";

const Whyus = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-16">
        <h1 className="text-4xl font-bold">Why Choose Us?</h1>
        <div className="w-full grid md:grid-cols-3 justify-items-center gap-4">
          <div className="h-64 w-72 bg-gray-300 rounded-md flex flex-col justify-center items-center shadow-md shadow-sky-300 hover:shadow-lg hover:shadow-sky-400 ">
            <img
              src={Image}
              alt="Image 1"
              className="w-full h-full object-cover rounded-md"
            />
            <p className="mt-2 py-2 w-full text-xl rounded-md text-center font-extrabold hover:border-2 hover:border-sky-800">
              We deliver on time
            </p>
          </div>
          <div className="h-64 w-72 bg-gray-300 rounded-md flex flex-col justify-center items-center shadow-md shadow-sky-300 hover:shadow-lg hover:shadow-sky-400">
            <img
              src={Image2}
              alt="Image 2"
              className="w-full h-full object-cover rounded-md"
            />
            <p className="mt-2 py-2 w-full text-xl text-center rounded-md font-extrabold hover:border-2 hover:border-sky-800">
              We prioritize quality
            </p>
          </div>
          <div className="h-64 w-72  bg-gray-300 rounded-md flex flex-col justify-center items-center shadow-md shadow-sky-300 hover:shadow-lg hover:shadow-sky-400">
            <img
              src={Image3}
              alt="Image 3"
              className="w-full h-full object-cover rounded-md"
            />
            <p className="mt-2 py-2 w-full text-xl text-center rounded-md font-extrabold hover:border-2 hover:border-sky-800">
              We offer competitive pricing
            </p>
          </div>
        </div>
        <p className="text-gray-500 px-6 font-bold text-wrap mb-6">
        Welcome to Brilliantt Mind Tech, your premier destination for outsourcing top-tier IT talent in India. With a steadfast commitment to excellence, we specialize in delivering timely, high-quality solutions at competitive prices, empowering businesses worldwide to thrive in the digital age. At Brilliantt Mind Tech, we understand the pivotal role that exceptional IT professionals play in driving success for businesses of all sizes. Leveraging our extensive network of skilled candidates, we meticulously handpick the best-fit talents tailored to your unique requirements, ensuring a seamless integration into your projects and teams. Our core values of timeliness, quality, and competitive pricing guide every aspect of our operations, ensuring that our clients receive nothing short of excellence in every interaction. From our extensive talent pool to our transparent communication and personalized approach, we are dedicated to surpassing your expectations and helping you achieve your business objectives with confidence. Get in touch today and let's elevate your projects together.
        </p>
      </div>
    </>
  );
};

export default Whyus;

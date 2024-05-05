import React from 'react'
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import footerLogo from '../assets/logo.svg'

const Footer = () => {
    const iconsTab = [
        { icon: <FaFacebookSquare /> ,
        link: "https://www.facebook.com/"},
        { icon: <FaLinkedin />,
        link: "https://www.linkedin.com/"},
        { icon: <IoLogoInstagram />,
        link: "https://www.instagram.com/"},
        { icon: <FaXTwitter />,
        link: "https://twitter.com/i/flow/login"},
      ];
  return (
    <>
        <footer className="bg-white my-2">
        <div className="container mx-auto">
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <img
                src={footerLogo}
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
              Unlock the power of global talent with our expertly curated IT outsourcing solutions, tailored to elevate your business beyond boundaries.
              </p>
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <Link to={iconsTab[index].link} key={index} target="_blank">
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-sky-300 hover:text-sy-300"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                    </Link>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} BRILIANT MIND TECH <br />{" "}
                Developed by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/vikasvb98"
                >
                  Vikas
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Services</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-sky-300"></span>
              <p className="text-[16px] hover:text-sky-300 cursor-pointer text-gray-800  font-medium hover:font-bold">
              Customized Staff Augmentation
              </p>
              <p className="text-[16px] hover:text-sky-300 cursor-pointer text-gray-800  font-medium hover:font-bold">
              Managed IT Services
              </p>
              <p className="text-[16px] hover:text-sky-300 cursor-pointer text-gray-800  font-medium hover:font-bold">
              Specialized Skill Acquisition
              </p>
              <p className="text-[16px] hover:text-sky-300 cursor-pointer text-gray-800  font-medium hover:font-bold">
              24/7 chat Support
              </p>
              <p className="text-[16px] hover:text-sky-300 cursor-pointer text-gray-800  font-medium hover:font-bold">
              Strategic Consulting
              </p>
            </div>
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-sky-300"></span>
              <p className="text-[16px]  text-gray-800 font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-gray-800  font-medium">
                7:00 AM - 9:00 PM
              </p>
              <p className="text-[16px] text-gray-800 font-bold">Saturday:</p>
              <p className="text-[16px] text-gray-800  font-medium">
                7:00 AM - 9:00 PM
              </p>
              <p className="text-[16px] text-gray-800  font-bold ">
                Sunday - Closed
              </p>
            </div>
            <span></span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
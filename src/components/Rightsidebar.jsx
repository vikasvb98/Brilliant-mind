import React from 'react'
import { FaFacebookSquare , FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";


const Rightsidebar = () => {
  return (
    <>
        <div className='fixed flex flex-col gap-y-8 items-center px-4 py-4 w-16 h-60 top-1/3 right-0 rounded-tl-xl rounded-bl-xl bg-gray-800'>
            <FaFacebookSquare className=' cursor-pointer text-3xl text-white hover:text-orange-800' />
            <FaLinkedin className=' cursor-pointer text-3xl text-white hover:text-orange-800'/>
            <IoLogoInstagram className=' cursor-pointer text-3xl text-white hover:text-orange-800'/>
            <FaXTwitter className=' cursor-pointer text-3xl text-white hover:text-orange-800'/>
        </div>
    </>
  )
}

export default Rightsidebar
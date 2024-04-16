import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import logo from '../assets/logo-no-background.svg';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleNav = () => {
        setOpenNav(!openNav);
    };

    const Navlist = ['Home', 'Services', 'About', 'Contact Us'];

    return (
        <>
            <div className="w-full h-20 flex items-center justify-between px-5 bg-gray-800 sticky top-0 z-10">
                <div className="flex items-center cursor-pointer">
                    <img src={logo} alt="logo" className="w-16 h-16" />
                </div>
                <div className="flex items-center md:hidden">
                    {openNav ? (
                        <RxCross1 className="text-white text-5xl cursor-pointer" onClick={handleNav} />
                    ) : (
                        <IoMdMenu className="text-white text-5xl cursor-pointer" onClick={handleNav} />
                    )}
                </div>
                <ul className={`md:flex md:items-center md:gap-x-8 ${openNav ? 'flex' : 'hidden'} absolute top-28 left-0 right-0 bg-gray-800 z-10 md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent md:gap-x-0 flex-col md:flex-row`}>
                    {Navlist.map((item, index) => (
                        <li key={index} className="flex items-center mx-3 my-2 md:my-0 hover:border-2 border-orange-800 rounded-lg p-1">
                            <span className="text-white text-xl cursor-pointer" onClick={handleNav}>{item}</span>
                        </li>
                    ))}
                    <div className="flex items-center justify-around mx-1 my-2">
                        <button className="text-white bg-gray-800 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5">
                            Find a Job
                        </button>
                        <button className="text-white bg-gray-800 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5">
                            Hire talent
                        </button>
                </div>
                </ul>
            </div>
        </>
    );
};

export default Navbar;



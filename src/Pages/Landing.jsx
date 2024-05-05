import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Rightsidebar from "../components/Rightsidebar";
import Footer from "../components/Footer";
import Whyus from "../components/Whyus";
import { BackgroundBeams } from '../components/ui/backgroundBeams'

const Landing = () => {
  return (
    <>
      {/* <BackgroundBeams className="-z-10" />  */}
      <Navbar />
      <Main />
      <Rightsidebar />
      <Whyus/>
      <Footer />
    </>
  );
};

export default Landing;

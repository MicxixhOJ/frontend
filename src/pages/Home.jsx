import React, { useState, useEffect } from "react";
import Landing from '../components/Home/Landing'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar";
import Footer from  '../components/Footer'
const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    {/* <HeroSection /> */}
        <Landing />

        < Footer />
    </>
  )
}

export default Home
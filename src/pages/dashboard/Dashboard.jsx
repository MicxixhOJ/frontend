import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DashboardCards from "../../components/dashboard/cards";

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
      };
  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar  toggle={toggle}/>
    
    <DashboardCards />
    <Footer />
   </>
  )
}

export default Dashboard
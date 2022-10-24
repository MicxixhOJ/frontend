import React, {useState} from "react";
import PendingOnMe from "../../components/dashboard/supervisorPending";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Pending = () => {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <Sidebar  isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      {/* <Myreports /> */}

   <PendingOnMe />
      <Footer />
    </>
  );
};

export default Pending;

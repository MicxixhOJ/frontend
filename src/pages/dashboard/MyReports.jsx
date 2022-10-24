import React, {useState} from "react";
import Myreports from "../../components/dashboard/myReports";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const MyReports = () => {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <Sidebar  isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Myreports />
      <Footer />
    </>
  );
};

export default MyReports;

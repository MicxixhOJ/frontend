import React , {useState} from "react";
import ThePendingReport from "../../components/dashboard/pendingReport";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const PendingReport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Myreports /> */}

      <ThePendingReport />
      <Footer />
    </>
  );
};

export default PendingReport;

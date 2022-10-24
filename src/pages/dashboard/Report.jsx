import React from 'react'
import TheReport from '../../components/dashboard/report'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Report = () => {
  return (
    <>
    <Sidebar />
    <Navbar />
    <TheReport />
    <Footer />
    </>
  )
}

export default Report
import React from 'react'
import ReportAdder from '../../components/dashboard/addReport'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
const addReport = () => {
  return (
    <div>
        <Sidebar />
        <Navbar/>
        <ReportAdder />
        <Footer />
        
    </div>
  )
}

export default addReport
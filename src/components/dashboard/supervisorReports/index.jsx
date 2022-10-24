import React from "react";
import {
  MyReportsContainer,
  UtitilyDiv,
  Tableau,
  TableauTD,
  TableauTH,
  TableDiv,
  View,
} from "./supervisorReportsElements";
import { PageTitle } from "../addReport/addReportsElements";

import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const SupervisorReports = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const [supervisor, setSupervisor] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [reports, setReports] = useState([]);

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let supervisor = user.supervisorID;

    fetch("http://localhost:5000/reports/reports-to-me", {
      method: "POST",
      body: JSON.stringify({
        supervisor,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReports(data.data);
      });
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <MyReportsContainer>
        <PageTitle>My Reports</PageTitle>

        <UtitilyDiv>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Week</th>
                <th>Student</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reports?.map((report) => {
                return (
                  <tr key={report._id}>
                    <td>{report.weekNumber}</td>
                    <td>{report.author}</td>
                    <td>{report.status}</td>
                    <td>
                      <View to={`/supervisor/pending-report/${report._id}`}>view</View>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </UtitilyDiv>
      </MyReportsContainer>
      <Footer />
    </>
  );
};

export default SupervisorReports;

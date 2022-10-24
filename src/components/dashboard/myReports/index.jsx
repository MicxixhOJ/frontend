import React from "react";
import {
  MyReportsContainer,
  UtitilyDiv,
  Tableau,
  TableauTD,
  TableauTH,
  TableDiv,
  View,
} from "./myReportsElements";
import { PageTitle } from "../addReport/addReportsElements";

import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// const data = [
//   { name: "Anom", age: 19, gender: "Male" },
//   { name: "Megha", age: 19, gender: "Female" },
//   { name: "Subham", age: 25, gender: "Male"},
// ]

const Myreports = () => {
  // const [username, setUserName] = useState("");
  const [reports, setReports] = useState([]);




  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let username = user.username


    fetch("http://localhost:5000/reports/my-reports", {
      method:"POST",
      body:JSON.stringify({
        username
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      }).then((response) => response.json())
      .then((data) => {
        setReports(data)
      })
  }, []);

  // console.log(">>>>>>>>>repor", username)


  return (
    <MyReportsContainer >
      <PageTitle>My Reports</PageTitle>

      <UtitilyDiv>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Week</th>
              <th>Supervisor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
            {reports?.map((report) => {
              return (
                <tr key={report._id}>
                  <td>{report.weekNumber}</td>
                  <td>{report.supervisor}</td>
                  <td>{report.status}</td>
                  <td><View to={`/dashboard/report/${report._id}`}>view</View></td>

                </tr>
              );
            })}
          </tbody>
        </Table>
      </UtitilyDiv>
    </MyReportsContainer>
  );
};



export default Myreports;

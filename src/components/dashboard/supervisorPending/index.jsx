import React from 'react'

import {
    MyReportsContainer,
    UtitilyDiv,
    Tableau,
    TableauTD,
    TableauTH,
    TableDiv,
    View,
  } from "./supervisorPendingElements";
  import { PageTitle } from "../addReport/addReportsElements";
  import Table from "react-bootstrap/Table";
  import { useState } from "react";
  import { useEffect } from "react";

const PendingOnMe = () => {

    const [reports, setReports] = useState([]);

    useEffect(() => {
        let user = JSON.parse(sessionStorage.getItem("user"));
        let supervisor = user.supervisorID
    
    
        fetch("http://localhost:5000/reports/pending-on-me", {
          method:"POST",
          body:JSON.stringify({
            supervisor
          }),
          headers: {
            'Content-Type': 'application/json'
          }
          }).then(async(response) => await response.json())
          .then(async (data) => {
           console.log('DATAA', data)
            setReports(await data.data)
          }) 
      }, []);

      // console.log(reports)

  return (
    <MyReportsContainer >
      <PageTitle>Pending Reports</PageTitle>

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
            
            {
          
            reports?.map((report) => {
              return (
                <tr key={report._id}>
                  <td>{report.weekNumber}</td>
                  <td>{report.author}</td>
                  <td>{report.status}</td>
                  <td><View to={`/supervisor/pending-report/${report._id}`}>view</View></td>
 
                </tr>
              );
            })}
          </tbody>
        </Table>
      </UtitilyDiv>
    </MyReportsContainer>
  )
}

export default PendingOnMe
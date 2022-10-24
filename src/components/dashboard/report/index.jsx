import React, { useState } from "react";
import {
  ApproveButton,
  BackButton,
  ButtonContainer,
  Move,
  RejectButton,
  ReportBy,
  ReportContainer,
  TheReportCotainer,
  Week,
} from "./reportElements";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "react-scroll";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const TheReport = () => {
  const { id } = useParams();
  const [report, setReport] = useState("");
  const [reportDetails, setReportDetails] = useState("")
  const [role, setRole] = useState("")

  useEffect(() => {

    let user = JSON.parse(sessionStorage.getItem("user"))
    setRole(user.role)

    fetch("http://localhost:5000/reports/get-report", {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let theReport = data.data
        setReportDetails(theReport)
        setReport(theReport.report)
      });
  }, []);

  const handleClick = (e) => {
    // e.preventDefault()
    console.log(value);
    toast.success("Uploaded");
  };
  return (
    <ReportContainer>
      <Toaster position="top-right" />
      <Week>Week {reportDetails.weekNumber}</Week>
      <ReportBy>Report by {reportDetails.author}</ReportBy>

      <TheReportCotainer>
        <ReactQuill theme="snow" value={report} readOnly={true} />

        {
            role === "Student" ? 
            <ButtonContainer>
            <BackButton><Move to="/dashboard/my-reports"> Back </Move></BackButton>
          </ButtonContainer>
            
            :

            <ButtonContainer>

         
            <ApproveButton>Approve</ApproveButton>
            <RejectButton>Reject</RejectButton>
            <BackButton> Back</BackButton>
          </ButtonContainer>
          }
        
      </TheReportCotainer>
    </ReportContainer>
  );
};

export default TheReport;

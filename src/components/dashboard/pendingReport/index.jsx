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
  View,
  Week,
  SelectContainer,
} from "./pendingReportElements";
import { useNavigate } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "react-scroll";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FormSelect } from "react-bootstrap";
import axios from "axios";

const ThePendingReport = () => {
  const { id } = useParams();
  //   console.log(id)
  const [report, setReport] = useState("");
  const [status, setStatus] = useState("");
  const [reportDetails, setReportDetails] = useState("");
  const [role, setRole] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    setRole(user.role);

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
        let theReport = data.data;
        setReportDetails(theReport);
        setReport(theReport.report);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("yya");
    let theObj = {
      id,
      status,
    };

    console.log(theObj);
    axios
      .post("http://localhost:5000/reports/process-report", theObj)
      .then((response) => {
        console.log(response);
        toast.success("Processed");

        setTimeout(() => {
          navigate("/supervisor/pending-reports");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong");
      });
  };

  return (
    <ReportContainer>
      <Toaster position="top-right" />
      <Week>Week {reportDetails.weekNumber}</Week>
      <ReportBy>Report by {reportDetails.author}</ReportBy>

      <TheReportCotainer>
        <ReactQuill theme="snow" value={report} readOnly={true} />

        {role === "Student" ? (
          <ButtonContainer>
            <BackButton>
              <Move to="/dashboard/my-reports"> Back </Move>
            </BackButton>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <SelectContainer>
              <FormSelect
                type="text"
                name="status"
                required={true}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Choice"
              >
                <option>Decision</option>
                <option value="Approved">Approve</option>
                <option value="Rejected">Reject</option>
              </FormSelect>
            </SelectContainer>

            <ApproveButton onClick={handleClick}>Process</ApproveButton>
            {/* <RejectButton>Reject</RejectButton> */}
            <BackButton>
              <View to="/supervisor/pending-reports">Back</View>{" "}
            </BackButton>
          </ButtonContainer>
        )}
      </TheReportCotainer>
    </ReportContainer>
  );
};

export default ThePendingReport;

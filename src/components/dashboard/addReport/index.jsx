import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  AddReportsButton,
  AddReportsContainer,
  PageTitle,
  SelectContainer,
} from "./addReportsElements";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";
import { FormSelect } from "react-bootstrap";
import { useEffect } from "react";

const ReportAdder = () => {
  const [report, setReport] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [author, setAuthor] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    setSupervisor(user.supervisor);
    setAuthor(user.username);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    let theObj = {
      report,
      weekNumber,
      supervisor,
      author,
    };

    axios
      .post("http://localhost:5000/reports/add-report", theObj)
      .then((response) => {
        if (response.data) {
          toast.success("Uploaded");

          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <AddReportsContainer>
      <Toaster position="top-right" />
      <PageTitle>Add New Report</PageTitle>
      <SelectContainer>
        <FormSelect
          type="number"
          name="weekNumber"
          required={true}
          onChange={(e) => setWeekNumber(e.target.value)}
          placeholder="Week"
        >
          <option>Choose Week</option>
          <option value={1}>Week 1</option>
          <option value={2}>Week 2</option>
          <option value={3}>Week 3</option>
          <option value={4}>Week 4</option>
          <option value={5}>Week 5</option>
          <option value={6}>Week 6</option>
          <option value={7}>Week 7</option>
          <option value={8}>Week 8</option>
          <option value={9}>Week 9</option>
          <option value={10}>Week 10</option>
          <option value={11}>Week 11</option>
          <option value={12}>Week 12</option>
        </FormSelect>
      </SelectContainer>

      <ReactQuill
        theme="snow"
        value={report}
        onChange={setReport}
        placeholder="start typing ..."
      />
      <AddReportsButton onClick={handleClick}>Add Report</AddReportsButton>
    </AddReportsContainer>
  );
};

export default ReportAdder;

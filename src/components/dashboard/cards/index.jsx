import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  CardsContainer,
  Card1,
  Card2,
  Card3,
  Card4,
  CardH1,
  SendTo,
  DashboardContainer,
  Pee
} from "./cardsElement";
import { GiBookshelf } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { MdPendingActions } from "react-icons/md";
import {BiEraser} from "react-icons/bi";
import axios from "axios";

export default () => {
  const [role, setRole] = useState("");
  const [totalReports, setTotalReports] = useState("");
  const [totalStudents, setTotalStudents] = useState("");
  let user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    setRole(user.role)


 


  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/reports/total-reports", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalReports(data.data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/student/total-students", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalStudents(data.data);
      });
  }, []);


  useEffect(() => {
       let theStudent = {
      id: user._id
    }
    axios.post('http://localhost:5000/student/get-student', theStudent ).then((response) =>{
      
      let user = response.data.data
      delete user.password
      sessionStorage.setItem("user", JSON.stringify(user));
      // console.log(user)
      
    }).catch((error) =>{
      console.log(error)
    })
  }, []);



  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <DashboardContainer>
      {role === "Student" ? (
        <CardsContainer>
          <SendTo to="/dashboard/my-reports">
            <Card1>
              <GiBookshelf size={40} />
              <CardH1>My Reports</CardH1>
            </Card1>
          </SendTo>

          <SendTo to="/dashboard/add-report">
            <Card2>
              <BsPencilSquare size={40} />
              <CardH1>Add Report</CardH1>
            </Card2>
          </SendTo>
        </CardsContainer>
      ) : (
        <CardsContainer>
          <SendTo to="/supervisor/reports-to-me">
            <Card1>
              <GiBookshelf size={40} />
              <CardH1>Reports To Me</CardH1>
            </Card1>
          </SendTo>

          <SendTo to="/supervisor/pending-reports">
            <Card2>
              <MdPendingActions size={40} />
              <CardH1>Pending Reports</CardH1>
            </Card2>
          </SendTo>
        </CardsContainer>
      )}

{role === "Student" ? (


      <CardsContainer>
        <Card3>
          <FaUsers size={40} />
          <CardH1>Total Students</CardH1>
          {totalStudents}
        </Card3>

        <SendTo to="/update-account">
        <Card4>
          <BiEraser size={40} />
          <CardH1>Update Profile</CardH1>
          <Pee> {totalReports} </Pee>
        </Card4>
        </SendTo>
      </CardsContainer>
      
      
      
      ) 
      
      
      :
      
      
      
      
      (
        <CardsContainer>
        <Card3>
          <FaUsers size={40} />
          <CardH1>Total Students</CardH1>
          {totalStudents}
        </Card3>

        <Card4>
          <SiBookstack size={40} />
          <CardH1>Total Reports</CardH1>
          {totalReports}
        </Card4>
      </CardsContainer>
      )}
       
    </DashboardContainer>
  );
};

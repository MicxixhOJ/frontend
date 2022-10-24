import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReportContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 50px;
`;

export const Week = styled.h1`
  font-size: 2.6em;
  color: #9d04b1;
`;

export const ReportBy = styled.p`
  font-size: 1em;
  color: #77537c;
  margin-bottom: 50px;
`;

export const TheReportCotainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const ApproveButton = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 100px;
  background-color: green;
  color: #fff;
  border: none;
  cursor: pointer;

  
  &:hover{
    transition: all 0.2s ease-in-out;
    background: #045504;
   
  }
`;

export const RejectButton = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 100px;
  background-color: red;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #a20101;
   
  }
`;

export const BackButton = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 100px;
  background-color: #9d04b1;
  color: #fff;
  border: none;
  cursor: pointer;

  
  &:hover{
    transition: all 0.2s ease-in-out;
    background: #5d0569;
   
  }
`;


export const Move = styled(Link)`
  color: #fff;
  font-size: 15px;
  text-decoration: none;
`
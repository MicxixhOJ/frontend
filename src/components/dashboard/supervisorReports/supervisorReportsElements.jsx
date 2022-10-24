import styled from 'styled-components'
import { Link } from "react-router-dom";



export const MyReportsContainer = styled.div`
    width: 100%;
    height: auto;
   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const UtitilyDiv = styled.div`
  margin-top: 30px;
 
  margin-bottom: 50px;
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* background-color:red; */
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const TableDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tableau = styled.table`
  border: 2px solid forestgreen;
  width: auto;
  height: auto;
`;

export const TableauTH = styled.th`
  border-bottom: 1px solid black;
`;


export const TableauTD =  styled.td`
text-align: center;
`

export const View = styled(Link)`
  color: #9d04b1;
  font-size: 15px;
`
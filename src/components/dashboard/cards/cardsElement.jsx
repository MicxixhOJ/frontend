import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardsContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  // background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const Card1 = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  width: 200px;
  border-radius: 15px;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: none;
  text-align: center;
  color: rgb(6, 27, 100);
  background-color: rgb(209, 233, 252);
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(164, 206, 241);
    color: #010606;
  }

  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;
export const Card2 = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  width: 200px;
  border-radius: 19px;
  background-color: white;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: none;
  text-align: center;
  color: rgb(122, 12, 46);
  background-color: rgb(255, 231, 217);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(247, 207, 184);
    color: rgb(122, 12, 46);
  }

  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;
export const Card3 = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  width: 200px;
  border-radius: 15px;
  background-color: white;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: none;
  text-align: center;
  color: rgb(122, 79, 1);
  background-color: rgb(255, 247, 205);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(248, 235, 171);;
    color: rgb(122, 79, 1);
  }

  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;
export const Card4 = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  width: 200px;
  border-radius: 15px;
  background-color: white;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: none;
  text-align: center;
  color: rgb(4, 41, 122);
  background-color: #dcb6e1;

  &:hover {
    transition: all 0.2s ease-in-out;
    background:  #ceadd2;
    color:rgb(4, 41, 122);
  }
  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;

export const CardH1 = styled.h1`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 300;
`;
export const CardH2 = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 300;
`;
export const CardH3 = styled.h2`
  margin-top: 20px;
  font-size: 10px;
  font-weight: 300;
  color: #fafafa;
`;

export const DashboardContainer = styled.div`
  //   background-color: cyan;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;



export const ProfileCard = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: cyan;
  border-radius: 10px;
`


export const SendTo = styled(Link)`
  text-align: center;
  text-decoration: none;
`

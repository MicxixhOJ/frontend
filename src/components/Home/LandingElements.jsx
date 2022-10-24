import styled from "styled-components";
import { Link } from "react-router-dom";

import img from "../../public/homeImg.png";
export const HomeContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin-bottom: 10px;
  margin-top: 30px;

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const HomeWriteup = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    padding: 30px;
  }
`;

export const HomeImg = styled.div`
  height: 500px;
  width: 500px;
  background-image: url(${img});
  background-size: contain;

  @media screen and (max-width: 820px) {
    height: 350px;
    width: 350px;
  }
`;

export const HomeH1 = styled.h1`
  font-weight: 400;
  font-size: 35px;
  color: #1a1a1a;
`;

export const HomeSpan = styled.span`
  color: #9d04b1;
`;


export const HomeP = styled.p`
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 200;
`;


export const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: flex-start;
  gap: 5px;
`;
export const HomeButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #9d04b1;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export const HomeButtonWhite = styled.button`
  height: 40px;
  width: 100px;
  background-color: #fff;
  color: #9d04b1;
  border: 1px solid #9d04b1;
  cursor: pointer;
  margin-left: 10px;
`;

export const View = styled(Link)`
  /* color: #9d04b1; */
  text-decoration: none;
  font-size: 15px;
  color: #fff;
`
export const ViewTwo = styled(Link)`
  color: #9d04b1;
  text-decoration: none;
  font-size: 15px;
  /* color: #fff; */
`
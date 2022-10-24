import React, { useState, useEffect } from "react";
import {
  HomeButton,
  HomeContainer,
  ButtonContainer,
  HomeImg,
  HomeH1,
  HomeP,
  HomeWriteup,
  HomeButtonWhite,
  HomeSpan,
  View,
  ViewTwo
} from "./LandingElements";

const Landing = () => {
  return (
    <HomeContainer>
      <HomeWriteup>
        <HomeH1>Connecting You to <br /> your <HomeSpan>Lecturers</HomeSpan></HomeH1>
        <HomeP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni <br /> dolore incidunt blanditiis repellendus, cupiditate deleniti autem. <br /> Quibusdam corporis ea, officiis voluptatem voluptate commodi, <br /> deleniti blanditiis, voluptas non expedita magni repellat.</HomeP>
        <ButtonContainer>
        <HomeButton ><View to="/signup">Sign Up</View> </HomeButton>
        <HomeButtonWhite ><ViewTwo to="/signin">Login</ViewTwo> </HomeButtonWhite>
      </ButtonContainer>
      </HomeWriteup>
      <HomeImg>
      

      </HomeImg>

      
    </HomeContainer>
  );
};

export default Landing;

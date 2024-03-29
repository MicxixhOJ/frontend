import React, { useState } from "react";
import axios from "axios";
import Footer from '../Footer'
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormContent,
  FormWrap,
  Icon,
  Container,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Accent,
} from "./SigninElements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let userObject = {
    email,

    password,
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/supervisor/login", userObject)
      .then((res) => {
        let user = res.data.supervisor;
        if (user) {
          toast.success("Login Successful");

          delete user.password
          sessionStorage.setItem("user", JSON.stringify(user));

        }

        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => {
        toast.error("Incorrect Email or Password");
        // window.location.reload();
      });
  };
  return (
    <>
      <Container>
        <ToastContainer />
        <FormWrap>
          <Icon to="/"> Uniben</Icon>
          <br />
        
      
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1> Sign In As Supervisor</FormH1>
              {/* <FormLabel htmlFor="for">Username</FormLabel> */}
              <FormInput
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
              {/* <FormLabel htmlFor="for">Password</FormLabel> */} 
              <FormInput
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <FormButton type="submit">Continue</FormButton>
              {/* <Text>
                Don't have an account? <Accent to="/signup">Sign up</Accent>
              </Text> */}
            </Form>
          </FormContent>
        </FormWrap>
     <Footer />

      </Container>
    </>
  );
};

export default SignIn;

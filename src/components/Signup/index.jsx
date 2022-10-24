import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
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
  FormSelect,
} from "./SignupElements";
import Footer from "../Footer";

const SignUp =  () => {

  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [password, setPassword] = useState("");
  const [matricNumber, setMatricNumber] = useState("");

console.log(supervisor)

  


  let userObject = {
    fullName,
    username,
    matricNumber,
    email,
    password,
    supervisor,
  };

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/student/register", userObject)
      .then((res) => {
        let user = res.data.student;
        
        if (user) {
          toast.success("Signup Succesful");
          setTimeout(() => {
            navigate("/signin");
          }, 3000);
        }
        else{

          toast.error("Incorrect Details");
        }
     
      })
      .catch((error) => {
        console.log(error.response)
        toast.error("User Already Exists");


        // window.location.reload();
      });
  };
  return (
    <>
      <Container>
        

        <FormWrap>
          <Icon to="/"> Uniben</Icon>
          <br />
          <br />
          <Toaster position="top-right" />
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1> Create your account</FormH1>
              {/* <FormLabel htmlFor="for">Full Name</FormLabel> */}
              <FormInput
                type="text"
                name="fullName"
                required={true}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
              />
              {/* <FormLabel htmlFor="for">Username</FormLabel> */}
              <FormInput
                type="text"
                name="username"
                required={true}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
              />

              <FormInput
                type="email"
                name="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <FormInput
                type="text"
                name="matricNumber"
                required={true}
                onChange={(e) => setMatricNumber(e.target.value)}
                placeholder="Matric Number"
              />
             
              <FormSelect
                type="text"
                name="supervisor"
                required={true}
                onChange={(e) => setSupervisor(e.target.value)}
                placeholder="Supervisor"
              >
                <option disabled={true}>Choose Supervisor</option>
                <option value={201} >Benson James</option>
                <option value={202}>Adeleke Badmus</option>
                <option value={203}>Adebayo King</option>
               
          
             
               
              </FormSelect>

              <FormInput
                type="password"
                name="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>
                Have an account? <Accent to="/signin">Login</Accent>{" "}
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
        <Footer />
      </Container>
    </>
  );
};

export default SignUp;

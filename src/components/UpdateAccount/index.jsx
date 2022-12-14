import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../assets/Loader.gif";
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
} from "./UpdateElements";
import Footer from "../Footer";

const UpdateProfile = () => {
  const [id, setId] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [industrySupervisor, setIndustrySupervisor] = useState("");
  const [industry, setIndustry] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [allSupervisors, setAllSupervisors] = useState([]);
  const [industrySupervisors, setIndustrySupervisors] = useState([]);
  const [loading, setLoading] = useState("");

  
  let user = JSON.parse(sessionStorage.getItem("user"));

  
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/supervisor/get-all-supervisors")
      .then((response) => {
        let demSupes = response.data;



        let theSupervisors = demSupes.map((supervisor) => ({
          supervisorName: supervisor.fullName,
          supervisorId: supervisor.supervisorID,
          id: supervisor._id,
        }));

        setAllSupervisors(theSupervisors);
        setId(user._id)

        console.log(user._id)
        axios
          .get("http://localhost:5000/industrySupervisor/get-all-supervisors")
          .then((response) => {
            let demInds = response.data;

            let theInds = demInds.map((supervisor) => ({
              supervisorName: supervisor.fullName,
              supervisorId: supervisor.industrySupervisorID,
              id: supervisor._id,
            }));

            setIndustrySupervisors(theInds);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let userObject = {
    year,
    id,
    phone,
    supervisor,
    industry,
    industrySupervisor,
  };

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userObject)
    axios
      .post("http://localhost:5000/student/update-account", userObject)
      .then((res) => {
        let user = res.data.student;

        if (user) {
          toast.success("Update Succesful");
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        } else {
          toast.error("Try Again");
        }
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Try Again");

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
              <FormH1> Update Your Account</FormH1>
              {/* <FormLabel htmlFor="for">Full Name</FormLabel> */}
              <FormInput
                type="text"
                name="phone"
                required={true}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />
              {/* <FormLabel htmlFor="for">Username</FormLabel> */}
              <FormInput
                type="number"
                name="year"
                required={true}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
              />

              {/* <FormInput
                type="text"
                name="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              /> */}

              <FormSelect
                type="text"
                name="supervisor"
                required={true}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option disabled={true} selected>
                  Choose Industry
                </option>

                <option 
                  key={1}
                  value="Medicine"
                >
                  Medicine
                </option>
                <option 
                  key={2}
                  value="Banking"
                >
                  Banking & Finance
                </option>
                <option 
                  key={3}
                  value="Agriculture"
                >
                  Agriculture
                </option>

              </FormSelect>
             
              {loading ? (
                <img src={Loader} alt="loader" />
              ) : (
                <FormSelect
                  type="text"
                  name="supervisor"
                  required={true}
                  onChange={(e) => setSupervisor(e.target.value)}
                  placeholder="Supervisor"
                >
                  <option disabled={true} selected>
                    Choose Supervisor
                  </option>

                  {allSupervisors?.map((supervisor) => {
                    return (
                      <option
                        key={supervisor.id}
                        value={supervisor.supervisorName}
                      >
                        {supervisor.supervisorName}
                      </option>
                    );
                  })}
                </FormSelect>
              )}

              {loading ? (
                <img src={Loader} alt="loader" />
              ) : (
                <FormSelect
                  type="text"
                  name="supervisor"
                  required={true}
                  onChange={(e) => setIndustrySupervisor(e.target.value)}
                  placeholder="Supervisor"
                >
                  <option disabled={true} selected>
                    Choose IndustrySupervisor
                  </option>

                  {industrySupervisors?.map((supervisor) => {
                    return (
                      <option
                        key={supervisor.id}
                        value={supervisor.supervisorName}
                      >
                        {supervisor.supervisorName}
                      </option>
                    );
                  })}
                </FormSelect>
              )}

              {/* <FormInput
                type="password"
                name="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              /> */}
              <FormButton type="submit">Continue</FormButton>
              <Text>
                Go to Dashboard? <Accent to="/dashboard">Dashboard</Accent>{" "}
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
        <Footer />
      </Container>
    </>
  );
};

export default UpdateProfile;

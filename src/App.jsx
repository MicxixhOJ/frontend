import { useState, useEffect } from "react";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SLogin from "./pages/SupervisorLogin";
import ISlogin from "./pages/industrySupervisorLogin";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddReport from "./pages/dashboard/addReport";
import MyReports from "./pages/dashboard/MyReports";
import Report from "./pages/dashboard/report";
import "bootstrap/dist/css/bootstrap.min.css";
import Pending from "./pages/dashboard/PendingOnMe";
import PendingReport from "./pages/dashboard/pendingReport";
import SupervisorReports from "./components/dashboard/supervisorReports";
import UpdateAccount from "./pages/updateAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/signin" element={<Login />} exact={true} />
        <Route path="/signup" element={<Signup />} exact={true} />
        <Route path="/supervisor/signin" element={<SLogin />} exact={true} />
        <Route path="/industrySupervisor/signin" element={<ISlogin />}  exact={true} />
        

        <Route element={<ProtectedRoute/>}>
          <Route
            path="/supervisor/reports-to-me"
            element={<SupervisorReports />}
            exact={true}
          />
          <Route
            path="/supervisor/pending-reports"
            element={<Pending />}
            exact={true}
          />
          <Route
            path="/supervisor/pending-report/:id"
            element={<PendingReport />}
            exact={true}
          />
          <Route path="/update-account" element={<UpdateAccount />} exact={true} />
          <Route path="/dashboard" element={<Dashboard />} exact={true} />
          <Route path="/dashboard/add-report" element={<AddReport />} exact={true} />
          <Route path="/dashboard/my-reports" element={<MyReports />} exact={true} />
          <Route path="/dashboard/report/:id" element={<Report />} exact={true} />
        </Route>

        {/* <Route path="/dashboard" element={isauthenticated ? <Dashboard /> : <SigninPage />} exact /> */}
        {/* <Route path="/update-profile" element={<Profile />} exact /> */}
      </Routes>
    </Router>
  );
}

export default App;

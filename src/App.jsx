import { useState, useEffect } from "react";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SLogin from "./pages/SupervisorLogin";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddReport from "./pages/dashboard/addReport";
import MyReports from "./pages/dashboard/MyReports";
import Report from "./pages/dashboard/report";
import "bootstrap/dist/css/bootstrap.min.css";
import Pending from "./pages/dashboard/PendingOnMe";
import PendingReport from "./pages/dashboard/pendingReport";
import SupervisorReports from "./components/dashboard/supervisorReports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/supervisor/signin" element={<SLogin />} exact />

        <Route element={<ProtectedRoute/>}>
          <Route
            path="/supervisor/reports-to-me"
            element={<SupervisorReports />}
            exact
          />
          <Route
            path="/supervisor/pending-reports"
            element={<Pending />}
            exact
          />
          <Route
            path="/supervisor/pending-report/:id"
            element={<PendingReport />}
            exact
          />

          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/dashboard/add-report" element={<AddReport />} exact />
          <Route path="/dashboard/my-reports" element={<MyReports />} exact />
          <Route path="/dashboard/report/:id" element={<Report />} exact />
        </Route>

        {/* <Route path="/dashboard" element={isauthenticated ? <Dashboard /> : <SigninPage />} exact /> */}
        {/* <Route path="/update-profile" element={<Profile />} exact /> */}
      </Routes>
    </Router>
  );
}

export default App;

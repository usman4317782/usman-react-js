import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import "./App.css";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Dashboard from "./components/dashboard";
import UserProfile from "./components/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

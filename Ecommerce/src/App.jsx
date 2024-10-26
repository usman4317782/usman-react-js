import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import "./App.css";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Dashboard from "./components/dashboard";
import AddProducts from "./components/AddProducts";
import Profile from "./components/Profile";
function App() {
  return (
    <div id="page-top">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

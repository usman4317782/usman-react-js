import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      // Save logged-in user's data in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      // If user exists, redirect to dashboard
      navigate("/dashboard");
    } else {
      // If user doesn't exist or password is incorrect
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signin-container">
      <h1>SignIn</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">SignIn</button>
        <h4>
          Don't have an account? <Link to="/">SignUp</Link>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;

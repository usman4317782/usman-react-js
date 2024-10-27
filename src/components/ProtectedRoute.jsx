// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("loggedInUser");

  // If user is not logged in, redirect to SignIn page
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  // If user is logged in, render the children components (like Profile)
  return children;
}

export default ProtectedRoute;

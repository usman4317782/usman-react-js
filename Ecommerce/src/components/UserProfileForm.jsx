import React, { useState, useEffect } from "react";

function UserProfileForm({ userData, setUserData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    gender: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setUserData(formData);
    localStorage.setItem("loggedInUser", JSON.stringify(formData));

    // Update users array in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === formData.email ? formData : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Profile updated successfully!");
  };

  return (
    <div className="container">
      <h1 className="my-4">Update Profile</h1>
      <form onSubmit={handleUpdate} className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-control mb-3"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          readOnly
          className="form-control mb-3"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="form-control mb-3"
        />
        <div className="mb-3">
          <label className="d-block">Gender:</label>
          <label className="mr-3">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="mr-3">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
          <label className="mr-3">
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
}

export default UserProfileForm;

import React from "react";
import SideBar from "./SideBar";

function Profile() {
  return (
    <div id="wrapper">
      <SideBar />
      <div className="container mt-5">
        <h2>Update User Profile</h2>
        <form className="mt-4">
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Enter location"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="profileImage">Profile Image</label>
            <input
              type="file"
              className="form-control"
              id="profileImage"
              accept="image/*"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </form>
      </div>
      ;
    </div>
  );
}

export default Profile;

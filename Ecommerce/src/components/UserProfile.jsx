import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import AdminNavBar from "./AdminNavBar";
import UserProfileForm from "./UserProfileForm";

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserData(loggedInUser);
    }
  }, []);

  return (
    <div id="wrapper">
      <SideBar />
      <div className="container-fluid">
        <AdminNavBar />
        <UserProfileForm userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
}

export default UserProfile;

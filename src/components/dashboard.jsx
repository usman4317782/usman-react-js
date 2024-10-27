import React from "react";
import SideBar from "./SideBar";
import AdminNavBar from "./AdminNavBar";

import AdminPage from "./AdminPage";
import Footer from "./Footer";
import Profile from "./Profile";

function Dashboard() {
  return (
    <div>
      <div id="wrapper">
        <SideBar />

        <div className="container-fluid">
          <AdminNavBar />

          <AdminPage />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

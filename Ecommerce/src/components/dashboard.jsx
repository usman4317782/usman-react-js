import React from "react";
import SideBar from "./SideBar";
import AdminNavBar from "./AdminNavBar";
import AdminPageContent from "./AdminPageContent";
import PageWrapper from "./AdminPage2";

function Dashboard() {
  return (
    <div>
      <div id="wrapper">
        <SideBar />
        <div className="container-fluid">
          <AdminNavBar />
          <AdminPageContent />
          <PageWrapper />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import RecentPostsAdmin from "../dashboard/recentPostsAdmin/RecentPosts";
import "../dashboard/dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <RecentPostsAdmin />
      <div className="dashboard-container"></div>
    </div>
  );
};

export default Dashboard;

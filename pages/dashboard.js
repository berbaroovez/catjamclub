import React from "react";

import PlaylistTable from "../components/dashboard/PlaylistTable.js";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
const Dashboard = ({ children }) => (
  <DashboardSkeleton>
    <PlaylistTable />
  </DashboardSkeleton>
);
export default Dashboard;

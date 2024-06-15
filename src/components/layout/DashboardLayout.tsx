import { Outlet } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import DashboardExplorer from "../dashboard/dashboardNav/DashboardExplorer";
import DashboardNavBar from "../dashboard/dashboardNav/DashboardNavBar";
import DashboardSideBar from "../dashboard/DashboardSideBar";

export default function DashboardLayout() {
  return (
    <div
      className="grid grid-cols-12 grid-rows-12 "
      style={{ gridTemplateColumns: "repeat(20, minmax(0, 1fr))" }}
    >
      <DashboardSideBar />
      <DashboardNavBar />
      <DashboardExplorer />
      <Dashboard>
        <Outlet />
      </Dashboard>
    </div>
  );
}

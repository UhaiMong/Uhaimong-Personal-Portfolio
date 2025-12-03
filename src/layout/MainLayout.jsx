import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 bg-[var(--color-secondary-bg)] h-screen">
      <div className="col-span-11 overflow-y-auto">
        <Outlet />
      </div>
      <div className="col-span-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;

import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AnimatePresence, motion } from "framer-motion";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="grid grid-cols-12 bg-[var(--color-secondary-bg)] h-screen">
      <AnimatePresence mode="wait">
        <div className="col-span-11 overflow-y-auto">
          <Outlet key={location.pathname} />
        </div>
      </AnimatePresence>
      <div className="col-span-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;

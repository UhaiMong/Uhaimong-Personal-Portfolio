import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
        <Footer />
      </div>

      <Sidebar />
    </div>
  );
};

export default MainLayout;

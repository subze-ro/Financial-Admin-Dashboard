import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

const page = () => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px_minmax(0,1fr)] h-screen">
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default page;

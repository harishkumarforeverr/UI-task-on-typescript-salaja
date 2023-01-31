import React, { useState } from "react";
import Dashboard from "./Dashboard";

import "./index.scss";
import QuickOptimizationWidget from "./QuickOptimizationWidget/QuickOptimizationWidget";
function DashboardContainer() {
  const [view, setView] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  return (
    <>
      {view == "Dashboard" && <Dashboard setView={setView} />}
      {view == "QuickOptimizationWidget" && (
        <QuickOptimizationWidget setView={setView} />
      )}
    </>
  );
}

export default DashboardContainer;

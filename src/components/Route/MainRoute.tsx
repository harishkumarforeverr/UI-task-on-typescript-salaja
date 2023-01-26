import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import MPET from "../MPET/MPET";
import Nav from "../Nav/Nav";
import QuickTuning from "../QuickTuning/QuickTuning";
import Setting from "../Setting/Setting";
import { Box } from "@mui/material";
import DashboardConatiner from "../Dashboard";
import "./mainRoute.scss";
import PrivateRoute from "../../routes/PrivateRoute";
import DrawerSide from "../common/Drawer/Drawer";

const MainRoute = () => {
  return (
    <Box>
      <Routes>
        <Route
          path={"/"}
          element={
            <PrivateRoute
              component={() => (
                <div>
                  <DrawerSide>
                    <DashboardConatiner />
                  </DrawerSide>
                </div>
              )}
            />
          }
        />
      </Routes>
    </Box>
  );
};

export default MainRoute;
{
  /* <Box>
      <Header />
      <Nav />
     <div className="containersOfmainRouter">
     <Routes>
        <Route path="/" element={<DashboardConatiner />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/quick_tuning" element={<QuickTuning />} />
        <Route path="/mpet" element={<MPET />} />
      </Routes>
     </div>
    </Box> */
}

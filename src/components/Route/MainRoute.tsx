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
import PrivateRoute from "./routes/PrivateRoute";
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
        <Route path="/setting" element={<PrivateRoute component={Setting} />} />
        <Route
          path="/quick_tuning"
          element={<PrivateRoute component={QuickTuning} />}
        />
        <Route path="/mpet" element={<PrivateRoute component={MPET} />} />
      </Routes>
    </Box>
  );
};

export default MainRoute;

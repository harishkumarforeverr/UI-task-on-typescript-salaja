import React, { useState } from "react";
import DrawerSide from "./Drawer";
import {
  LeftOutlined,
  RightOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./index.scss";
function DashboardConatiner() {
  const [open, setOpen] = useState(false);
  const [faultsopen, setFaultsOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const handlesidebar = (type: string) => {
    setOpen(true);
    setDrawerType(type);
  };
  return (
    <div>
      <div className="appConatiner_DashboardConatiner">
        <DrawerSide
          open={open}
          setOpen={setOpen}
          drawerType={drawerType}
          setDrawerType={setDrawerType}
        />
        <div className="appConatiner_drawer">
          <div onClick={() => handlesidebar("i2c")} className="i2cControl">
            <RightOutlined className="rightIcon" />
            <span className="i2cLabel">
              <p>C2I</p>
            </span>
          </div>
        </div>
        <div className="appConatiner_faultsdrawer">
          <div
            onClick={() => handlesidebar("faults")}
            className="faultsControl"
          >
            <RightOutlined className="rightIcon" />
            <span className="faultsLabel">
              <p>Faults</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardConatiner;

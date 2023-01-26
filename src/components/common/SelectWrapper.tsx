import React from "react";

import { Button, Card } from "antd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./SelectWrapper.scss";
interface propsType {
  dotColor: string;
  deviceTitle: string;
  devDesc?: string;
  devSubDesc?: string;
  BtnSelectDeviceOpacity: string;
  handleChange?: (event: SelectChangeEvent) => void;
  handleTheMotor?: () => void;
}
function SelectWrapper({
  dotColor,
  deviceTitle,
  devDesc,
  BtnSelectDeviceOpacity,
  devSubDesc,
  handleChange,
  handleTheMotor,
}: propsType) {
  return (
    <Card className="conatinerCard" bordered={false} style={{ width: 300 }}>
      <div>
        <>
          <FormControl fullWidth>
            <InputLabel shrink={true} id="demo-simple-select-label">
              Select Device*
            </InputLabel>
            <Select
              notched={true}
              placeholder="Select Your Device"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Select Device*"
              onChange={handleChange}
            >
              <MenuItem value={10}>MCF83164EVM</MenuItem>
              <MenuItem value={20}>MCF8315EVM</MenuItem>
              <MenuItem value={30}>MCF8316EVM</MenuItem>
            </Select>
          </FormControl>
        </>
      </div>
      <div>
        <div className="deatiles">
          <span
            style={{
              background: dotColor,
            }}
            className="ColorContainer"
          ></span>
          <span className="numberText">{deviceTitle}</span>
        </div>
        <p className="GuiSupport">{devDesc}</p>
        <p
          className="GuiSupport"
          style={{
            fontSize: "12px",
            opacity: "0.8",
          }}
        >
          {devSubDesc}
        </p>
      </div>
      <Button
        style={{
          opacity: BtnSelectDeviceOpacity,
        }}
        className="lightRed btn"
        onClick={handleTheMotor}
      >
        Select Device
      </Button>
    </Card>
  );
}

export default SelectWrapper;

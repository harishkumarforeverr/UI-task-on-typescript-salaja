import React, { useState } from "react";
import { Card, DrawerProps, Input, RadioChangeEvent } from "antd";
import { Button, Drawer, Switch, Collapse, Slider } from "antd";
import "./Drawer.scss";
import type { SliderMarks } from "antd/es/slider";
import {
  LeftOutlined,
  RightOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Select, Tabs } from "antd";
import {
  FormControl,
  InputLabel,
  MenuItem,
  // Select,
  SelectChangeEvent,
} from "@mui/material";

interface propsType {
  open: boolean;
  setOpen: (arg: boolean) => void;
  setDrawerType: (arg: string) => void;
  drawerType: string;
}

const { Panel } = Collapse;

const marks: SliderMarks = {
  0: "0",
  25: "25",
  50: "50",
  100: "100",
  // 100: {
  //   style: {
  //     color: "#f50",
  //   },
  //   label: <strong>100°C</strong>,
  // },
};
const motorObj = [
  {
    title: "Algorithm State",
    subtitle: "MOTOR IDLE",
  },
  {
    title: "% Reference for Speed Loop",
    subtitle: "0.00",
  },
  {
    title: "% Voltage Magnitude",
    subtitle: "0.00",
  },
  {
    title: "% VM Voltage",
    subtitle: "0.00",
  },
  {
    title: "Motor Resistance",
    subtitle: "0.00",
  },
  {
    title: "Motor Inductance",
    subtitle: "0.00",
  },
  {
    title: "Motor BEMF Constant",
    subtitle: "0.00",
  },
  {
    title: "Estimated Rotor Angle",
    subtitle: "0.00",
  },
  {
    title: "CSA Gain",
    subtitle: "0.00",
  },
  {
    title: "id Ref Closed Loop",
    subtitle: "0.00",
  },
  {
    title: "iq Ref Closed Loop",
    subtitle: "0.00",
  },
  {
    title: "Vd",
    subtitle: "0.00",
  },
  {
    title: "Vq",
    subtitle: "0.00",
  },
  {
    title: "Bus Current",
    subtitle: "0.00",
  },
  {
    title: "ISD State",
    subtitle: "0.00",
  },
  {
    title: "IPD State",
    subtitle: "0.00",
  },
  {
    title: "ISD Speed",
    subtitle: "0.00",
  },
  {
    title: "IPD Angle",
    subtitle: "0.00",
  },
];
const DrawerSide = (props: any) => {
  const [open, setOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const ControllerFaults = () => {
    return (
      <div className="tabs">
        <h1>
          Gate Drive Faults <div className="smallCircle redColor "></div>
        </h1>
      </div>
    );
  };
  const GateDrive = () => {
    return (
      <div className="tabs">
        <h1>
          Controller Faults <div className="smallCircle greenColor  "></div>
        </h1>
      </div>
    );
  };
  const containerFaultsData = [
    {
      title: "Buck Fault",
      subtitle: [
        {
          title: "Buck Regulator Overcurrent",
        },

        {
          title: "Buck Regulator Undervoltage",
        },
      ],
    },
    {
      title: "Overcurrent Protection",
      subtitle: [],
    },
    {
      title: "Supply Power On Reset",
      subtitle: [],
    },
  ];
  const ControlFaultsContainer = () => {
    return (
      <div className="ControlFaultsContainer">
        <div className="btnConatiner">
          <Button className="btn">Clear Faults</Button>
          <Button className="btn">Configure</Button>
        </div>
        <div className="ControlFaultsContainer_container">
          {containerFaultsData.map((obj) => {
            return (
              <>
                <div className="titleConatiner">
                  <div className="bigCircle"></div>
                  <div className="bigCircle_title"> {obj.title}</div>
                </div>
                <div className="subTitleConatiner_parent">
                  {obj.subtitle.map((subObj) => {
                    return (
                      <div className="subTitleConatiner">
                        <div className="bigCircle"></div>
                        <div className="bigCircle_title"> {subObj.title}</div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  };
  const items = [
    {
      key: "1",
      label: <ControllerFaults />,
      children: <ControlFaultsContainer />,
    },
    {
      key: "2",
      label: <GateDrive />,
      children: `Content of Tab Pane 2`,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          flexGrow: 1,
        }}
      >
        {props.children}
      </div>
      <div>
        {/* <div>
          
        </div> */}
        <div
          style={{
            marginLeft: "auto",
          }}
          className="drawerConatiner_Parent"
        >
          <div className="appConatiner_DashboardConatiner">
            {/* <DrawerSide
              open={open}
              setOpen={setOpen}
              drawerType={drawerType}
              setDrawerType={setDrawerType}
             
            /> */}
            <div
              className={
                open ? "appConatiner_drawer_expand" : "appConatiner_drawer"
              }
            >
              <div
                onClick={() => {
                  if (drawerType == "i2c" && open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                  setDrawerType("i2c");
                }}
                className="i2cControl"
              >
                {drawerType == "i2c" ? (
                  <RightOutlined className="rightIcon" />
                ) : (
                  <LeftOutlined className="rightIcon" />
                )}
                <span className="i2cLabel">
                  <p>C2I</p>
                </span>
              </div>
            </div>
            <div
              className={
                open
                  ? "appConatiner_drawer_expand faults_collapse"
                  : "appConatiner_drawer faults_expanded"
              }
            >
              <div
                onClick={() => {
                  // setOpen(true);
                  if (drawerType == "faults" && open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                  setDrawerType("faults");
                }}
                className="faultsControl"
              >
                {drawerType == "faults" ? (
                  <RightOutlined className="rightIcon" />
                ) : (
                  <LeftOutlined className="rightIcon" />
                )}
                <span className="faultsLabel">
                  <p>Faults</p>
                  {drawerType == "faults" && open ? (
                    <div className="smallCircle redColor  expandedGreen"></div>
                  ) : (
                    <div className="smallCircle greenColor expandedGreen"></div>
                  )}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="Drawer_appConatiner_DashboardConatiner">
            <div className="appConatiner_drawer">
              <div
                onClick={() => {
                  if (drawerType == "i2c" && open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                  setDrawerType("i2c");
                }}
                className="i2cControl"
              >
                {drawerType == "i2c" ? (
                  <RightOutlined className="rightIcon" />
                ) : (
                  <LeftOutlined className="rightIcon" />
                )}

                <span className="i2cLabel">
                  <p>C2I </p>
                </span>
              </div>
            </div>
            <div className="appConatiner_faultsdrawer">
              <div
                onClick={() => {
                  // setOpen(true);
                  if (drawerType == "faults" && open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                  setDrawerType("faults");
                }}
                className="faultsControl"
              >
                {drawerType == "faults" ? (
                  <RightOutlined className="rightIcon" />
                ) : (
                  <LeftOutlined className="rightIcon" />
                )}

                <span className="faultsLabel">
                  <p>Faults</p>
                </span>
              </div>
            </div>
          </div> */}
          {open && (
            <div className="drawerBody">
              {drawerType == "i2c" && (
                <>
                  <div>
                    {" "}
                    <div>
                      <div className="drawerContainer">
                        <>
                          <Collapse
                            defaultActiveKey={["1"]}
                            expandIconPosition="end"
                            onChange={onChange}
                          >
                            <Panel header="I2C CONTROLS" key="1">
                              <div>
                                <div className="drawerContainer_label">
                                  <p>Speed Control via I2C</p>
                                  <div>
                                    {" "}
                                    <Switch size="small" defaultChecked />{" "}
                                    <span className="Enabled">Enabled </span>
                                  </div>
                                </div>
                                <div className="drawerContainer_address">
                                  <div>
                                    <p>I2C Target Address</p>
                                    <Input
                                      placeholder="0x2"
                                      className="inputTag"
                                    />
                                  </div>
                                  <div>
                                    <Button className="btn">
                                      Find Address
                                    </Button>
                                  </div>
                                </div>
                                <div className="drawerContainer_precentage">
                                  <p>I2C Speed Command Percentage</p>
                                  <div>
                                    <Slider
                                      marks={marks}
                                      step={null}
                                      defaultValue={37}
                                    />
                                  </div>
                                </div>
                                <div></div>
                              </div>
                            </Panel>
                          </Collapse>
                        </>
                      </div>
                      <div className="motorStatusConatiner">
                        <h1>MOTOR STATUS</h1>
                        <p>Algorithm Variable Status Select</p>
                        <div className="selectMotor">
                          <Select
                            className="selectMotor"
                            placeholder="Algorithm Variable Status Select"
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                        <div>
                          <div className="motorCardConatiner">
                            {motorObj.map((moto) => {
                              return (
                                <div className="motorCards">
                                  <p> {moto.title}</p>
                                  <h1>{moto.subtitle}</h1>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </>
              )}
              {drawerType == "faults" && (
                <>
                  <div className="faltsDrawerConatiner">
                    <div>
                      <Tabs
                        defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrawerSide;

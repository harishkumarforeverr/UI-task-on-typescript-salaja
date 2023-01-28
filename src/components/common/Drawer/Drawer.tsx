import React, { useState } from "react";
import { Card, Checkbox, Modal, Input, RadioChangeEvent } from "antd";
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
import { DrawerImages } from "./Images";

 
const { Panel } = Collapse;

const marks: SliderMarks = {
  0: "0",
  25: "25",
  50: "50",
  100: "100", 
};
const initialmotorObj = [
  {
    title: "Algorithm State",
    active: true,
    subtitle: "MOTOR IDLE",
  },
  {
    title: "% Reference for Speed Loop",
    active: true,
    subtitle: "0.00",
  },
  {
    title: "% Voltage Magnitude",
    active: true,
    subtitle: "0.00",
  },
  {
    title: "% VM Voltage",
    active: true,
    subtitle: "0.00",
  },
  {
    title: "Motor Resistance",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "Motor Inductance",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "Motor BEMF Constant",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "Estimated Rotor Angle",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "CSA Gain",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "id Ref Closed Loop",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "iq Ref Closed Loop",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "Vd",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "Vq",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "Bus Current",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "ISD State",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "IPD State",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "ISD Speed",
    active: false,
    subtitle: "0.00",
  },
  {
    title: "IPD Angle",
    active: false,
    subtitle: "0.00",
  },
];

const ConfigureModel=()=>{
  return (
    <div className="ConfigureModel">
      <div className="ConfigureModel_header">
        <h1>FAULT CONFIGURATION</h1>
      </div>
    </div>

  )
}
const DrawerSide = (props: any) => {
  const [showConfigModel,setshowConfigModel]=useState(true)
  const [motorObj,setmotorObj]=useState(initialmotorObj)
  const [open, setOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const closeTheConfigModel=()=>{
    setshowConfigModel(false)
  }
  const openConfigModal=()=>{
    setshowConfigModel(true)
  }
  const GateDrive = () => {
    return (
      <div className="tabs">
        <h1>
          Gate Drive Faults <div className="smallCircle redColor "></div>
        </h1>
      </div>
    );
  };
  const ControllerFaults = () => {
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
  const GateDriveContainer = () => {
    return (
      <div className="ControlFaultsContainer">
        <div className="btnConatiner">
          <Button className="btn">Clear Faults</Button>
          <Button className="btn" onClick={openConfigModal}>Configure</Button>
        </div>
        <div className="ControlFaultsContainer_container">
          {containerFaultsData.map((obj) => {
            return (
              <>
                <div className="titleConatiner">
                  {/* <div className="bigCircle"></div> */}
                  <img
                    className="redBubbleCircle"
                    src={DrawerImages.redBubble}
                  />
                  <div className="bigCircle_title"> {obj.title}</div>
                </div>
                <div className="subTitleConatiner_parent">
                  {obj.subtitle.map((subObj) => {
                    return (
                      <div className="subTitleConatiner">
                        {/* <div className="bigCircle"></div> */}
                        <img
                          className="redBubbleCircle"
                          src={DrawerImages.redBubble}
                        />
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
  const ControlFaultsContainer = () => {
    return (
      <div className="ControlFaultsContainer">
        <div className="btnConatiner">
          <Button className="btn">Clear Faults</Button>
          <Button className="btn" onClick={openConfigModal}>Configure</Button>
        </div>
        <div className="ControlFaultsContainer_container">
          {containerFaultsData.map((obj) => {
            return (
              <>
                <div className="titleConatiner">
                  {/* <div className="bigCircle"></div> */}
                  <img
                    className="redBubbleCircle"
                    src={DrawerImages.redBubble}
                  />
                  <div className="bigCircle_title"> {obj.title}</div>
                </div>
                <div className="subTitleConatiner_parent">
                  {obj.subtitle.map((subObj) => {
                    return (
                      <div className="subTitleConatiner">
                        {/* <div className="bigCircle"></div> */}
                        <img
                          className="redBubbleCircle"
                          src={DrawerImages.redBubble}
                        />
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
      label: <GateDrive />,
      children: <GateDriveContainer />,
    },
    // ControllerFaults
    {
      key: "2",
      label: <ControllerFaults />,
      children: <ControlFaultsContainer />,
    },
  ];
  const handeTheCheckBoxMotor = (index:number) => {
    const newData = motorObj.map((obj, i) => {
      if (i == index) {
        return {
          ...obj,
          active: !obj.active,
        };
      } else {
        return obj;
      }
    });
    setmotorObj(newData)
  };
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
              style={
                {
                  // opacity: open && drawerType == "i2c" ? 1 : 0.5,
                }
              }
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
                  <p
                    className={
                      open && drawerType === "i2c"
                        ? "enabledTheDrawerLabel"
                        : ""
                    }
                  >
                    C2I
                  </p>
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
                style={
                  {
                    // opacity: open && drawerType == "faults" ? 1 : 0.5,
                  }
                }
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
                  <p
                    className={
                      open && drawerType === "faults"
                        ? "enabledTheDrawerLabel"
                        : ""
                    }
                  >
                    Faults
                  </p>
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
                            dropdownRender={() => {
                              const jsx = motorObj.map((obj, index) => {
                                return (
                                  <div
                                    style={{
                                      width: "100%",
                                      margin: "10px 0",
                                    }}
                                  >
                                    <Checkbox
                                      onClick={() => {
                                        handeTheCheckBoxMotor(index);
                                      }}
                                      checked={obj.active}
                                    />{" "}
                                    {obj.title}
                                  </div>
                                );
                              });
                              return (
                                <div
                                  style={{
                                    height: "14rem",
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                  }}
                                >
                                  {jsx}
                                </div>
                              );
                            }}
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
                            {motorObj.filter(({active})=>active).map((moto) => {
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
      <Modal 

      
style={{ top: 20 }}
          visible={showConfigModel}
          onCancel={closeTheConfigModel}
          className="configable_modal"
          centered
        >
           <ConfigureModel />
        </Modal>
    </div>
  );
};

export default DrawerSide;

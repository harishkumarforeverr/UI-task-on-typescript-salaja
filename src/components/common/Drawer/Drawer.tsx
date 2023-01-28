import React, { useState } from "react";
import { Card, Checkbox, Modal, Input } from "antd";
import { Button, Switch, Collapse, Slider } from "antd";
import "./Drawer.scss";
import type { SliderMarks } from "antd/es/slider";
import {
  LeftOutlined,
  RightOutlined, 
  CloseOutlined,
} from "@ant-design/icons";
import { Select, Tabs } from "antd";
 
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
const configObj2 = [
  {
    type: "select",
    title: "Overcurrent Level Setting [OCP_LVL]",
    disabled: false,
    option: [
      {
        value: "Overcurrent Level Setting [OCP_LVL]",
        label: "Overcurrent Level Setting [OCP_LVL]",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title: "Hardware Lock detection current limit (A) [HW_LOCK_ILIMIT]",
    disabled: false,
    option: [
      {
        value: "0.125 A",
        label: "0.125 A",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title: "Lock detection current threshold (A) [LOCK_ILIMIT]",
    disabled: false,
    option: [
      {
        value: "0.125 A",
        label: "0.125 A",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title: "Lock detection retry time [LCK_RETRY]",
    disabled: false,
    option: [
      {
        value: "100 ms",
        label: "100 ms",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title: "Abnormal Speed Lock Threshold [LOCK_ABN_SPEED]",
    disabled: true,
    option: [
      {
        value: "130%",
        label: "130%",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title:
      "Abnormal BEMF Lock Threshold (% of expected BEMF) [ABNORMAL_BEMF_THR]",
    disabled: true,
    option: [
      {
        value: "10%",
        label: "10%",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title: "No Motor Lock Threshold (A) [NO_MTR_THR]",
    disabled: true,
    option: [
      {
        value: "0.05 A",
        label: "0.05 A",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "radio",
    title: "Undervoltage fault recovery mode [MIN_VM_MODE]",
    subTitle: "Latch on Undervoltage",
    disabled: false,
  },
];
const configObj3 = [
  {
    type: "select",
    title: "OCP Fault Options [OCP_MODE]",
    disabled: false,
    option: [
      {
        value: "Overcurrent causes a latched fault",
        label: "Overcurrent causes a latched fault",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title: "Hardware Lock detection current limit mode [HW_LOCK_ILIMIT_MODE]",
    disabled: false,
    option: [
      {
        value:
          "Hardware Lock detection current limit causes latched fault; nfault active; Gate driver is tristated",
        label:
          "Hardware Lock detection current limit causes latched fault; nfault active; Gate driver is tristated",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title: "Lock detection current limit mode [LOCK_ILIMIT_MODE]",
    disabled: false,
    option: [
      {
        value:
          "Ilimit lock detection causes latched fault; nfault active; Gate driver is tristated",
        label:
          "Ilimit lock detection causes latched fault; nfault active; Gate driver is tristated",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "text",
    title: "Calculated Abnormal Speed Lock Threshold (Hz)",
    subTitle: "0.000",
    disabled: false,
  },
  {
    type: "text",
    title: "Calculated Abnormal BEMF Lock Threshold (V)",
    subTitle: "TODO",
    disabled: false,
  },
  
  {
    type: "select",
    title: "Motor Lock Mode [MTR_LCK_MODE]",
    disabled: false,
    option: [
      {
        value:
          "Motor lock detection causes latched fault; nfault active; Gate driver is tristated",
        label:
          "Motor lock detection causes latched fault; nfault active; Gate driver is tristated",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "radio",
    title: "IPD Timeout Fault [IPD_TIMEOUT_FAULT_EN]",
    subTitle: "Disabled",
    disabled: false,
  },
  {
    type: "radio",
    title: "Overvoltage fault recovery mode [MAX_VM_MODE]",
    subTitle: "Latch on Overvoltage",
    disabled: false,
  },
];
const configObj1 = [
  {
    type: "radio",
    title: "Over Temperature Warning [OTW_REP]",
    subTitle: "Over temperature reporting on nFAULT is disabled",
    disabled: false,
  },
  {
    type: "select",
    title: "OCP retry time [TRETRY]",
    disabled: false,
    option: [
      {
        value: "OCP retry time is 5 ms",
        label: "OCP retry time is 5 ms",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title:
      "Hardware Lock Detection current limit deglitch time [HW_LOCK_ILIMIT_DEG]",
    disabled: false,
    option: [
      {
        value: "No Deglitch",
        label: "No Deglitch",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "select",
    title: "Lock Detection current limit deglitch time [LOCK_ILIMIT_DEG]",
    disabled: false,
    option: [
      {
        value: "0.05 ms",
        label: "0.05 ms",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
  {
    type: "radio",
    title: "Lock 1: Abnormal Speed [LOCK1_EN]",
    subTitle: "Disabled",
    disabled: false,
  },
  {
    type: "radio",
    title: "Lock 1: Abnormal Speed [LOCK2_EN]",
    subTitle: "Disabled",
    disabled: false,
  },
  {
    type: "radio",
    title: "Lock 1: No Motor[LOCK3_EN]",
    subTitle: "Disabled",
    disabled: false,
  },
  {
    type: "radio",
    title: "IPD Frequency Fault [IPD_FREQ_FAULT_EN]",
    subTitle: "Disabled",
    disabled: false,
  },
  {
    type: "select",
    title: "Automatic retry attempts [AUTO_RETRY_TIMES]",
    disabled: false,
    option: [
      {
        value: "NO Limit",
        label: "NO Limit",
      },
      {
        value: "something",
        label: "something",
      },
    ],
  },
];
const ConfigSwitch = ({ obj }: { obj: any }) => {
  return (
    <div className="switchConatin">
      <p> {obj.title}</p>
      <div className="switch_value">
        <Switch />
        <p> {obj.subTitle}</p>
      </div>
    </div>
  );
};
const ConfigSelect = ({ obj }: { obj: any }) => {
  return (
    <div className="configSelect">
      <p>{obj.title}</p>
      <Select
        disabled={obj.disabled}
        defaultValue={obj?.option[0].value}
        className="antSelectselector"
        options={obj.option?.map(
          ({ value, label }: { value: any; label: any }) => {
            return {
              value: "OCP retry time is 5 ms",
              label: "OCP retry time is 5 ms",
            };
          }
        )}
      />
    </div>
  );
};
const ConfigText = ({ obj }: { obj: any }) => { 
  return (
    <div className="configSelect">
      <p>{obj.title}</p>
      <p>{obj.subTitle}</p>
      
    </div>
  );
};
const ConfigureModel = () => {
  return (
    <div className="ConfigureModel">
      <div className="ConfigureModel_header">
        <h1>FAULT CONFIGURATION</h1>
        <h1>
          <CloseOutlined className="closeIcon" />
        </h1>
      </div>
      <div className="configContainer">
        <div>
          {configObj1.map((obj) => {
            if (obj.type == "radio") {
              return <ConfigSwitch obj={obj} />;
            }
            if (obj.type == "select" && obj.option) {
              return <ConfigSelect obj={obj} />;
            }
          })}
        </div>
        <div>
          {configObj2.map((obj) => {
            if (obj.type == "radio") {
              return <ConfigSwitch obj={obj} />;
            }
            if (obj.type == "select" && obj.option) {
              return <ConfigSelect obj={obj} />;
            }
          })}
        </div>
        <div>
          {configObj3.map((obj) => {
            if (obj.type == "radio") {
              return <ConfigSwitch obj={obj} />;
            }
            if (obj.type == "select" && obj.option) {
              return <ConfigSelect obj={obj} />;
            } 
            if (obj.type == "text") {
             
              return <ConfigText obj={obj} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};
const DrawerSide = (props: any) => {
  const [showConfigModel, setshowConfigModel] = useState(false);
  const [motorObj, setmotorObj] = useState(initialmotorObj);
  const [open, setOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const closeTheConfigModel = () => {
    setshowConfigModel(false);
  };
  const openConfigModal = () => {
    setshowConfigModel(true);
  };
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
          <Button className="btn" onClick={openConfigModal}>
            Configure
          </Button>
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
          <Button className="btn" onClick={openConfigModal}>
            Configure
          </Button>
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
  const handeTheCheckBoxMotor = (index: number) => {
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
    setmotorObj(newData);
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
                            {motorObj
                              .filter(({ active }) => active)
                              .map((moto) => {
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
        style={{ top: 40 }}
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

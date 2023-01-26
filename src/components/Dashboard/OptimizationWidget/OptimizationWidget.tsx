import React from "react";
import {
  UserOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  ExperimentOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import "./OptimizationWidget.scss";
import { Button, Card, Select } from "antd";
import SelectWrapper from "../../common/SelectWrapper";
function OptimizationWidget() {
  const userInfoObj = [
    {
      image: require("../Assests/capture1.PNG"),
      title: "Hardware Setup",
      desc: "configure harware and perform and GUI and comminucation checkup",
    },
    {
      image: require("../Assests/Capture2.PNG"),
      title: "software Setup",
      desc: "Samart harware and perform ",
    },
  ];
  const InfoObj = [
    {
      image: require("../Assests/Capture3.PNG"),
      title: "Edge Setup",
      desc: "configure harware and perform and GUI and comminucation checkup",
    },
    {
      image: require("../Assests/Capture4.PNG"),
      title: "Popup Setup",
      desc: "Samart harware and perform ",
    },
    {
      image: require("../Assests/Capture5.PNG"),
      title: "Iron Setup",
      desc: "configure harware and perform and GUI and comminucation checkup",
    },
    {
      image: require("../Assests/Capture6.PNG"),
      title: "Apple Setup",
      desc: "Samart harware and perform ",
    },
  ];
  return (
    <div className="OptimizationWidget">
      <div className="Conatiner2sIconsTitle">
        <div>
          <div>
            <SelectWrapper
              BtnSelectDeviceOpacity="0.5"
              dotColor="#cc0000"
              deviceTitle="MCF8316EVM"
              devDesc="This GUI supports MCF8316EVM"
              devSubDesc="Correct device detected : MCF8316A"
            />
            {/* <Card
              className="boxshadow conatinerCard"
              bordered={false}
              style={{ width: 300 }}
            >
              <div>
                <h1 className="selectedDevicesTitle">
                  select devices{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </h1>
                <Select
                  onChange={(e) => {
                    // setMotor(e);
                  }}
                  style={{
                    width: "100%",
                  }}
                  placeholder="select"
                  options={[
                    {
                      value: "LOU8316E",
                      label: "LOU8316",
                    },
                    {
                      value: "IUT8316EVM",
                      label: "IUT8316EVM",
                    },
                    {
                      value: "MCF8316EVM",
                      label: "MCF8316EVM",
                    },
                  ]}
                />
              </div>
              <div>
                <div className="deatiles">
                  <span className="redColorContainer"></span>
                  <span className="numberText">MCF8316EVM</span>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  EVM Connected
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    opacity: "0.5",
                  }}
                >
                  Correct device detected : MCF8316A
                </p>
              </div>
              <Button
                style={{
                  opacity: "0.5",
                }}
                className="lightRed btn"
              >
                Select Device
              </Button>
            </Card> */}
            {/* <div style={{}} className="videoIcon_container">
          <img className="videoIcon" src={videoIcons} />
        </div> */}
          </div>
          <div>
            {/* <img className="videoIcon" style={{}} src={videoIcons} /> */}
          </div>
        </div>
        <div>
          <h2 className="gettingStartTitle">Getting started</h2>
          <div className="Gettingstarted">
            {userInfoObj.map((obj) => {
              return (
                <Card
                  className="boxshadow hardware"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img src={obj.image} />
                    </div>
                    <div>
                      <h3>{obj.title}</h3>
                      <p>{obj.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="gettingStartTitle">Optimization Widget</h2>
          <div className="optizmationWidget">
            {InfoObj.map((obj) => {
              return (
                <Card
                  className="boxshadow hardware"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img src={obj.image} />
                    </div>
                    <div>
                      <h3>{obj.title}</h3>
                      <p>{obj.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptimizationWidget;

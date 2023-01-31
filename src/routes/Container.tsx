import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

import "./Container.scss";
 
const Container = (props: any) => {
  return (
    <div
      style={
        {
          
        }
      }
    >
      <div className="head">
        {" "}
        <Header />
      </div>
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "6rem 1fr",
          overflow: "hidden",
        }}
        className="container"
      >
        <div className="sidebar">
          {" "}
          <Nav />
        </div>
        <div className="body_container">
          <div className="body_contain">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;

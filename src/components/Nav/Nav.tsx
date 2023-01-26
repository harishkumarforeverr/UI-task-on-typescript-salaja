import { Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [selectedButton, setSelectedButton] = useState("/");
  const onHandleSelect = (event: any, value: any) => {
    setSelectedButton(value);
  };
  return (
    <>
      <Drawer variant="permanent" anchor="left" className="MuiDrawer-paper ">
        <Toolbar />
        <List>
          <ListItem
            className="sidenav_listitem"
            component={NavLink}
            onClick={(e) => onHandleSelect(e, "/")}
            to="/"
          >
            <Box
              className={`list_box ${
                selectedButton === "/" && "selected-Tab-bgColor"
              }  `}
            >
              <img
                src={`${
                  selectedButton === "/"
                    ? "Images/home-Selected.svg"
                    : "Images/home-Unselected.svg"
                }`}
                style={{ fill: "red!important" }}
                alt="dd"
              />
            </Box>
            <Typography
              className={`menulist_typography ${
                selectedButton === "/" && "selected-text-color"
              } `}
            >
              Home
            </Typography>
          </ListItem>
          <ListItem
            className="sidenav_listitem"
            component={NavLink}
            onClick={(e) => onHandleSelect(e, "/setting")}
            to="/setting"
          >
            <Box
              className={`list_box ${
                selectedButton === "/setting" && "selected-Tab-bgColor"
              }  `}
            >
              <img
                src={`${
                  selectedButton === "/setting"
                    ? "Images/setting-Unselected.svg"
                    : "Images/setting-Unselected.svg"
                }`}
                alt="dd"
              />
            </Box>
            <Typography
              className={`menulist_typography ${
                selectedButton === "/setting" && "selected-text-color"
              } `}
            >
              Setting
            </Typography>
          </ListItem>
          <ListItem
            className="sidenav_listitem"
            component={NavLink}
            onClick={(e) => onHandleSelect(e, "/quick_tuning")}
            to="/quick_tuning"
          >
            <Box
              className={`list_box ${
                selectedButton === "/quick_tuning" && "selected-Tab-bgColor"
              }  `}
            >
              <img
                src={`${
                  selectedButton === "/quick_tuning"
                    ? "Images/quick-Unselected.svg"
                    : "Images/quick-Unselected.svg"
                }`}
                alt="dd"
              />
            </Box>
            <Typography
              className={`menulist_typography_quickTuning ${
                selectedButton === "/quick_tuning" && "selected-text-color"
              } `}
            >
              Quick Tuning
            </Typography>
          </ListItem>
          <ListItem
            className="sidenav_listitem sidenav_listitem_mpet"
            component={NavLink}
            onClick={(e) => onHandleSelect(e, "/mpet")}
            to="/mpet"
          >
            <Box
              className={`list_box ${
                selectedButton === "/mpet" && "selected-Tab-bgColor"
              }  `}
            >
              <img
                src={`${
                  selectedButton === "/mpet"
                    ? "Images/mpet-Unselected.svg"
                    : "Images/mpet-Unselected.svg"
                }`}
                alt="dd"
              />
            </Box>
            <Typography
              className={`menulist_typography ${
                selectedButton === "/mpet" && "selected-text-color"
              } `}
            >
              MPET
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Nav;

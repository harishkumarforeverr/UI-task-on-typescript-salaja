import { Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import selectedHome from "../../images/Nav/home-Selected.svg";
import unSelectedHome from "../../images/Nav/home-Unselected.svg";
import mpetUnselected from "../../images/Nav/mpet-Unselected.svg";
import quickUnselected from "../../images/Nav/quick-Unselected.svg";
import settingUnselected from "../../images/Nav/setting-Unselected.svg";
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
                    ? `${selectedHome}`
                    : `${unSelectedHome}`
                }`}
                style={{ fill: "red!important" }}
                alt="HomeIcon"
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
                    ? `${settingUnselected}`
                    : `${settingUnselected}`
                }`}
                alt="SettingIcon"
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
                    ? `${quickUnselected}`
                    : `${quickUnselected}`
                }`}
                alt="QuickTuningIcon"
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
                    ? `${mpetUnselected}`
                    : `${mpetUnselected}`
                }`}
                alt="MPETIcon"
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

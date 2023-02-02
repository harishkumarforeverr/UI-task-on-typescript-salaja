import { AppBar, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [checked, setChecked] = useState("");
  return (
    <>
      <AppBar className="header_appbar">
        <Toolbar className="header_toolbar">
          <Typography
            data-testid="fileid"
            className="header_typography"
            onClick={() => setChecked("File")}
          >
            File
          </Typography>
          <Typography
            data-testid="optionid"
            className="header_typography header_options_margin  "
            onClick={() => setChecked("Options")}
          >
            Options
          </Typography>
          <Typography
            className="header_typography header_options_margin  "
            onClick={() => setChecked("Tools")}
            data-testid="toolsid"
          >
            Tools
          </Typography>
          <Typography
            className="header_typography header_options_margin  "
            data-testid="helpid"
            onClick={() => setChecked("Help")}
          >
            Help
          </Typography>

          {/* Only for Testing  */}
          {/* <Typography
            className="header_typography header_options_margin  "
            data-testid="result"
          >
            {checked}
          </Typography> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Header.css";
const Header = () => {
  return (
    <>
      <AppBar className="header_appbar">
        <Toolbar className="header_toolbar">
          <Typography className="header_typography">File</Typography>
          <Typography className="header_typography header_options_margin  ">
            Options
          </Typography>
          <Typography className="header_typography header_options_margin  ">
            Tools
          </Typography>
          <Typography className="header_typography header_options_margin  ">
            Help
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

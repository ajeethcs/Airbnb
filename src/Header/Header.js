import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="https://cdn.worldvectorlogo.com/logos/airbnb-1.svg"
        alt="Airbnb"
      />

      <div className="header_center">
        <input type="text" placeholder="Start your search" />
        <SearchOutlinedIcon />
      </div>

      <div className="header_right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;

import { Button } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  const [showSearch, setshowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        <Button
          onClick={() => {
            setshowSearch(!showSearch);
          }}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button id="exploreButton" variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;

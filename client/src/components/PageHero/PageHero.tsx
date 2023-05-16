import React from "react";
import "./PageHero.css";
import SouthIcon from "@mui/icons-material/South";

function PageHero() {
  return (
    <div className="page-hero-container">
      <div className="page-hero-content">
        <h1>
          Improving humanity, one <i>imperfection</i> at a time
        </h1>
      </div>
      <div id="down-arrow">
        <span>
          <SouthIcon />
        </span>
      </div>
    </div>
  );
}

export default PageHero;

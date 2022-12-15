import { Button } from "@mui/material";
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__inner">
          <div className="banner__description">
            <h1>The Best Kindergarten School For Your child</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <div className="banner__btns">
                <Button>Learn More</Button>
                <Button>Our Classes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Teacher.css";

function Teacher() {
  return (
    <div className="teacher">
      <div className="container">
        <div className="teacher__row">
          <div className="teacher__col">
            <div className="teacher__img">
              <img src="../images/call-to-action.jpg" alt="" />
            </div>
          </div>
          <div className="teacher__col">
            <div className="teacher__details">
              <h1>Become A Teacher</h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              <Button>
                <span>Get Started Now</span>
                <ArrowForwardIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;

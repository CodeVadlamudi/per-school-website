import { Avatar, Button } from "@mui/material";
import React from "react";
import "./Activities.css";

function Activities() {
  return (
    <div className="activities">
      <div className="container">
        <div className="activities__row">
          <div className="activities__col">
            <div className="activities__details">
              <h1>Learn More About Our Work And Our Cultural Activities</h1>
              <div className="activities__title">
                <Avatar src="../images/user.jpg" alt="" />
                <div className="activities__text">
                  <h4>John Doe</h4>
                  <span>CEO & Founder</span>
                </div>
              </div>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore
                duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor
                est vero nonumy magna.
              </p>
              <Button>Read More</Button>
            </div>
          </div>
          <div className="activities__col">
            <div className="activities__imgs">
              <img src="../images/about-1.jpg" alt="" />
              <img src="../images/about-2.jpg" alt="" />
              <img src="../images/about-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;

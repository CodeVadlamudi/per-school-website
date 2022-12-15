import React from "react";
import { popularData } from "../Data";
import "./Popular.css";

function Popular() {
  return (
    <div className="popular">
      <div className="container">
        <div className="popular__title">
          <h1>Popular Teachers</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo
          </p>
        </div>
        <div className="popular__row">
          {popularData.map((index) => (
            <div className="popular__col">
              <div className="popular__details">
                <img src={index.avatarImg} alt="avatar-image" />
                <div className="popular__description">
                  <h3>{index.titleName}</h3>
                  <span>{index.designation}</span>
                  <div className="popular__icons">
                    {index.fb}
                    {index.twitter}
                    {index.ig}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;

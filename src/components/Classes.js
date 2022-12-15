import React from "react";
import { dataClasses } from "../Data";
import "./Classes.css";

function Classes() {
  return (
    <div className="classes">
      <div className="container">
        <div className="classes__title">
          <h1>School Classes</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>

        <div className="classes__row">
          {dataClasses.map((index) => (
            <div className="classes__col">
              <div className="classes__details" key={index.id}>
                <img src={index.img} alt="classes-img" />
                <h3>{index.heading}</h3>
                <div className="classes__avatarRupees">
                  <div className="classes__user">
                    <img src={index.user} alt="user-img" />
                    <div className="classes__userName">
                      <h4>{index.name}</h4>
                      <span>{index.Worker}</span>
                    </div>
                  </div>
                  <button>{index.rupees}</button>
                </div>

                <div className="classes__ageTimeCapacity">
                  <div className="classes__age">
                    <h4>{index.age}</h4>
                    <span>{index.ageYear}</span>
                  </div>
                  <div className="classes__time">
                    <h4>{index.time}</h4>
                    <span>{index.timeClock}</span>
                  </div>
                  <div className="classes__capacity">
                    <h4>{index.capacity}</h4>
                    <span>{index.capacityKids}</span>
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

export default Classes;

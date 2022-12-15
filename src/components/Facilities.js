import React from "react";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HouseIcon from "@mui/icons-material/House";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import "./Facilities.css";

const facilityRow = [
  {
    id: 1,
    icons: <DirectionsBusIcon />,
    heading: "School Bus",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    icons: <SportsSoccerIcon />,
    heading: "Playground",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 3,
    icons: <HouseIcon />,
    heading: "Healthy Canteen",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 4,
    icons: <CoPresentIcon />,
    heading: "Positive Learning",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

function Facilities() {
  return (
    <div className="facility">
      <div className="container">
        <div className="facility__title">
          <h1>School Facilities</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur
          </p>
        </div>

        <div className="facility__row">
          {facilityRow.map((index) => (
            <div className="facility__col">
              <div className="facility__details" key={index.id}>
                {index.icons}
                <h3>{index.heading}</h3>
                <p>{index.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facilities;

import React from "react";
import home2 from "../img/home2.png";

//Import Icons
import { AccessTime, Money, Workspaces, Camera } from "@mui/icons-material";

export const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services{" "}
        </h2>
        <div className="card">
          <div className="icon">
            <AccessTime />
            <h3>Efficient</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="icon">
            <Money />
            <h3>Affordable</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="icon">
            <Workspaces />
            <h3>Team Work</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="icon">
            <Camera />
            <h3>Diaphgram</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="a professional camera" />
      </div>
    </div>
  );
};

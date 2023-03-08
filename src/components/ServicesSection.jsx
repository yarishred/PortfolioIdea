import React from "react";
import home2 from "../img/home2.png";

//Import Icons
import { AccessTime, Money, Workspaces, Camera } from "@mui/icons-material";

//Import Styled Components
import { Services, Description, Image, Cards, Card } from "../styles";

export const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services{" "}
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <AccessTime />
              <h3>Efficient</h3>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <Money />
              <h3>Affordable</h3>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <Workspaces />
              <h3>Team Work</h3>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <Camera />
              <h3>Diaphgram</h3>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="a professional camera" />
      </Image>
    </Services>
  );
};

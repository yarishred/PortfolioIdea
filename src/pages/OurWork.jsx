import React from "react";
import { StyledOurWork, Movie } from "../styles";

//Import React Router Dom
import { NavLink } from "react-router-dom";

//Import Framer Motion
import { pageAnimation } from "../animation/animation";

//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

export const OurWork = () => {
  return (
    <StyledOurWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}

     >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <NavLink to="/work/the-athlete">
          <img src={athlete} alt="The Athlete" />
        </NavLink>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <NavLink to="/work/the-racer">
          <img src={theracer} alt="The Racer" />
        </NavLink>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <NavLink to="/work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </NavLink>
      </Movie>
    </StyledOurWork>
  );
};

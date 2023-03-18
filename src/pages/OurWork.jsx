import React from "react";
import {
  StyledOurWork,
  Movie,
  Hide,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
} from "../styles";

//Import React Router Dom
import { NavLink } from "react-router-dom";

//Import Framer Motion
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnim,
  slider,
} from "../animation/animation";

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
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <NavLink to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athlete}
              alt="The Athlete"
            />
          </Hide>
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

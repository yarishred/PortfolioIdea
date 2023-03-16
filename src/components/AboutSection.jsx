import React from "react";
import home1 from "../img/home1.png";

//Import Styled Components
import { About, Description, Hide, Image } from "../styles";

//import Framer Motion
import { motion } from "framer-motion";
import { titleAnim , fade, photoAnimation} from "../animation/animation";
import { Wave } from "./Wave";

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim} >We work to made</motion.h2>
          </Hide>
          <Hide>
            <motion.h2  variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="guy with the camera" />
      </Image>
      <Wave/>
    </About>
  );
};

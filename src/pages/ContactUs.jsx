import React from "react";

//Import Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation/animation";

export const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

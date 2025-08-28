import React from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Element name="hero" className="hero">
        <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
    <h1>Full Stack Developer</h1>
        <h2>Waleed Shahid</h2>
        <p>I build scalable apps that dont just work — they perform. From .NET to Python, React to ML, I turn complex problems into sleek, production-ready solutions.</p>
        <button className="see-work-btn">See My Work</button>
    </motion.div>
    </Element>
  );
}

export default Hero;
import React from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const projects = [
  {
    name: 'Cognitive Integrity Management for GIS systems',
    description: 'Implemented cognitive integrity management system to process geographical information system data for oil and gas pipelines. It included processing data for detecting erosion, dents or failures in any parts of the pipelines identified through cpig devices.',
    image: 'src/assets/OBS.png',
  },
  {
    name: 'Psychometric Assessment Evaluations',
    description: 'Implemented a system for evaluating candidates before hiring through differed psychometric assessments created by a team of competitive psycologists as well as implementing 360 degree feedback and engagement surveys.',
    image: 'src/assets/sacs.jpg',
  },
  {
    name: 'Health Care Insurance',
    description: 'Developed a web application that provided the insurance agencies/agents a complete end to end flow to create their insurance products and generate leads, convert them into sales and manage finances all in a single application.',
    image: 'src/assets/AMS.jpg',
  },
];

function Projects() {
  return (
    <Element name="projects" className="section projects">
        <motion.div
        className="section-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
    <h1 className="section-title">PROJECTS</h1>
        <p>Explore my latest development projects that showcase my skills and creativity.</p>
        <div className="card-container">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <img src={project.image} alt={project.name} className="card-image" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
    </motion.div>
    </Element>
  );
}

export default Projects;
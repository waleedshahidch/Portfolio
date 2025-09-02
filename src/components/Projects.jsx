import React from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { skillGroups } from './Skills';

// Dictionary mapping project names to arrays of language/framework names
const projectTechMap = {
  'Cognitive Integrity Management for GIS systems': ['C#', 'Angular', 'ASP.NET Core', 'SQL', 'Azure'],
  'Psychometric Assessment Evaluations for talent aquistion and maintenance and surveys': ['C#', 'Angular', 'ASP.NET Core', 'SQL', 'AWS'],
  'Health Care Insurance products for agencies/agents': ['C#', 'Blazor.NET', 'ASP.NET Core', 'SQL', 'Azure'],
  'Revenue Cycle Management for medical claims processing & arbitration': ['C#', 'React', 'ASP.NET Core', 'MongoDB', 'GCP'],
  'e-Real Estate Management system for sale and purchase of properties': ['Python', 'React', 'Django', 'PostgreSQL'],
  'Extension created for shoppers just like capital one': ['Javascript', 'Python'],
  'Inventory Management System for factory distribution wing': ['C#', 'React', 'ASP.NET Core', 'PostgreSQL', 'GCP'],
  'Automation flow for updating higher management dashboards using Power Automate': ['Power Automate'],
};

// Combine all skills into a single dictionary for logo lookup
const skillLogos = [
  ...skillGroups[0].skills, // Languages
  ...skillGroups[1].skills, // Frontend Frameworks
  ...skillGroups[2].skills, // Backend Frameworks
  ...skillGroups[3].skills, // Databases
  ...skillGroups[4].skills, // DevOps
  ...skillGroups[5].skills, // Automation
].reduce((acc, skill) => {
  acc[skill.name] = skill.image;
  return acc;
}, {});

const projects = [
  {
    name: 'Cognitive Integrity Management for GIS systems',
    description: 'Implemented cognitive integrity management system to process geographical information system data for oil and gas pipelines. It included processing data for detecting erosion, dents or failures in any parts of the pipelines identified through cpig devices.',
    image: '/assets/OBS.png',
  },
  {
    name: 'Psychometric Assessment Evaluations for talent aquistion and maintenance and surveys',
    description: 'Implemented a system for evaluating candidates before hiring through differed psychometric assessments created by a team of competitive psycologists as well as implementing 360 degree feedback and engagement surveys.',
    image: '/assets/sacs.jpg',
  },
  {
    name: 'Health Care Insurance products for agencies/agents',
    description: 'Developed a web application that provided the insurance agencies/agents a complete end to end flow to create their insurance products and generate leads, convert them into sales and manage finances all in a single application.',
    image: '/assets/AMS.jpg',
  },
  {
    name: 'Revenue Cycle Management for medical claims processing & arbitration',
    description: 'Implemented a system for revenue cycle management to make it easier for medical billers to manage and process claim through multiple departments including appeal processing , aribitration & litigation as well.',
    image: '/assets/rcm.jpg',
  },
  {
    name: 'e-Real Estate Management system for sale and purchase of properties',
    description: 'Developed a platform where sellers can signup and sell their properties through publishing advertisements which buyers can see and contact the sellers through the chat system within the application. The system also had the capability of predicting property prices for buyers with an accuracy of 94%.',
    image: '/assets/realestate.png',
  },
  {
    name: 'Extension created for shoppers just like capital one',
    description: 'Developed an extension that would scrap data from different websites such as ebay, walmart, dhgate, target etc for the product user has in his cart on any store to get discounted or better prices without searching each and every website.',
    image: '/assets/cart.png',
  },
  {
    name: 'Inventory Management System for factory distribution wing',
    description: 'Created an inventory management system for a distribution organization to keep track of their sales and inventory updates as well as reporting low inventory or other issues to the management using power bi.',
    image: '/assets/inventory.png',
  },
  {
    name: 'Automation flow for updating higher management dashboards using Power Automate',
    description: 'Implemented a power automate flow that used Microsoft Planner boards and charts, converted them into json objects using only required features and dumped them in an azure block in an incremental way which was connected to a power bi dashboard. That dashboard was updated using the workflow as well.',
    image: '/assets/workflow.png',
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
              <p title={project.description}>{project.description}</p>
              <div className="tech-logos">
                {projectTechMap[project.name].map((tech, idx) => (
                  <div key={idx} className="tech-logo-item" title={tech}>
                    <img src={skillLogos[tech]} alt={`${tech} logo`} className="tech-logo" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Element>
  );
}

export default Projects;
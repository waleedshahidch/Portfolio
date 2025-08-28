import React, { useState } from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Javascript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ],
  },
  {
    title: 'Frontend Frameworks',
    skills: [
      { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Blazor.NET', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg' },
    ],
  },
  {
    title: 'Backend Frameworks',
    skills: [
      { name: 'ASP.NET Core', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'FastAPI', image: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Azure', image: 'src/assets/Azure.png' }, // Updated URL
      { name: 'AWS', image: 'src/assets/aws.png' }, // Updated to a reliable CDN
      { name: 'GCP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    ],
  },
];

function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === skillGroups.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? skillGroups.length - 1 : prev - 1));
  };

  return (
    <Element name="skills" className="section skills">
            <motion.div
            className="section-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
    <h1 className="section-title">SKILLS</h1>
        <p>A showcase of my technical proficiencies across languages, frameworks, and databases.</p>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>&lt;</button>
          <div className="carousel-slide">
            <h3 className="group-title">{skillGroups[currentSlide].title}</h3>
            <div className="skill-list">
              {skillGroups[currentSlide].skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.image} alt={skill.name} className="skill-logo" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>&gt;</button>
        </div>
    </motion.div>
    </Element>
  );
}

export default Skills;
import React from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const certifications = [
  {
    name: 'Azure Administrator Associate',
    code: 'AZ-104',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
  {
    name: 'Azure Developer Associate',
    code: 'AZ-204',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
  {
    name: 'Power Platform Developer Associate',
    code: 'PL-400',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
  {
    name: 'Azure Solutions Architect Expert',
    code: 'AZ-305',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
  },
  {
    name: 'Power Platform Solution Architect Expert',
    code: 'PL-600',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
  },
];

function Certifications() {
  return (
  <Element name="certifications" className="section certifications">
        <motion.div
        className="section-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
    <h1 className="section-title">CERTIFICATIONS</h1>
        <p>Recognitions and certifications that highlight my expertise in development, architecture design and devops.</p>
        <div className="certification-list">
          <div className="certification-row">
            {certifications.slice(0, 3).map((cert, index) => (
              <div key={index} className="certification-item">
                <img src={cert.image} alt={cert.name} className="certification-logo" />
                <div className="certification-details">
                  <span className="cert-code">{cert.code}</span>
                  <span className="cert-name">{cert.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="certification-row">
            {certifications.slice(3).map((cert, index) => (
              <div key={index + 3} className="certification-item">
                <img src={cert.image} alt={cert.name} className="certification-logo" />
                <div className="certification-details">
                  <span className="cert-code">{cert.code}</span>
                  <span className="cert-name">{cert.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
    </motion.div>
    </Element>
  );
}

export default Certifications;
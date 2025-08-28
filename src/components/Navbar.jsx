// src/components/Navbar.jsx
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const items = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">Waleed</div>
      <div className="navbar-links">
        {items.map((it) => (
          <ScrollLink
            key={it.id}
            to={it.id}
            spy={true}          // apply activeClass when the section is in view
            smooth={true}
            offset={-70}        // adjust for fixed navbar height
            duration={600}
            className="nav-link" // class for styling (see CSS below)
            activeClass="active-link"
          >
            {it.label}
          </ScrollLink>
        ))}

        <button className="say-hi-btn">Say Hi</button>
      </div>
    </nav>
  );
}

// src/components/Navbar.jsx
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const items = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo */}
      <div className="navbar-brand flex items-center pl-6">
        <img
  src="/assets/logo.png"
  alt="Waleed Logo"
  className="mr-3 mt-1"
  style={{ width: "50px", height: "50px", objectFit: "contain", marginLeft: "10%" }}
/>

      </div>

      {/* Links */}
      <div className="navbar-links flex gap-6">
        {items.map((it) => (
          <ScrollLink
            key={it.id}
            to={it.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="nav-link cursor-pointer hover:text-gray-400 transition"
            activeClass="active-link"
          >
            {it.label}
          </ScrollLink>
        ))}
        <a
          href="/assets/CV.pdf"
          download="Waleed_Shahid_CV.pdf"
          className="hover:text-gray-400 transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import { FaUser, FaGraduationCap, FaBriefcase, FaTools, FaEnvelope } from "react-icons/fa";
import "./Navigation.css";
import { Link } from 'react-router-dom'; // at the top with other imports


const navItems = [
  { name: "About", icon: <FaUser />, id: "about" },
  { name: "Education", icon: <FaGraduationCap/>, id: "education" },
  { name: "Experience", icon: <FaBriefcase />, id: "experience" },
  { name: "Skills", icon: <FaTools />, id: "skills" },
  { name: "Contact", icon: <FaEnvelope />, id: "contact" },
];

function Navigation() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      {/* Left side - Name */}
      <div className="navbar-left">VITHYABARATHY</div>

      {/* Right side - Navigation Links */}
      <ul className="navbar-right">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => {
              setActive(index);
              scrollToSection(item.id);
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navigation;

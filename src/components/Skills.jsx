import React from "react";
import {
  FaUsersCog,
  FaBalanceScale,
  FaComments,
  FaLightbulb,
  FaBrain,
  FaClock,
  FaLaptopCode,
  FaBookReader,
  FaGlobeAsia,
  FaProjectDiagram
} from "react-icons/fa";
import { FaTools } from "react-icons/fa";

import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Leadership", icon: <FaUsersCog /> },
    { name: "Strategic Thinking", icon: <FaBalanceScale /> },
    { name: "Communication", icon: <FaComments /> },
    { name: "Problem Solving", icon: <FaLightbulb /> },
    { name: "Critical Thinking", icon: <FaBrain /> },
    { name: "Time Management", icon: <FaClock /> },
    { name: "Technical Knowledge", icon: <FaLaptopCode /> },
    { name: "Adaptability", icon: <FaBookReader /> },
    { name: "Cultural Awareness", icon: <FaGlobeAsia /> },
    { name: "Project Management", icon: <FaProjectDiagram /> }
  ];

  const languages = ["Tamil", "English", "Sinhala"];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title"> <span className="skills-title-icon"><FaTools/></span> SKILLS</h2>

      <div className="skills-tree-container">
        <div className="skills-branch">
          {skills.map((skill, index) => (
            <div className="skills-leaf" key={index}>
              <span className="skills-icon">{skill.icon}</span>
              <span className="skills-leaf-text">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="skills-language-subtitle">Languages</h3>
      <div className="skills-language-list">
        {languages.map((lang, index) => (
          <span className="skills-language-seed" key={index}>
            {lang}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;

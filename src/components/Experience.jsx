import React from "react";
import { FaUsers, FaLeaf, FaHandsHelping, FaChild, FaHeartbeat, FaChalkboardTeacher, FaGlobe, FaBookReader, FaUserTie } from "react-icons/fa";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";


function WorkExperience() {
  const experiences = [
    {
      icon: <FaLeaf />,
      title: "Member of Zero Plastic Group",
      location: "Rajarata University of Sri Lanka",
      description: "Collaborated with students to raise awareness on plastic waste and promote sustainable alternatives."
    },
    {
      icon: <FaUsers />,
      title: "Member of Rotaract Club",
      location: "Rajarata University of Sri Lanka",
      description: "Contributed to community service and leadership development events for students."
    },
    {
      icon: <FaChild />,
      title: "University Student Ambassador",
      location: "National Child Protection Authority",
      description: "Promoted child protection initiatives and led workshops on children's rights."
    },
    {
      icon: <FaHeartbeat />,
      title: "Member of Health Promotion Society",
      location: "Rajarata University of Sri Lanka",
      description: "Organized health awareness campaigns, health camps, and wellness workshops."
    },
    {
      icon: <FaHandsHelping />,
      title: "Volunteer",
      location: "Lyca Gnanam Foundation - Vavuniya",
      description: "Supported educational and community development programs for underprivileged students."
    },
    {
      icon: <FaGlobe />,
      title: "Volunteer",
      location: "V-Force Club",
      description: "Engaged in environmental, youth empowerment, and social issue projects."
    },
    {
      icon: <FaBookReader />,
      title: "Volunteer",
      location: "Educate Lanka Foundation",
      description: "Mentored students and guided them in education and career development."
    },
    {
      icon: <FaUserTie />,
      title: "Secretary",
      location: "All University Undergraduates of Omanthai",
      description: "Coordinated administrative and event organization activities."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Volunteer",
      location: "Sirakukal Organization",
      description: "Helped organize education and recreation programs for children."
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title"><span className="education-icon"> <FaBriefcase/> </span>WORK EXPERIENCE</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-icon">{exp.icon}</div>
            <div className="experience-content">
              <h3 className="experience-role">{exp.title}</h3>
              <p className="experience-location">{exp.location}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;

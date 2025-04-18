import React from "react";
import "./About.css";
import profileImage from "../assets/vithy.jpeg"; // Replace with your actual image path
import { FaFacebook, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section className="about-container" id="about">
      {/* Left Side */}
      <div className="about-content">
        <h1 className="about-name">VITHYABARATHY  KARUNAKARAN</h1><br/>
        <p className="about-description"> 
          I am a dedicated and ambitious undergraduate with a strong foundation in 
          Health Promotion and a passion for continuous learning. I thrive in dynamic 
          environments where I can leverage my adaptability, problem-solving abilities, 
          and teamwork skills to contribute meaningfully to an organization.
        </p>
        <br/>
        {/* Social Icons */}
        <div className="social-icons1">
          <a href="https://www.facebook.com/share/16NEgdpiSE/" className="icon"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/vithyabarathy-karunakaran-a47923304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icon"><FaLinkedin /></a>
          <a href="https://www.instagram.com/k.vithyabarathy?utm_source=qr&igsh=MWF3b3pxdjlzc21wcg==" className="icon"><FaInstagram /></a>
        </div>

        {/* Download CV Button */}
        <a href="/cv.pdf" download className="cv-button">
          <FaDownload className="download-icon" /> Download CV
        </a>
      </div>

      {/* Right Side - Animated Image */}
      <div className="about-image">
        <div className="image-background"></div>
        <img src={profileImage} alt="Profile" className="profile-pic" />
      </div>
    </section>
  );
}

export default About;

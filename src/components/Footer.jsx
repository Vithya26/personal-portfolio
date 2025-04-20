import React from "react";
import "./Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaHeart,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section footer-profile">
        <h3 className="footer-title">VITHYABARATHY KARUNAKARAN</h3>
        <p className="footer-description">
          Passionate about promoting health, empowering communities, and embracing continuous learning.
        </p>
      </div>

      <div className="footer-section footer-links">
        <h4 className="footer-subtitle">Explore</h4>
        <ul>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </div>

      <div className="footer-section footer-contact">
        <h4 className="footer-subtitle">Contact</h4>
        <p><FaPhone className="footer-icon" /> +94 774691179 </p>
        <p><FaEnvelope className="footer-icon" />karunavithya06@gmaiI.com </p>
        <p><FaMapMarkerAlt className="footer-icon" /> Arasankulam, Omanthai, Vavuniya , Sri Lanka</p>
      </div>

      <div className="footer-section footer-social">
        <h4 className="footer-subtitle">Connect</h4>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com/share/16NEgdpiSE/"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/vithyabarathy-karunakaran-a47923304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/k.vithyabarathy?utm_source=qr&igsh=MWF3b3pxdjlzc21wcg=="><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          Made with <FaHeart className="footer-heart" /> by VITHYABARATHY KARUNAKARAN © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

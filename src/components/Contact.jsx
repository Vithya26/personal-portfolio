import React, { useState } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic (e.g., sending an email)
        alert("Message Sent!");
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-title"><span className="education-icon"><FaPhoneAlt  /></span>Contact Me</h2>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="contact-details">
                        <div className="contact-box">
                            <FaPhone className="contact-icon" />
                            <a href="tel:+94 774691179">+94 774691179</a>
                        </div>
                        <div className="contact-box">
                            <FaEnvelope className="contact-icon" />
                            <a href="mailto:karunavithya06@gmaiI.com">karunavithya06@gmaiI.com</a>
                        </div>
                        <div className="contact-box">
                            <FaMapMarkerAlt className="contact-icon" />
                            <p>Arasankulam, Omanthai, Vavuiya , Sri Lanka</p>
                        </div>
                        <br />
                        <div className="social-media">
                            <div className="social-icons">
                                <a href="https://www.facebook.com/share/16NEgdpiSE/" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaFacebookF /></a>
                                <a href="https://www.linkedin.com/in/vithyabarathy-karunakaran-a47923304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaLinkedinIn /></a>
                                <a href="https://www.instagram.com/k.vithyabarathy?utm_source=qr&igsh=MWF3b3pxdjlzc21wcg==" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Get In Touch</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="send-button">
                            <FaPaperPlane /> Send Message
                        </button>
                    </form>
                </div>
            </div>


        </section>
    );
}

export default Contact;

import React, { useState } from "react";
import "./Contact.css";
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import './fonts.css'; // Import the font CSS file

const Contact = () => {
  // Define state for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use a mail service or a backend API for form submission
    window.open(
      `mailto:irfanmk1999@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=Name: ${encodeURIComponent(formData.name)}%0A%0AMessage:%0A${encodeURIComponent(
        formData.message
      )}`
    );
    alert("Your message has been sent!");
    setFormData({ name: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="intro-section">
        <h2>I'd Love to Hear from You!</h2>
        <p>If you notice any mistakes or have suggestions, feel free to let me know, and I will address them as soon as possible.</p>
      </div>

      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="quote-section">
        <div className="quote-overlay">
          <p>“The Quran will speak for its followers on the Day of Judgment, guiding them to mercy and eternal peace.”</p>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;

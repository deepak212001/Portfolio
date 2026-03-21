import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaArrowUp } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [interest, setInterest] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    if (interest) formData.append('interest', interest);
    emailjs.sendForm("service_oehbwlg", "template_bwllvr5", form.current, "481Rm7AwaCnrbfr52")
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setInterest(null);
        },
        (error) => {
          alert("Failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <div className="contact-arrow">
            <img src="/asserts/top-right-arrow.3a7389c2.svg" alt="Contact" />
          </div>
          <h2 className="contact-heading">It's time to talk! <br /> Contact me</h2>
          <p className="contact-email">yadavdeepak212001@gmail.com</p>
          <div className="contact-socials">
            <a href="https://x.com/yadav_deepak24" target="_blank" rel="noreferrer" className="social-btn">
              <FaXTwitter /> X
            </a>
            <a href="https://github.com/deepak212001" target="_blank" rel="noreferrer" className="social-btn">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/deepakyadav24/" target="_blank" rel="noreferrer" className="social-btn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:yadavdeepak212001@gmail.com" className="social-btn">
              <MdEmail /> Email
            </a>
          </div>
        </div>
        <div className="contact-right">
          <br />
          <br />
          <br />
          <p className="contact-intro">
            Best way to reach out is <a href="mailto:yadavdeepak212001@gmail.com">yadavdeepak212001@gmail.com</a> or fill the form below. Don't be shy, I love to connect!
          </p>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <div>
                <label>Your Name</label>
                <input type="text" name="user_name" placeholder="John Doe" required />
              </div>
              <div>
                <label>Your Email</label>
                <input type="email" name="user_email" placeholder="john@example.com" required />
              </div>
            </div>
            <div>
              <label>Your Message</label>
              <textarea name="message" placeholder="Hello Deepak..." required />
            </div>
            <div className="interest-chips">
              <button
                type="button"
                className={`chip ${interest === 'hiring' ? 'active green' : ''}`}
                onClick={() => setInterest(interest === 'hiring' ? null : 'hiring')}
              >
                <span className="chip-dot green" /> Interested In Hiring!
              </button>
              <button
                type="button"
                className={`chip ${interest === 'chat' ? 'active pink' : ''}`}
                onClick={() => setInterest(interest === 'chat' ? null : 'chat')}
              >
                <span className="chip-dot pink" /> Some Chit-Chat! ☕
              </button>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
              <span className="btn-arrow">
                <FaArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_oehbwlg",    // from EmailJS
      "template_bwllvr5",   // from EmailJS
      form.current,
      "481Rm7AwaCnrbfr52"     // from EmailJS
    )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // clear form
        },
        (error) => {
          alert("Failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="headding">Get In Touch <hr /></h2>
      <section className="contact-section" id="contact">
        <div className="left">
          <h3>Why Be Shy, Say Hi…</h3>
          <p>
            I'm open to new opportunities. Whether you have inquiries or just want
            to say hello, feel free to reach out. I'll respond promptly!
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="mailto:youremail@example.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="right">
          <label>Your email</label>
          <input type="email" name="user_email" required />

          <label>Name</label>
          <input type="text" name="user_name" required />

          <label>Message</label>
          <textarea name="message" required />

          <button type="submit">Send Message</button>
        </form>
      </section></>
  );
};

export default Contact;

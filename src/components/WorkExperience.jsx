import React from "react";
import "./WorkExperience.css";

const experiences = [
  {
    title: "Software Engineer",
    company: "ByoSync",
    period: "Oct 2025 — Present",
    points: [
      "Building face recognition feature using MediaPipe ",
      "I developed the backend, frontend and the database and used MERN stack for the application.",
      "Led end-to-end backend development with a strong focus scalability, implementing HMAC-SHA-256 authentication, timestamp validation, idempotency handling, rate limiting, RBAC, and scheduled cron jobs.",
      "Implemented banking-grade hybrid encryption for secure client-server communication using AES for payload encryption and RSA for secure key exchange, ensuring end-to-end encrypted data transmission and secure decryption using private/public key cryptography.",
    ],
  },
  {
    title: "Full Stack Intern",
    company: "3w Business Pvt Ltd",
    period: "Aug 2025 — Sept 2025",
    points: [
      "Contributed to TaskPlanet product development using MERN stack for backend and web frontend.",
      "Developed mobile application features using React Native for cross-platform deployment.",
    ],
  },
];

function WorkExperience() {
  return (
    <section className="work-section" id="experience">
      <div className="work-header">
        <div className="work-deco">
          <img src="/asserts/squares.f14caa74.svg" alt="" className="work-deco-img" />
        </div>
        <h2 className="work-title">Work Experience</h2>
      </div>
      <div className="work-list">
        {experiences.map((exp, i) => (
          <div key={i} className="work-entry">
            <div className="work-meta">
              <div className="work-meta-line">
                <span className="work-bullet" />
                <span className="work-period">{exp.period}</span>
              </div>
              <h3 className="work-job-title">{exp.title}</h3>
              <p className="work-company">{exp.company}</p>
            </div>
            <div className="work-desc">
              {exp.points.map((point, j) => (
                <p key={j} className="work-point">{point}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;

import React, { useState } from "react";
import "./Skills.css";

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

const skillsData = {
  Languages: [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=48&id=108784&format=png&color=ffffff",

    },{
      name: "Java",
      icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",

    },
    {
      name: "C",
      icon: "https://img.icons8.com/?size=48&id=40670&format=png&color=ffffff",
    },
    {
      name: "C++",
      icon: "https://img.icons8.com/?size=48&id=40669&format=png&color=ffffff",
    },
  ],
  Frontend: [
    {
      name: "React",
      icon: "https://img.icons8.com/?size=48&id=123603&format=png&color=ffffff",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/?size=48&id=20909&format=png&color=ffffff",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/?size=48&id=21278&format=png&color=ffffff",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png&color=ffffff",
    },
    {
      name: "Material UI",
      icon: "https://img.icons8.com/?size=48&id=gFw7X5Tbl3ss&format=png&color=ffffff",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=48&id=54087&format=png&color=ffffff",
    },
    {
      name: "Express",
      icon: "https://img.icons8.com/?size=48&id=SDVmtZ6VBGXt&format=png&color=ffffff",

    },  
    {
      name: "Spring Boot",
      icon: "https://img.icons8.com/?size=100&id=A3Ulk2RcONKs&format=png&color=000000",

    },
    {
      name: "Mongoose",
      icon: "https://img.icons8.com/?size=48&id=gKfcEStXI1Hm&format=png&color=ffffff",
    },
  ],
  Databases: [
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png&color=ffffff",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/?size=48&id=UFXRpPFebwa2&format=png&color=ffffff",
    },
  ],
  Tools: [
    {
      name: "GitHub",
      icon: "https://img.icons8.com/?size=48&id=12599&format=png&color=ffffff",
    },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png&color=ffffff",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/?size=48&id=33039&format=png&color=ffffff",
    },
  ],
};

const allSkills = Object.values(skillsData).flat();

function SkillsDeco() {
  return (
    <div className="skills-deco">
      <img
        src="/asserts/circles.a755a9d0.svg"
        alt="Skills"
        className="skills-deco-img"
      />
    </div>
  );
}

const Skills = () => {
  const [active, setActive] = useState("All");
  const skills = active === "All" ? allSkills : skillsData[active] || [];

  return (
    <div className="skills-section" id="skills">
      <div className="skills-header">
        <SkillsDeco />
        <h2 className="skills-title">My Skills</h2>
      </div>
      <div className="skills-grid">
        <div className="skills-left">
          <p className="skills-tagline">I build things for the people</p>
          <p className="skills-tagline em">I can Design, Develop, Deploy</p>
        </div>
        <div className="skills-right">
          <p className="skills-desc">
            My go-to stack is React with Node.js and MongoDB. I design in code
            and focus on clean, maintainable solutions.
          </p>
          <div className="skills-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skill-pill ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="skills-list">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">
                {skill.icon ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                ) : (
                  <span className="skill-icon-placeholder">
                    {skill.name[0]}
                  </span>
                )}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

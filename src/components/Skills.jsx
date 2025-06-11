import React from "react";

const Skills = () => {
  const skills = ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"];
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
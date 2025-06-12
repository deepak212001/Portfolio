// Skills.jsx
import React from 'react';
import './Skills.css';


// import { FaAws, FaGitAlt, FaGithub } from "react-icons/fa";

const SkillSection = ({ title, skills }) => (
  <div className="skills-box">
    <h2 className="skills-title">{title}</h2>
    <div className="icon-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">

          <img src={skill.icon} alt="" className='tech-logo'/>
          <span className="label">{skill.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const data = [
    {
      title: 'Programming Languages',
      skills: [
        { icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000', label: 'JavaScript' },
        { icon: 'https://img.icons8.com/?size=100&id=40670&format=png&color=000000', label: 'C' },
        { icon: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000', label: 'C++' },
        { icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', label: 'HTML5' },
        { icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', label: 'CSS3' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000', label: 'React' },
        { icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000', label: 'Node.js' },
        { icon: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000', label: 'Express' },
        { icon: 'https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000', label: 'Material UI' },
        { icon: 'https://img.icons8.com/?size=100&id=gKfcEStXI1Hm&format=png&color=000000', label: 'Mongoose' },
        { icon: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000', label: 'Tailwind CSS' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { icon: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000', label: 'MySQL' },
        { icon: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', label: 'MongoDB' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { icon: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000', label: 'GitHub' },
        { icon: '', label: 'Postman' },
        { icon: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000', label: 'VS code' },
        { icon: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000', label: 'AWS' }
      ]
    },
    {
      title: 'Coursework',
      skills: [
        { icon: 'https://img.icons8.com/?size=100&id=102561&format=png&color=000000', label: 'Data Structures and Algorithms' },
        { icon: 'https://img.icons8.com/?size=100&id=102561&format=png&color=000000', label: 'Operating Systems' },
        { icon: 'https://img.icons8.com/?size=100&id=102561&format=png&color=000000', label: 'Computer Networking' },
        { icon: 'https://img.icons8.com/?size=100&id=102561&format=png&color=000000', label: 'Object-Oriented Programming' },
        { icon: 'https://img.icons8.com/?size=100&id=102561&format=png&color=000000', label: 'Database Management Systems' },
        { icon: 'https://img.icons8.com/?size=100&id=102561&format=png&color=000000', label: 'Cloud Computing' }
      ]
    }
  ];

  return (
    <>
      <h2 className="headding">Skills<hr /></h2>
      <div className="skills-section">
        {data.map((section, index) => (
          <SkillSection key={index} title={section.title} skills={section.skills} />
        ))}
      </div>
    </>
  );
};

export default Skills;

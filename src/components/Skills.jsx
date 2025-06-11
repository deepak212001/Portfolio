// Skills.jsx
import React from 'react';
import './Skills.css';

const SkillSection = ({ title, skills }) => (
  <div className="skills-box">
    <h2 className="skills-title">{title}</h2>
    <div className="icon-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <span className="icon">{skill.icon}</span>
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
        { icon: '🟨', label: 'JavaScript' },
        { icon: '🌐', label: 'C' },
        { icon: '➕', label: 'C++' },
        { icon: '🟥', label: 'HTML5' },
        { icon: '🟦', label: 'CSS3' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { icon: '⚛️', label: 'React' },
        { icon: '🔳', label: 'Next.js' },
        { icon: '🟢', label: 'Node.js' },
        { icon: '🚂', label: 'Express' },
        { icon: '🎨', label: 'Material UI' },
        { icon: '📦', label: 'Mongoose' },
        { icon: '💨', label: 'Tailwind CSS' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { icon: '🛢️', label: 'MySQL' },
        { icon: '🌱', label: 'MongoDB' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { icon: '🔧', label: 'Git' },
        { icon: '🐙', label: 'GitHub' },
        { icon: '📮', label: 'Postman' },
        { icon: '💬', label: 'VS code' },
        { icon: '🎨', label: 'Figma' }
      ]
    },
    {
      title: 'Coursework',
      skills: [
        { icon: '🎓', label: 'Data Structures and Algorithms' },
        { icon: '🖥️', label: 'Operating Systems' },
        { icon: '🌐', label: 'Computer Networking' },
        { icon: '🌐', label: 'Object-Oriented Programming' },
        { icon: '🗃️', label: 'Database Management Systems' },
        { icon: '🗃️', label: 'Cloud Computing' }
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

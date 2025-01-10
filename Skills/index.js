import React, { useState } from 'react';  
import { PiBracketsCurly } from "react-icons/pi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import './index.css';  

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className='skill-bar'>
      {/* Skill name and percentage display */}
      <div className='skill-header'>
        <span className='skill-name'>{skill}</span>
        <span>{percentage}%</span>
      </div>
      {/* Progress Bar */}
      <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const Skills = () => {

  // Local state to manage dropdown visibility for both frontend and backend
  const [isFrontendSkillsVisible, setFrontendSkillsVisible] = useState(false);
  const [isBackendSkillsVisible, setBackendSkillsVisible] = useState(false);

  // Array of skills for Frontend Section
  const frontendSkills = [
    { name: "HTML", percentage: 98 },
    { name: "CSS", percentage: 98 },
    { name: "JavaScript", percentage: 85 },
    { name: "React Js", percentage: 74 },
  ];

  // Array of skills for Backend Section
  const backendSkills = [
    { name: "Node.js", percentage: 80 },
    { name: "Express.js", percentage: 75 },
    { name: "MongoDB", percentage: 70 },
    { name: "SQL", percentage: 65 },
  ];

  // Toggle visibility of frontend skills
  const toggleFrontendSkills = () => {
    setFrontendSkillsVisible(prevState => !prevState);
  };

  // Toggle visibility of backend skills
  const toggleBackendSkills = () => {
    setBackendSkillsVisible(prevState => !prevState);
  };

  return (
    <div className='skills-section' id="skills">
      <div className='skills-container'>
        <h1>My Skills</h1>
        <h2>My technical level</h2>
      </div>

      {/* Frontend Section */}
      <div className='front-end-section'>
        <h1 className='skills-heading'>
          Frontend Developer <span className='front-end-span'>More than 4 years</span>
        </h1>
        <PiBracketsCurly className="icon-style" />
        {/* Conditional rendering of the dropdown icon */}
        {isFrontendSkillsVisible ? (
          <FiChevronUp className='dropdown' onClick={toggleFrontendSkills} />
        ) : (
          <FiChevronDown className='dropdown' onClick={toggleFrontendSkills} />
        )}
        {/* Render the Frontend SkillBars based on visibility state */}
        {isFrontendSkillsVisible && frontendSkills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
        ))}
      </div>

      {/* Backend Section */}
      <div className='back-end-section'>
        <h1 className='skills-heading'>
          Backend Developer <span className='back-end-span'>More than 3 years</span>
        </h1>
        <PiBracketsCurly className="icon-style" />
        {/* Conditional rendering of the dropdown icon */}
        {isBackendSkillsVisible ? (
          <FiChevronUp className='dropdown' onClick={toggleBackendSkills} />
        ) : (
          <FiChevronDown className='dropdown' onClick={toggleBackendSkills} />
        )}
        {/* Render the Backend SkillBars based on visibility state */}
        {isBackendSkillsVisible && backendSkills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

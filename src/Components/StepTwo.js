import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const StepTwo = () => {
    const [skills, setSkills] = useState(['', '', '', '']);

    const handleSkillChange = (index, value) => {
      const newSkills = [...skills];
      newSkills[index] = value;
      setSkills(newSkills);
    };
  
    const addSkill = () => {
      setSkills([...skills, '']);
    };

  return (
    <div className="steptwo">
      <h1 className="steptwo__second-header">Wykonaj test</h1>
      <h2 className="steptwo__step-number">
        Krok <span>2</span> z 3
      </h2>
      <div className="steptwo__test"></div>
      <h2>Wprowadź swoje główne umiejętności harcerskie: minimum 4, maksimum 6</h2>
     
      {skills.map((skill, index) => (
        <div key={index} className='steptwo__skillbox'>{`Umiejętność nr. ${index + 1}`}   
          <input className='steptwo__input'
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
        </div>
      ))}
      <button className='steptwo__addskill-btn'
        onClick={addSkill}>+ Dodaj kolejną umiejętność
      </button>
      <p>Jeśli nie chcesz już dodawać więcej umiejętności kliknij “Dalej”</p>
      <h2 className="stepone__step-number">
        Krok <span>2</span> z 3
      </h2>
      <Link to="/kolejna-strona">
        <button className='btn steptwo__btn'>Dalej</button>
      </Link>
    </div>
    
  );
};

export default StepTwo;

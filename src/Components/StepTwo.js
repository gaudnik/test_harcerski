import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const StepTwo = () => {
  const { firstName, lastName } = useParams();

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
      <h1 className="steptwo__header">Wykonaj test</h1>
      <h2 className="steptwo__step-number">
        Krok <span>2</span> z 3
      </h2>
      <h2 className='steptwo__test-header'>Wprowadź swoje główne umiejętności harcerskie: minimum 4, maksimum 6</h2>
     <div className='steptwo__add-skills'>
      {skills.map((skill, index) => (
        <div key={index} className='steptwo__skillbox'>{`Umiejętność nr. ${index + 1}`}   
          <input className='steptwo__input'
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
        </div>
      ))}
      </div>
      <button className='steptwo__addskill-btn'
        onClick={addSkill}>+ Dodaj kolejną umiejętność
      </button>
      <p className='steptwo__info'>Jeśli nie chcesz już dodawać więcej umiejętności kliknij “Dalej”</p>
      <h2 className="steptwo__step-number">
        Krok <span>2</span> z 3
      </h2>
      <Link to={`/kroktrzeci/${firstName}/${lastName}`}>
        <button className='btn steptwo__btn'>Dalej</button>
      </Link>
    </div>
    
  );
};

export default StepTwo;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StepTwo = () => {
  const { firstName, lastName } = useParams();
  const navigate = useNavigate();

  const [skills, setSkills] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    if (skills.length < 6) {
      setSkills([...skills, '']);
    }
  };

  const handleNext = () => {
    navigate(`/kroktrzeci/${firstName}/${lastName}`);
  };

  useEffect(() => {
    const filledSkills = skills.filter((skill) => skill !== '');
    if (filledSkills.length < 4 || skills.length > 6) {
      setError('Podaj co najmniej 4 umiejętności i maksymalnie 6 umiejętności.');
    } else {
      setError('');
    }
  }, [skills]);

  return (
    <div className="steptwo">
      <h1 className="steptwo__header">Wykonaj test</h1>
      <h2 className="steptwo__step-number">
        Krok <span>2</span> z 3
      </h2>
      <h2 className="steptwo__test-header">
        Wprowadź swoje główne umiejętności harcerskie: minimum 4, maksimum 6
      </h2>
      <div className="steptwo__add-skills">
        {skills.map((skill, index) => (
          <div key={index} className="steptwo__skillbox">
            {`Umiejętność nr. ${index + 1}`}
            <input
              className="steptwo__input"
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className="steptwo__addskill-btn" onClick={addSkill} disabled={skills.length === 6}>
        + Dodaj kolejną umiejętność
      </button>
      <p className="steptwo__info">Jeśli nie chcesz już dodawać więcej umiejętności kliknij “Dalej”</p>
      {error && <p className="steptwo__error">{error}</p>}
      <h2 className="steptwo__step-number">
        Krok <span>2</span> z 3
      </h2>
      <button className="btn steptwo__btn" onClick={handleNext} disabled={error}>
        Dalej
      </button>
    </div>
  );
};

export default StepTwo;

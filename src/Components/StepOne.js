import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as useHistory } from 'react-router-dom';



const StepOne= () => {
    const { firstName, lastName } = useParams();

    const [selectedOption, setSelectedOption] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const history = useHistory();

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setShowWarning(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOption === '') {
          setShowWarning(true);
          return;
        }
         // Tutaj  dodać logikę związaną z wysłaniem danych na serwer
    // np. za pomocą fetch lub innej biblioteki HTTP
    history.push('/summary');
};
  
    return (
      <div className="stepone">
        <h1 className="stepone__header">{firstName} {lastName}</h1>
        <p>Witamy w teście harcerskim. Wyniki twojego testuzobaczysz 
            po zalogowaniu do naszej strony.</p>
        <h1 className="stepone__second-header">Wykonaj test</h1>
        <h2 className="stepone__step-number">Krok <span>1</span> z 3</h2>
        <div className="stepone__test">
            <h1 className="stepone__test-header">Napisz, jaki osiągnąłeś 
            maksymalny poziom doświadczenie organizacyjnego w ZHP / ZHR, w skali 1-6, gdzie:
        </h1>
        </div>
      </div>
    );
  };

export default StepOne;
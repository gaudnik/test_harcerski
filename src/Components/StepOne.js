import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StepOne = () => {
  const { firstName, lastName } = useParams();

  const [selectedOption, setSelectedOption] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const history = useNavigate();

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
    // Tutaj dodać logikę związaną z wysłaniem danych na serwer
    // np. za pomocą fetch lub innej biblioteki HTTP
    // history.push('/summary');
  };

  return (
    <div className="stepone">
      <h1 className="stepone__header">
        {firstName} {lastName}
      </h1>
      <p>
        Witamy w teście harcerskim. Wyniki twojego testu zobaczysz po zalogowaniu do naszej strony.
      </p>
      <h1 className="stepone__second-header">Wykonaj test</h1>
      <h2 className="stepone__step-number">
        Krok <span>1</span> z 3
      </h2>
      <div className="stepone__test">
        <h1 className="stepone__test-header">
          Napisz, jaki osiągnąłeś maksymalny poziom doświadczenia organizacyjnego w ZHP / ZHR, w skali 1-6, gdzie:
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="stepone__radio">
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={() => handleOptionChange('option1')}
              />
              <span className="stepone__radio-checkmark"></span>
              <span className="stepone__radio-label">1 - byłem szeregowym członkiem zastępu</span>
            </label>
          </div>
          <div className="stepone__radio">
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={() => handleOptionChange('option2')}
              />
              <span className="stepone__radio-checkmark"></span>
              <span className="stepone__radio-label">2 - byłem zastępowym lub funkcyjnym w drużynie (np. przybocznym)</span>
            </label>
          </div>
          <div className="stepone__radio">
            <label>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={() => handleOptionChange('option3')}
              />
              <span className="stepone__radio-checkmark"></span>
              <span className="stepone__radio-label">3 - byłem drużynowym lub funkcyjnym w szczepie (kwatermistrzem, oboźnym na obozie itp.)</span>
            </label>
          </div>
          <div className="stepone__radio">
            <label>
              <input
                type="radio"
                value="option4"
                checked={selectedOption === 'option4'}
                onChange={() => handleOptionChange('option4')}
              />
              <span className="stepone__radio-checkmark"></span>
              <span className="stepone__radio-label">4 - byłem szczepowym lub funkcyjnym na wyższym poziomie (w hufcu, w komendzie chorągwi)</span>
            </label>
          </div>
          <div className="stepone__radio">
            <label>
              <input
                type="radio"
                value="option5"
                checked={selectedOption === 'option5'}
                onChange={() => handleOptionChange('option5')}
              />
              <span className="stepone__radio-checkmark"></span>
              <span className="stepone__radio-label">5 - byłem hufcowym lub funkcyjnym na wyższym poziomie (w komendzie chorągwi, w Kwaterze Głównej)</span>
            </label>
          </div>
          <div className="stepone__radio">
            <label>
              <input
                type="radio"
                value="option6"
                checked={selectedOption === 'option6'}
                onChange={() => handleOptionChange('option6')}
              />
              <span className="stepone__radio-checkmark"></span>
              <span className="stepone__radio-label">6 - byłem komendantem chorągwi</span>
            </label>
          </div>
          <div className="stepone__warning">
            <div className="stepone__warning-icon"></div>
            {showWarning && <p style={{ color: 'red' }}>Uzupełnij tę odpowiedź!</p>}
          </div>
          <h2 className="stepone__step-number">
           Krok <span>1</span> z 3
          </h2>
          <button className="btn stepone__btn" type="submit">
            Dalej
          </button>
        </form>
      </div>
    </div>
  );
};

export default StepOne;

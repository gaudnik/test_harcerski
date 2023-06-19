import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MyIcon } from '../Images/eye_icon.svg';
import { ReactComponent as WarningIcon } from '../Images/warning_icon.svg';

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input">
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        className="password-input__input"
      />
      <span className="password-input__icon" onClick={togglePasswordVisibility}>
        {showPassword ? <MyIcon /> : <MyIcon />}
      </span>
    </div>
  );
};

const DoATest = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !position || !email || !password) {
      setError(
        <div>
          <WarningIcon/>
          <span>Wypełnij wszystkie pola formularza.</span>
        </div>
      );
      return;
    }

    console.log('Dane formularza:', {
      firstName,
      lastName,
      position,
      email,
      password
    });
    navigate(`/krokpierwszy/${firstName}/${lastName}`);
  };

  return (
    <div className="doatest">
      <form onSubmit={handleSubmit} className="doatest__form">
        <h1 className="doatest__header">Wykonaj test</h1>
        <div className="doatest__row-name">
          <div className="doatest__row-inline">
            <label htmlFor="firstName" className="doatest__label-name">
              Podaj imię:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="doatest__input-name doatest__input1"
            />
          </div>
          <div className="doatest__row-inline">
            <label htmlFor="lastName" className="doatest__label-name">
              Podaj nazwisko:
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="doatest__input-name"
            />
          </div>
        </div>
        <div className="doatest__row">
          <label htmlFor="position" className="doatest__label">
            Nazwa obecnego stanowiska:
          </label>
          <input
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="doatest__input"
          />
        </div>
        <div className="doatest__row">
          <label htmlFor="email" className="doatest__label">
            Twój aktualny e-mail:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="doatest__input"
          />
        </div>
        <div className="doatest__row">
          <label htmlFor="password" className="doatest__label">
            Nadaj hasło (wyniki testu zobaczysz po zalogowaniu):
          </label>
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && <p className='doatest__error'>{error}</p>}

        <button type="submit" className="btn doatest__btn">
          Dalej
        </button>
      </form>
    </div>
  );
};

export default DoATest;

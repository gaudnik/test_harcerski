import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        {showPassword ? <FaEyeSlash /> : <FaEye />}
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dane formularza:', {
      firstName,
      lastName,
      position,
      email,
      password
    });
  };

  return (
    <div className="doatest">
      <form onSubmit={handleSubmit} className="doatest__form">
        <h1 className="doatest__header">Wykonaj test</h1>
        <div className="doatest__row-name">
          <div className="doatest__row-inline">
            <label htmlFor="firstName" className="doatest__label">
              Podaj imię:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="doatest__input-name"
            />
          </div>
          <div className="doatest__row-inline">
            <label htmlFor="lastName" className="doatest__label">
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
            Nadaj hasło (wyniki testu po zalogowaniu):
          </label>
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Link to={`/krokpierwszy/${firstName}/${lastName}`} className="doatest__link">
          <button type="submit" className="btn doatest__btn">
            Dalej
          </button>
        </Link>
      </form>
    </div>
  );
};

export default DoATest;

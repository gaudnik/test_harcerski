import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="doatest">
        <form onSubmit={handleSubmit}>
            <h1 className="doatest__header">Wykonaj test</h1>
        <div>
            <label htmlFor="firstName" className="doatest__label">Twoje imię:</label>
            <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="lastName" className="doatest__label">Twoje nazwisko:</label>
            <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="position" className="doatest__label">Nazwa obecnego stanowiska:</label>
            <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="email" className="doatest__label">Twój aktualny e-mail:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password" className="doatest__label">Nadaj hasło(wyniki testu po zalogowaniu):</label>
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
             <span className="password-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
             </span>
        </div>
        <Link to="/nastepna-strona">
        <button type="submit" className='btn doatest__btn'>Dalej</button>
        </Link>
        </form>
    </div>
  );
};

export default DoATest;

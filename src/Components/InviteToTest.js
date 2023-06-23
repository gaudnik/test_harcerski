import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InviteToTest = () => {
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handleAddEmail = () => {
    if (!validateEmail(email)) {
      setError('Niepoprawny adres e-mail!');
      return;
    }

    if (emailList.includes(email)) {
      setError('Ten adres e-mail już istnieje!');
      return;
    }

    setEmailList([...emailList, email]);
    setEmail('');
  };

  const handleRemoveEmail = (emailToRemove) => {
    const updatedEmailList = emailList.filter((email) => email !== emailToRemove);
    setEmailList(updatedEmailList);
  };

  const handleSendInvitations = () => {
    // Tutaj możesz umieścić kod do wysyłania zaproszeń
    console.log('Wysyłanie zaproszeń:', emailList);
    navigate('/gotowe');
  };

  const validateEmail = (email) => {
    // Prosta walidacja adresu e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Wprowadź adres e-mail</h2>
      <input type="email" value={email} onChange={handleInputChange} />
      <button onClick={handleAddEmail}>Dodaj</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>Lista adresów e-mail:</h3>
      {emailList.length > 0 ? (
        <ul>
          {emailList.map((email) => (
            <li key={email}>
              {email} <button onClick={() => handleRemoveEmail(email)}>X</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak dodanych adresów e-mail.</p>
      )}
      <button disabled={emailList.length === 0} onClick={handleSendInvitations}>
        Wyślij zaproszenie
      </button>
    </div>
  );
};

export default InviteToTest;

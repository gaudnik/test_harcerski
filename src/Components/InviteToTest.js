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
    <div className="invitetotest">
      <h2 className="invitetotest__header">Wprowadź adres e-mail</h2>
      <div className="invitetotest__add-box">
        <input className="invitetotest__input" type="email" value={email} onChange={handleInputChange} />
        <button className="btn invitetotest__btn" onClick={handleAddEmail}>Dodaj</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3 className="invitetotest__second-header">Lista adresów e-mail:</h3>
      <div className="invitetotest__email-box">
      {emailList.length > 0 ? (
        <ul>
          {emailList.map((email) => (
            <li key={email}>
              {email} <button className='invitetotest__remove-btn' onClick={() => handleRemoveEmail(email)}>x</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak dodanych adresów e-mail.</p>
      )}
      </div>
      <button className="btn invitetotest__btn-send" disabled={emailList.length === 0} onClick={handleSendInvitations}>
        Wyślij zaproszenie
      </button>
    </div>
  );
};

export default InviteToTest;

import React, { useState } from 'react';
import { ReactComponent as WarningIcon } from '../Images/warning_icon.svg';

const DonationComponent = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [error, setError] = useState('');

  const handleAmountChange = (event) => {
    setDonationAmount(event.target.value);
    setError('');
  };

  const handleDonation = () => {
    if (donationAmount === '') {
      setError(
      <div>
        <WarningIcon/>
        <span>Musisz wybrać lub wpisać kwotę.</span>
      </div>
      );
      return;
    }

    // Tutaj możesz umieścić kod obsługujący przekazanie datku, np. wysłanie żądania do serwera
    console.log(`Przekazano datek w wysokości: ${donationAmount} zł`);
  };

  return (
    <div className='donation'>
      <h2 className='donation__header'>Wesprzyj nas datkiem</h2>
      <p className='donation__text'>Wybierz jedną z kwot lub wpisz inną:</p>
      <div className='donation__amounts'>
        <button className='donation__amount'onClick={() => setDonationAmount('10')}>10 zł</button>
        <button className='donation__amount' onClick={() => setDonationAmount('20')}>20 zł</button>
        <button className='donation__amount' onClick={() => setDonationAmount('50')}>50 zł</button>
        <button className='donation__amount' onClick={() => setDonationAmount('100')}>100 zł</button>
      </div>
      <div className='donation__input-btn-box'>
        <input className='donation__input' type="number" placeholder="Inna kwota" value={donationAmount} onChange={handleAmountChange} />
        {error && <p style={{ color: 'red', marginBottom:'1rem' }}>{error}</p>}
        <button className='btn donation__btn' onClick={handleDonation}>Wesprzyj</button>
      </div>
    </div>
  );
};

export default DonationComponent;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

export default function PaymentScreen() {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/payments', {
        account_number: accountNumber,
        amount: parseFloat(amount),
      });
      navigate('/confirmation');
    } catch (err) {
      setError('❌ Payment failed. Check account number and try again.');
      console.error(err);
    }
  };

  return (
    
    <div style={{ padding: '2rem', backgroundColor:'#ffffffff',justifyItems:'center', alignItems:'center',width:'100vw'}}>
      <h2>💳 Make a Payment</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label>Account Number</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />

        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit" style={{ marginTop: '1rem', backgroundColor:'#7392d1ff'}}>Submit Payment</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

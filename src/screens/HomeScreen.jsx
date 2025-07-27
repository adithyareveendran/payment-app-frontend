import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';

export default function HomeScreen() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get('/customers')
      .then(res => setCustomers(res.data))
      .catch(err => console.error('Error fetching customers:', err));
  }, []);

 return (
  <div
    style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // full height of screen
      textAlign: 'center',
      width: '100vw',
      backgroundColor: '#d9e1edff',
    }}
  >
    <h2>🏠 Loan Details</h2>

    {customers.map(customer => (
      <div
        key={customer.id}
        style={{
          border: '1px solid #ccc',
          margin: '1rem 0',
          padding: '1rem',
          borderRadius: '6px',
          minWidth: '300px',
          textAlign: 'left',
          backgroundColor: '#acceaeff',
        }}
      >
        <p><strong>Account Number:</strong> {customer.account_number}</p>
        <p><strong>Issue Date:</strong> {customer.issue_date}</p>
        <p><strong>Interest Rate:</strong> {customer.interest_rate}%</p>
        <p><strong>Tenure:</strong> {customer.tenure} months</p>
        <p><strong>EMI Due:</strong> ₹{customer.remaining_amount}</p>
      </div>
    ))}

    <Link to="/payment">
      <button style={{ padding: '10px 20px', marginTop: '20px' }}>➡️ Pay EMI</button>
    </Link>
  </div>
)};

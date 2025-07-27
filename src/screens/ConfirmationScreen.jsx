
import React from 'react';
import { Link } from 'react-router-dom';

export default function ConfirmationScreen() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', width:'100vw',height:'100vw',justifyContent:'center', backgroundColor:'#d9e1edff'}}>
      <h2>✅ Payment Successful!</h2>
      <p>Thank you for your payment.</p>
      <Link to="/">
        <button style={{ marginTop: '1rem', backgroundColor:'#ffffffff'}}>⬅️ Back to Home</button>
      </Link>
    </div>
  );
}

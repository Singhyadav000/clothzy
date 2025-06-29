import React, { useState } from 'react';
import './Offercard.css';

function Offercard() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`Subscribed with ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="subscribe-container">
      <p className="subtitle">Join the Chlothzy Style Community</p>
      <h2>Subscribe now & get 20% off</h2>
      <p className="tagline">Chlothzy Fashion – Where Style Meets Confidence.</p>

      <div className="subscribe-input-wrapper">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default Offercard;

import React from 'react';
import "./HeroSection.css";
function Herosection() {
  return (
    <div className='Hero'>
        <div className="arrival-section">
      <div className="arrival-label">
        <span className="line"></span>
        <span className="text">OUR BESTSELLERS</span>
      </div>

      <h1 className="arrival-title">Chlothzy Arrivals</h1>

      <div className="arrival-shop">
        <span className="shop-now">SHOP NOW</span>
        <span className="line short"></span>
      </div>
    </div>
        <div className='Picture'>
            <img src="/assets/herosection.png" alt="Logo" />
        </div>
    </div>
  );
}

export default Herosection;

import React from 'react';
import './Footrf.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footrf() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo + Tagline */}
        <div className="footer-col">
          <h2 className="footer-logo">Clothzy<span>.shop</span></h2>
          <p className="footer-tagline">Chlothzy Fashion brings bold elegance to your wardrobe. From bodycon dresses to chic essentials, we redefine style. Perfect fits, premium fabrics — confidence in every thread. Step into the spotlight with Chlothzy — where fashion speaks.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Offers</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Clothzy.shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footrf;

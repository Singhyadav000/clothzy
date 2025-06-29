import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="../../assets/logo.png" alt="Logo" />
      </div>
      <div className="Nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collection">Collection</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
      <div className="icons-bar">
        <FaSearch className="icon" />
        <Link to="/login">
          <FaUser className="icon" />
        </Link>

        <div className="icon cart-icon">
          <Link to="/shopcart">
            {" "}
            {/* ✅ This should match the Route path */}
            <FaShoppingBag />
          </Link>

          <span className="cart-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

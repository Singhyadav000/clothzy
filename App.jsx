import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Herosection from "./Component/HeroSection/Herosection";
import Productcard from "./Component/Product card/Productcard";
import Offercard from "./Component/Offercard/Offercard";
import Footrf from "./Component/footer/footrf";
import About from "./Component/about/About";
import Contact from "./Component/Contact/Contact";
import Login from './Component/login/Login';
import Signup from './Component/Signup/Signup';
import Collection from "./Component/Collection/Collection";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Shopcart from "./Component/shopcart/Shopcart";

function HomePage() { 
  return (
    <>
      <Herosection />
      <Productcard />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopcart" element={<Shopcart />} />
        {/* <Route path="/shopcart" element={<Shopcart />} />  // ✅ Correct: 'shopcart' */}

        {/* Add more routes as needed */}
      </Routes>
      <Offercard />
      <Footrf />
    </Router>
  );
}

export default App;

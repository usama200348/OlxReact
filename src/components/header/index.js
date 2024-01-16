// Header.jsx
import React, { useState } from 'react';
import './header.css';
import { SearchInputCategory } from '../../views/SearchInput';
import { SearchInputCountry } from '../../views/SearchInput';
import { Login } from '../../Login';
import { Register } from '../../Register';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './assets/olx_logo.png';
import carLogo from './assets/electric-car.png';
import propertyLogo from './assets/apartment.png';
import BlackLogo from './assets/olx_logo_black.png';

function Header() {
  const [showSignInSignUp, setShowSignInSignUp] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="olx-logo" src={logo} alt="OLX Logo" />
        <div className="categories">
          <div className="category">
            <img className="category-icon" src={carLogo} alt="Motors Icon" />
            <span className='icontext'>Motors</span>
          </div>
          <div className="category">
            <img className="category-icon" src={propertyLogo} alt="Property Icon" />
            <span className='icontext'>Property</span>
          </div>
        </div>
      </div>
      <img className="olx-logo black-logo" src={BlackLogo} alt="OLX Logo" />
      <div className='search'>
        <SearchInputCountry />
      </div>
      <div className='category'>
        <SearchInputCategory />
      </div>
      <div className="user-actions">
        {/* <a href='{Login}' className="login" >
          Login
        </a> */}
 <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>        <a href="#" className="sell">
          +SELL
        </a>
      </div>

    
    </div>
  );
}

export default Header;

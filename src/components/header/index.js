import React, { useState } from 'react';
import './header.css';
import { SearchInputCategory } from '../../views/SearchInput';
import { SearchInputCountry } from '../../views/SearchInput';
import { Login } from '../../Login';
import { Register } from '../../Register';
import { Link } from 'react-router-dom';
import mobile from './assets/Mobiles.png'
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
        <div className='black-logo'><img className="olx-logo black-logo" src={BlackLogo} alt="OLX Logo" /></div>
        <div className="categories">
          <div className="category">
            <img className="category-icon" style={{width: "25px"}}  src={carLogo} alt="Motors Icon" />
            <span className='icontext'>Motors</span>
          </div>
          <div className="category">
            <img className="category-icon" style={{width: "25px"}} src={propertyLogo} alt="Property Icon" />
            <span className='icontext'>Property</span>
          </div>
        </div>
      </div>
      <div className='search-input'>
        <div >
        <SearchInputCountry />
      </div>
      </div>
      <div className='category-input'>
      <div >
        <SearchInputCategory />
      </div>
      </div>
      
      <div className="user-actions">
        <a href='./Login' className="login" >
          Login
        </a>

        <a href="./AdManagement" className="sell">
          +SELL
        </a>
      </div>
      <div className='anchor'>
      </div>
      {/* <img src={mobile}/> */}
    </div>
  );
}

export default Header;
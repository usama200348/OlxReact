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
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import {logout} from '../config/firebase'
import { useNavigate } from 'react-router-dom';
import BlackLogo from './assets/olx_logo_black.png';

function Header(user) {
  const [showSignInSignUp, setShowSignInSignUp] = useState(false);
const navigate=useNavigate()
const dispatch=useDispatch()
const cart = useSelector(state => state.cartReducer.cart)
console.log(cart);
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
      {user ?
            <div>
                <h3>{user.email}</h3>
                <button className='login' onClick={logout}>Logout</button>
            </div> :
            <button className='login' style={{marginTop:-'30em'}} onClick={() => navigate('/login')}>Login</button>
            
        }
<button className='sell' onClick={() => navigate('/AdManagement') }>+SELL</button>
        {/* <a href="" className="sell">
          +SELL
        </a> */}

      </div>
      <p>{cart.length}</p>
        <img
            src="https://www.freeiconspng.com/uploads/green-shopping-cart-icon-5.png"
            width="50"
            height="50"
        />

      <div>
            {cart.map(item => {
                return <div>
                    <h3>
                        <img src={item.image} width="20" height="20" />
                    </h3>
                </div>
            })}
        </div>
    </div>
  );
}

export default Header;
// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../components/config/firebase';
import Header from '../components/header';
import Olx from './aaset/olx_logo.png'
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async () => {
    try {
      await login({ email, password });
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <img
          src={Olx} // Replace with your OLX logo URL
          alt="OLX Logo"
          style={{ width: '100%', marginBottom: '20px', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />

        <h2 style={{ marginBottom: '20px' }}>Login to Your Account</h2>

        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          style={{ width: '100%', padding: '10px', marginBottom: '20px', color:'black' }}
        />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          style={{ width: '100%', padding: '10px', marginBottom: '20px', color:'black' }}
        />

        <button onClick={signin} style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          Sign In
        </button>

        <p style={{ color: 'black', marginTop: '20px' }}  className='text' onClick={() => navigate('/register')}>
          Don't Have An Account? Register Here
        </p>
      </div>
    </div>
  );
}

export default Login;

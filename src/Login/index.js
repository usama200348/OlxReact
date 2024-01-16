import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../components/config/firebase';

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
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

      <button onClick={signin}>Sign In</button>

      <p onClick={() => navigate('/register')}>Don't Have An Account</p>
    </div>
  );
}

export default Login;

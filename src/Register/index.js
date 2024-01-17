// Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../components/config/firebase";
import Header from "../components/header";
import "./index.css"; // Import the CSS file

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await register({ fullname, age, email, password });
      navigate('/login');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="register-container">
      <Header />
      <div className="register-form">
        <input style={{color:'black'}}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Enter Full Name"
        />
        <input style={{color:'black'}}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
          type="number"
        />
        <input style={{color:'black'}}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          type="email"
        />
        <input style={{color:'black'}}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          type="password"
        />

        <button onClick={signUp}>SignUp</button>
        <p className="login-link" onClick={() => navigate('/login')}>
          Already Have An Account? Login Here
        </p>
      </div>
    </div>
  );
}

export default Register;

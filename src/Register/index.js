import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../components/config/firebase";

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUp = async () => {
    try {
      await register({ fullname, age, email, password });
      navigate('/login');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setFullname(e.target.value)}
        placeholder="Enter Full Name"
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Age"
        type="number"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        type="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        type="password"
      />

      <button onClick={signUp}>SignUp</button>
      <p onClick={() => navigate('/login')}>Already Have An Account?</p>
    </div>
  );
}

export default Register;

// AdManagement.js
import  { useEffect, useState } from 'react';
import { onAuthStateChanged, postAdToDb, auth, logout } from '../config/firebase';

function AdManagement() {
  const [user, setUser] = useState(null);
  const [adInputs, setAdInputs] = useState({
    title: '',
    description: '',
    amount: '',
    image: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        alert('User Is Logged Out');
        // You may want to use React Router for navigation in a larger application
        window.location.href = '../../login.html';
      }
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    setAdInputs({
      ...adInputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setAdInputs({
      ...adInputs,
      image: e.target.files[0],
    });
  };

  const handleSubmit = () => {
    const uid = user?.uid; // Authentication
    const { title, description, amount, image } = adInputs;

    const ad = {
      title,
      description,
      amount,
      image,
      uid,
    };

    postAdToDb(ad);
  };

  const handleSignOut = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <input
            type="text"
            name="title"
            value={adInputs.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={adInputs.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="amount"
            value={adInputs.amount}
            onChange={handleInputChange}
            placeholder="Amount"
          />
          <input type="file" name="image" onChange={handleImageChange} />

          <button onClick={handleSubmit}>Submit Ad</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>User is logged out</p>
      )}
    </div>
  );
}

export default AdManagement;

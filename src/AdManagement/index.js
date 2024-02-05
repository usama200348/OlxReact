// AdManagement.js
import './AdManagement.css'
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, postAdToDb, auth, ref, uploadBytes, getDownloadURL, collection, addDoc, db, storage } from '../components/config/firebase';
import { useNavigate } from 'react-router-dom';
import logo from './assest/olx_logo.png'; 

function AdManagement() {
  const [user, setUser] = useState(null);
  const [adInputs, setAdInputs] = useState({
    title: '',
    description: '',
    amount: '',
    image: null,
  });
  const navigate = useNavigate();

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

  const handleSubmit = async () => {
    try {
      const uid = auth.currentUser.uid;
      const { title, description, amount, image } = adInputs;

      const ad = {
        title,
        description,
        amount,
        image,
        uid,
      };

      const storageRef = ref(storage, `ads/${ad.image.name}`);
      await uploadBytes(storageRef, ad.image);
      const url = await getDownloadURL(storageRef);
      ad.image = url;
      await addDoc(collection(db, "ads"), ad);
      alert("Data Added Successfully");
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="ad-management-container">
      <div className="ad-management-form">
        <img src={logo} alt="Logo" className="logo" />
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
        <button style={{ backgroundColor: 'green' }} onClick={handleSubmit}>
          Submit Ad
        </button>
      </div>
    </div>
  );
}

export default AdManagement;

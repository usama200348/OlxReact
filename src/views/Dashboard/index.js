// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Cards from '../../components/Card/index';
import { getAllProducts } from '../../components/config/firebase';
import { Link as CustomLink } from '../../components/Link';
import Footer from '../../Footer/index';
import ImageSlider from '../../ImageSlider';

import "./dash.css"

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getAllProducts();
      console.log(res);
      setProducts(res);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  if (!products.length) {
    return <div style={{ color: 'black' }}><img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif' alt='loading'/> </div>;
  }

  return (
    <div>
      {/* <Header/> */}
      {/* console.log(<CustomLink/>); */}
      
      <CustomLink/> 
      {/* <ImageSlider/> */}
      {/* <div className="marquee-container">
        <div className="marquee-content">
          All You Want Is Available Here At an Economical Rate
        </div>
      </div> */}
      
      <div className='card-main' style={{marginTop:'5em'}}>{products.map(item => (
        <div key={item.id} className="main-Card-div">
          {/* <h3 style={{ color: 'black' }}>{item.title}</h3> */}
        <Cards item={item}   />
          
        </div>
      ))}</div>
<Footer/>
    </div>
  );

}

export default Dashboard;
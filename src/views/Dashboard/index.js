// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Cards from '../../components/Card/index';
import { getAllProducts } from '../../components/config/apis';

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getAllProducts();
      console.log(res.products);
      setProducts(res.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  if (!products.length) {
    return <div style={{ color: 'black' }}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5bvwGEJ3vGsEPkwzTT8v5hx6FIx6BKgY4AFmYza8ZMolX1hbK_SuYchaP63LSUZK7zo&usqp=CAU' alt='loading'/> </div>;
  }
  const { category } = products

  return (
    <div>
      <Header />
      <div className="marquee-container">
        <div className="marquee-content">
          All You Want Is Available Here At an Economical Rate
        </div>
      </div>
      
      <h3 style={{color:'black'}}>{category}</h3>
<div className='products-map'>{products.map(item => (
        
        <Cards key={item.id} item={item} />
      ))}</div>
      
    </div>
  );
}

export default Dashboard;
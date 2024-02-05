import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from '../../components/config/apis';
import Header from '../../components/header';
import FbImageLibrary from 'react-fb-image-grid';
import './detail.css'; // Update the import statement for CSS

function Detail() {
    const { uid } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
  

    useEffect(() => {
        fetchSingleProduct()
    }, []);

    const fetchSingleProduct = async () => {
        try {
            const res = await getSingleProduct(uid);
            console.log('MYres', res);
            setSingleProduct(res);
          } catch (error) {
            console.error('Error fetching single product:', error);
          }
    };
    // console.log(singleProduct.images);

    

    if (!singleProduct) {
        // Render a message or a loading indicator while waiting for data
        return <div>Loading...</div>;
    }
    const { title, image, price, description } = singleProduct;

    return (
        <div>
{/* <Header /> */}
            <div className='library'>
                {/* <FbImageLibrary className='fbImages' images={image} /> */}
                <img src={image} width={200}/>
            <h1 className='title'>{title}</h1>
            </div>
            <h3 className='price'>Price: {price}</h3>
            <p className='description'>
                {/* <h2 style={{ color: 'black' }}>Detail:</h2> */}
                {description}
            </p>        </div>
    );
}

const LoadingIndicator = () => (
    <div>
        <img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif' alt='Loading...' />
    </div>
);

const ErrorComponent = ({ error }) => (
    <div>
        <p>Error: {error}</p>
    </div>
);

export default Detail;

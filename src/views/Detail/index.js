import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from '../../components/config/apis';
import Header from '../../components/header';
import FbImageLibrary from 'react-fb-image-grid';
import { updateCart } from '../../Store/cartSlice';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useDispatch } from "react-redux";
import './detail.css'; // Update the import statement for CSS

function Detail() {
    const { uid } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);
    const dispatch = useDispatch();
    const [coordinates, setCoordinates] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ latitude, longitude });
        });
    }, []);

    useEffect(() => {
        fetchSingleProduct();
    }, []);

    const addToCart = () => {
        dispatch(updateCart(uid));
    };

    const fetchSingleProduct = async () => {
        try {
            const res = await getSingleProduct(uid);
            setSingleProduct(res);
        } catch (error) {
            console.error('Error fetching single product:', error);
        }
    };

    if (!singleProduct) {
        return <div>Loading...</div>;
    }

    const { title, image, amount, description } = singleProduct;

    return (
        <div>
            <div className='library'>
                <img src={image} width={200} />
                <h1 className='title'>{title}</h1>
            </div>
            <h3 className='price'>Price: {amount}</h3>
            <p className='description'>
                <h3>Description</h3>   {description}
            </p>
            <button className="addtocart" onClick={addToCart}>Add To Cart</button>

            {coordinates && (
                <MapContainer center={[coordinates.latitude, coordinates.longitude]} zoom={16} style={{ width: 600, height: 400, overflow: 'hidden' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    <Marker position={[coordinates.latitude, coordinates.longitude]}>
                        
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
}

export default Detail;

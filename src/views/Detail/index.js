import DetailCss from './detail.css';
import FbImageLibrary from 'react-fb-image-grid'
import Cards from "../../components/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from '../../components/config/apis';
import Header from '../../components/header';
function Detail() {
    const { adId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const res = await getSingleProduct(adId);
                setSingleProduct(res);
                console.log(res);
            } catch (error) {
                console.error('Error fetching single product:', error);
                // Handle the error, e.g., show an error message to the user
            }
        };

        if (adId) {
            fetchSingleProduct();
        }
    }, [adId]);

    if (Object.keys(singleProduct).length === 0) {
        return (
            <div >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5bvwGEJ3vGsEPkwzTT8v5hx6FIx6BKgY4AFmYza8ZMolX1hbK_SuYchaP63LSUZK7zo&usqp=CAU'/> 
                </div>
        );
    }

    const {  price, title, id ,images,description,thumbnail, } = singleProduct

    return (
        <div>
            <Header/>
            <h1 className='title'> {title}</h1>
       <div className='library'>  
         <FbImageLibrary className='fbImages'  images={images}  />
       </div>
           <h3 className='price'>{price}</h3>

    <p className='description'>{description}</p>
 {/* <p>{desciption}</p> */}
        </div>
    );
}

export default Detail;

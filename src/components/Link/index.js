import mobile from '../header/assets/Mobiles.png'
import car from './assests/vehicles.png'
import property from './assests/property.png'
import Rent from './assests/rent-property.png'
import Electronic from './assests/electronics-home-appliances.png'


import './link.css'
 export function Link() {
  return (
    <div>
    <div className='container'>
      <p>Mobile Phones</p>
      <p>Cars</p>
      <p>Motorcycle</p>
      <p>Houses</p>
      <p>Video-Audios</p>
      <p>Tablets</p>
      <p>Land & Plots</p>
      </div>  
      {/* <div className='logo' >
        <div className='logo-container'>
        <img src={mobile} className='mobile' />
        <div className='para'>
        <p className='mobile-p'>Mobile</p>
        <p className='car-p'>Car</p>
        <img src={car} className='car'/>
        
        </div>
        </div>
      </div>
      <div style={{marginLeft:'-63em', marginTop:'-35px' }}>
        <img src={property} style={{width:'6em'}}  className='property'/>
        <p className='para-p'>Property For <br/>Sell</p>
</div>
      <div style={{marginLeft:'-43em', marginTop:'-135px' }}>
        <img src={Rent} style={{width:'6em'}}  className='property-rent'/>
        <p className='rent-p'>Property For <br/>Rent</p>
</div> */}
    </div>
  );
}

// export default Link;

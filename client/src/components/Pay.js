import React, { useState ,useEffect} from 'react';
// import "./log.css"
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';

const Pay = () => {
  const[stripeToken,setStripeToken]=useState(null);
  const key= "pk_test_51KOIf0GqdYCTlmgtyqXafpKNJ6RBwtRTm41dpiBOmURbzsXRpuxn5JWHg1ljv8P2ScHxP6nFcrQRjfg8AcuW8O7d00OirM5vT1";
  
  const onToken=(token)=>{
    setStripeToken(token);
  }

  useEffect(()=>{
    const makeRequest=async()=>{
      try {
        const res= await axios.post("http://localhost:5000/api/checkout/payment",{
          tokenId:stripeToken.id,
          amount:2000,
        })
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    stripeToken && makeRequest();
  },[stripeToken])


  return (<div className="pay">
      <div>
        <StripeCheckout
        name='My Shop'
        image='https://previews.123rf.com/images/distrologo/distrologo1902/distrologo190200778/117610020-plantilla-de-dise%C3%B1o-de-logotipo-de-tienda-minorista-dise%C3%B1o-de-icono-de-logotipo-de-carrito-de-compra.jpg'
        billingAddress
        shippingAddress
        description='your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={key}
        >
        <button className='button'>
          Payment
        </button>
        </StripeCheckout>
      </div>
  </div>);
};

export default Pay;

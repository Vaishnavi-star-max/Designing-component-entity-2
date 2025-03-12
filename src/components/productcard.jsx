
import React from 'react';
import ViewProductButton from '../components/button';

const Productcard = () => {
   const productImage='https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg';
   const productName='laptop';
   const productPrice='Rs.83,000';

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
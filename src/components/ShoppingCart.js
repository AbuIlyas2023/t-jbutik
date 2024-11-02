// src/components/ShoppingCart.js

import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart">
      <h2>Indkøbskurv</h2>
      {cartItems.length === 0 ? (
        <p>Indkøbskurven er tom.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.brand} {item.model} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;

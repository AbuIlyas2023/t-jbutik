// src/components/ClothingItem.js

import React from 'react';

const ClothingItem = ({ item, onAddToCart }) => (
  <div className="clothing-item">
    <img src={item.image} alt={`${item.brand} ${item.model}`} className="clothing-image" />
    <div className="clothing-details">
      <h3>{item.brand} {item.model}</h3>
      <p>Størrelse: {item.size}</p>
      <p>Pris: {item.price}KR</p>
      <p>Farve: {item.color}</p>
      <p>Beskrivelse: {item.description}</p>
    </div>
  </div>
);

export default ClothingItem;

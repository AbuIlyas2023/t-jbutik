// src/components/ClothingList.js

import React from 'react';
import ClothingItem from './ClothingItem';

const ClothingList = ({ items, onAddToCart }) => {
  return (
    <div className="clothing-list">
      {items.map(item => (
        <div key={item.id} className="clothing-item">
          <ClothingItem item={item} />
          <button onClick={() => onAddToCart(item)}>Tilføj til Indkøbskurv</button>
        </div>
      ))}
    </div>
  );
};

export default ClothingList;

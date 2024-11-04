// src/components/ClothingList.js

import React from 'react';
import ClothingItem from './ClothingItem';

// ClothingList er en funktionel komponent, der viser en liste af tøjartikler.
// Den modtager 'items' (en liste af tøjartikler) og 'onAddToCart' (en funktion til at tilføje en vare til indkøbskurven) som props.
const ClothingList = ({ items, onAddToCart }) => {
  return (
    <div className="clothing-list">
      {/* Gennemgår hver vare i 'items' og render en ClothingItem-komponent for hver */}
      {items.map(item => (
        <div key={item.id} className="clothing-item">
          {/* Viser detaljer om tøjstykket */}
          <ClothingItem item={item} />
          {/* Knap til at tilføje varen til indkøbskurven */}
          <button onClick={() => onAddToCart(item)}>Tilføj til Indkøbskurv</button>
        </div>
      ))}
    </div>
  );
};

export default ClothingList; // Eksporterer komponenten til brug i andre dele af applikationen

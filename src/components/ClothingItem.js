// src/components/ClothingItem.js

import React from 'react';

// ClothingItem er en funktionel komponent, der viser detaljer om et tøjstykke.
// Den modtager 'item' (et objekt med tøjdetaljer) og 'onAddToCart' (en callback-funktion til at tilføje varen til indkøbskurven) som props.
const ClothingItem = ({ item, onAddToCart }) => (
  <div className="clothing-item">
    {/* Viser billedet af tøjstykket */}
    <img src={item.image} alt={`${item.brand} ${item.model}`} className="clothing-image" />
    
    <div className="clothing-details">
      {/* Viser mærke og model for tøjstykket */}
      <h3>{item.brand} {item.model}</h3>
      {/* Viser størrelsen på tøjstykket */}
      <p>Størrelse: {item.size}</p>
      <p>Pris: {item.price}KR</p>
      <p>Farve: {item.color}</p>
      <p>Beskrivelse: {item.description}</p>
    </div>
  </div>
);

export default ClothingItem; // Eksporterer komponenten til brug i andre dele af applikationen

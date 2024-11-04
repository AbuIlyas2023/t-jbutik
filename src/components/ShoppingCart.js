// src/components/ShoppingCart.js

import React from 'react';

// ShoppingCart er en funktionel komponent, der viser en liste af varer i indkøbskurven.
// Den modtager 'cartItems' som en prop, som er en liste af varer tilføjet til kurven.
const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart">
      <h2>Indkøbskurv</h2>
      {/* Viser en besked, hvis indkøbskurven er tom */}
      {cartItems.length === 0 ? (
        <p>Indkøbskurven er tom.</p>
      ) : (
        // Hvis der er varer i kurven, vises de som en liste
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {/* Viser brand, model og pris for hver vare i kurven */}
              {item.brand} {item.model} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart; // Eksporterer ShoppingCart komponenten til brug i andre dele af applikationen

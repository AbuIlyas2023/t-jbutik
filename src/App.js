// src/App.js

import React, { useState } from 'react';
import ClothingList from './components/ClothingList';
import ShoppingCart from './components/ShoppingCart';
import AddClothingForm from './components/AddClothingForm';
import clothingData from './data'; // Import clothing data
import './App.css'; // Updated styles

const App = () => {
  const [items, setItems] = useState(clothingData); // Use clothingData here
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setItems(items.filter(i => i.id !== item.id));
  };

  const handleAddClothing = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <h1>Tøjbutik</h1>
      <div className="container">
        <div className="sidebar-left">
          <AddClothingForm onAdd={handleAddClothing} />
        </div>
        <div className="clothing-list">
          <ClothingList items={items} onAddToCart={handleAddToCart} />
        </div>
        <div className="shopping-cart">
          <ShoppingCart cartItems={cart} />
        </div>
      </div>
    </div>
  );
};

export default App;

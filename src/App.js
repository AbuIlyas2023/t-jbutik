// src/App.js

// Importerer nødvendige moduler og komponenter til applikationen.
// 'useState' fra React bruges til at administrere komponentens tilstand (state).
import React, { useState } from 'react';
import ClothingList from './components/ClothingList'; // Komponent til at vise listen af tøj
import ShoppingCart from './components/ShoppingCart'; // Komponent til at vise indkøbskurven
import AddClothingForm from './components/AddClothingForm'; // Komponent til at tilføje nyt tøj
import clothingData from './data'; // Importerer data for eksisterende tøjartikler
import './App.css'; // Importerer CSS-stilarter

const App = () => {
  // State variabel 'items' indeholder alle tilgængelige tøjartikler, initialiseret med clothingData.
  // State variabel 'cart' holder styr på hvilke varer der er tilføjet til indkøbskurven.
  const [items, setItems] = useState(clothingData); // Bruger clothingData til at initialisere tilgængeligt tøj
  const [cart, setCart] = useState([]);

  // Funktion til at håndtere tilføjelse af tøj til indkøbskurven.
  // Når en artikel tilføjes til kurven, fjernes den fra listen over tilgængelige varer.
  const handleAddToCart = (item) => {
    setCart([...cart, item]); // Tilføjer varen til indkøbskurven
    setItems(items.filter(i => i.id !== item.id)); // Fjerner varen fra tilgængelige varer
  };

  // Funktion til at håndtere tilføjelse af nyt tøj til butikken.
  // Når nyt tøj tilføjes via formularen, opdateres 'items'-listen.
  const handleAddClothing = (newItem) => {
    setItems([...items, newItem]);
  };

  // Returnerer strukturen af hele appen, organiseret i tre hovedkomponenter:
  // - En venstre sidebar med formularen til at tilføje nyt tøj
  // - En liste af tilgængeligt tøj i midten
  // - En højre sidebar med indkøbskurven
  return (
    <div className="App">
      <h1>Tøjbutik</h1>
      <div className="container">
        <div className="sidebar-left">
          <AddClothingForm onAdd={handleAddClothing} /> {/* Formular til at tilføje nyt tøj */}
        </div>
        <div className="clothing-list">
          <ClothingList items={items} onAddToCart={handleAddToCart} /> {/* Liste over tilgængeligt tøj */}
        </div>
        <div className="shopping-cart">
          <ShoppingCart cartItems={cart} /> {/* Indkøbskurv som viser de tilføjede varer */}
        </div>
      </div>
    </div>
  );
};

export default App;

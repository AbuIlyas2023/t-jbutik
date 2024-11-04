// src/components/AddClothingForm.js

// Importerer React og useState-hooket til at administrere komponentens tilstand.
import React, { useState } from 'react';

// Definerer komponenten AddClothingForm, som modtager en onAdd-funktion som prop.
const AddClothingForm = ({ onAdd }) => {
  // Initialiserer formData state med tomme værdier for at gemme input fra formularen.
  const [formData, setFormData] = useState({
    brand: '', // Mærke for tøjet
    model: '', // Model af tøjet
    size: '', // Størrelse af tøjet
    price: '', // Pris på tøjet
    color: '', // Farve på tøjet
    description: '', // Beskrivelse af tøjet
    image: '', // Ny felt til billede URL
  });

  // Funktion til at håndtere ændringer i inputfelterne.
  const handleChange = (e) => {
    const { name, value } = e.target; // Destrukturering af event target for at få navn og værdi
    setFormData({
      ...formData, // Beholder tidligere værdier
      [name]: value, // Opdaterer den specifikke felt baseret på inputnavn
    });
  };

  // Funktion til at håndtere formularindsendelsen.
  const handleSubmit = (e) => {
    e.preventDefault(); // Forhindrer standard formularindsendelse
    const newClothing = {
      id: Date.now(), // Genererer et unikt ID baseret på det nuværende tidsstempel
      ...formData, // Inkluderer alle værdier fra formData
      price: parseFloat(formData.price), // Konverterer pris til et tal
    };
    onAdd(newClothing); // Kald onAdd-funktionen for at tilføje det nye tøj
    // Nulstiller formularen efter indsendelse.
    setFormData({
      brand: '',
      model: '',
      size: '',
      price: '',
      color: '',
      description: '',
      image: '', // Nulstiller også billedfeltet
    });
  };

  // Returnerer formularens JSX-struktur.
  return (
    <form onSubmit={handleSubmit}>
      <h2>Tilføj Tøj</h2> {/* Titel på formularen */}
      <input type="text" name="brand" placeholder="Mærke" value={formData.brand} onChange={handleChange} required />
      <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} required />
      <input type="text" name="size" placeholder="Størrelse" value={formData.size} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Pris" value={formData.price} onChange={handleChange} required />
      <input type="text" name="color" placeholder="Farve" value={formData.color} onChange={handleChange} required />
      <textarea name="description" placeholder="Beskrivelse" value={formData.description} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Billede URL" value={formData.image} onChange={handleChange} /> {/* Inputfelt til billede URL */}
      <button type="submit">Tilføj Tøj</button> {/* Knap til at indgive formularen */}
    </form>
  );
};

// Eksporterer komponenten for brug i andre dele af applikationen.
export default AddClothingForm;

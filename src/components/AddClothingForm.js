// src/components/AddClothingForm.js

import React, { useState } from 'react';

const AddClothingForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    size: '',
    price: '',
    color: '',
    description: '',
    image: '', // New field for image URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClothing = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price),
    };
    onAdd(newClothing);
    setFormData({
      brand: '',
      model: '',
      size: '',
      price: '',
      color: '',
      description: '',
      image: '', // Reset image field
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tilføj Tøj</h2>
      <input type="text" name="brand" placeholder="Mærke" value={formData.brand} onChange={handleChange} required />
      <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} required />
      <input type="text" name="size" placeholder="Størrelse" value={formData.size} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Pris" value={formData.price} onChange={handleChange} required />
      <input type="text" name="color" placeholder="Farve" value={formData.color} onChange={handleChange} required />
      <textarea name="description" placeholder="Beskrivelse" value={formData.description} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Billede URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Tilføj Tøj</button>
    </form>
  );
};

export default AddClothingForm;

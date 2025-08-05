import React, { useState } from 'react';

export {}; // Keep this below all imports

type AddPropertyFormProps = {
  onAdd: (property: {
    name: string;
    type: string;
    price: number;
    location: string;
  }) => void;
};

const AddPropertyForm: React.FC<AddPropertyFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !type || !price || !location) return;

    onAdd({
      name,
      type,
      price: Number(price),
      location,
    });

    // Clear form
    setName('');
    setType('');
    setPrice('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add New Property</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ margin: '5px' }}
      />

      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
        style={{ margin: '5px' }}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        style={{ margin: '5px' }}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        style={{ margin: '5px' }}
      />

      <button type="submit" style={{ marginLeft: '5px' }}>
        Add Property
      </button>
    </form>
  );
};

export default AddPropertyForm;

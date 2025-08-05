import React, { useState } from 'react';
import PropertyCard from './components/PropertyCard';
import AddPropertyForm from './components/AddPropertyForm';
import PropertyModal from './components/PropertyModal';
import { useTheme } from './context/ThemeContext';

type Property = {
  id: number;
  name: string;
  type: string;
  price: number;
  location: string;
};

function App() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      name: "Ocean View Apartment",
      type: "Apartment",
      price: 120000,
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Luxury Villa",
      type: "Villa",
      price: 300000,
      location: "Goa"
    }
  ]);

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const { isDark, toggleTheme } = useTheme();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const handleAddProperty = (newProperty: Omit<Property, 'id'>) => {
    const id = properties.length + 1;
    const propertyWithId = { id, ...newProperty };
    setProperties([...properties, propertyWithId]);
  };

  const handleDeleteProperty = (id: number) => {
    setProperties(prev => prev.filter(p => p.id !== id));
    setSelectedProperty(null);
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      filterType === 'All' || property.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>

      <h1>Property Listing Dashboard</h1>

      {/* Search and Filter */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{ padding: '5px' }}
        >
          <option value="All">All</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      {/* Add Form */}
      <AddPropertyForm onAdd={handleAddProperty} />

      {/* Property Cards */}
      {filteredProperties.map((property) => (
        <div key={property.id} style={{ marginBottom: '10px' }}>
          <PropertyCard
            name={property.name}
            type={property.type}
            price={property.price}
            location={property.location}
          />
          <button onClick={() => setSelectedProperty(property)}>View</button>
        </div>
      ))}

      {/* Modal */}
      {selectedProperty && (
        <PropertyModal
          id={selectedProperty.id}
          name={selectedProperty.name}
          type={selectedProperty.type}
          price={selectedProperty.price}
          location={selectedProperty.location}
          onClose={() => setSelectedProperty(null)}
          onDelete={handleDeleteProperty}
        />
      )}
    </div>
  );
}

export default App;

import React from 'react';

type PropertyProps = {
  name: string;
  type: string;
  price: number;
  location: string;
};

const PropertyCard: React.FC<PropertyProps> = ({ name, type, price, location }) => {
  return (
    <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '16px', marginBottom: '12px' }}>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Location: {location}</p>
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default PropertyCard;

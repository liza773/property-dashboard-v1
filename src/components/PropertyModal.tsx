import React from 'react';

type PropertyModalProps = {
  id: number;
  name: string;
  type: string;
  price: number;
  location: string;
  onClose: () => void;
  onDelete: (id: number) => void;
  onEdit?: (id: number) => void; // Optional
};

const PropertyModal: React.FC<PropertyModalProps> = ({
  id,
  name,
  type,
  price,
  location,
  onClose,
  onDelete,
  onEdit
}) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '320px',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            border: 'none',
            background: 'transparent',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>

        <h2>{name}</h2>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Price:</strong> ₹{price}</p>

        {/* Action buttons */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={() => onDelete(id)}
            style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>

          {onEdit && (
            <button
              onClick={() => onEdit(id)}
              style={{
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;

'use client';

import React, { useState } from 'react';

type Size = {
  _id: string;
  slug: string;
  name: string;
};

const AvailableSizeSelector = ({ sizes }: { sizes: Size[] }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div>
      <h5>Select Your Size</h5>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {sizes.map((size) => (
          <li key={size._id}>
            <button
              onClick={() => setSelectedSize(size.slug)}
              style={{
                padding: '10px 16px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: selectedSize === size.slug ? '#333' : '#f5f5f5',
                color: selectedSize === size.slug ? '#fff' : '#000',
                cursor: 'pointer',
              }}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedSize && (
        <p style={{ marginTop: '10px' }}>
          <strong>Selected Size:</strong> {selectedSize}
        </p>
      )}
    </div>
  );
};

export default AvailableSizeSelector;

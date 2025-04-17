'use client';

import React, { useState } from 'react';

type Size = {
  _id: string;
  slug: string;
  name: string;
};

const SLIM_SIZES = ['XS', 'S', 'M', 'L'];
const REGULAR_SIZES = ['XL', '2XL', '3XL', '4XL', '5XL'];

const AvailableSizeSelector = ({ sizes }: { sizes: Size[] }) => {
  const [selectedFit, setSelectedFit] = useState<'slim' | 'regular'>('slim');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const filteredSizes = sizes.filter((size) =>
    selectedFit === 'slim' ? SLIM_SIZES.includes(size.name) : REGULAR_SIZES.includes(size.name)
  );

  return (
    <div>
      {/* Fit Tabs */}
      <div className="fit-tabs">
        <label className={`fit-option slim-option ${selectedFit === 'slim' ? 'active' : ''}`}>
          <input
            type="radio"
            name="fit"
            checked={selectedFit === 'slim'}
            onChange={() => setSelectedFit('slim')}
          />
          SLIM FIT
        </label>
        <label className={`fit-option regular-option ${selectedFit === 'regular' ? 'active' : ''}`}>
          <input
            type="radio"
            name="fit"
            checked={selectedFit === 'regular'}
            onChange={() => setSelectedFit('regular')}
          />
          REGULAR FIT
        </label>
      </div>

      {/* Size Buttons */}
      <div className="size-buttons">
        {filteredSizes.map((size) => (
          <button
            key={size._id}
            className={selectedSize === size.slug ? 'active' : ''}
            onClick={() => setSelectedSize(size.slug)}
          >
            {size.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvailableSizeSelector;

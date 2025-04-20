'use client';

import React, { useState, useEffect } from 'react';
import { PRODUCT_PRICE_BY_SIZE } from '@/constants/apis';
import { formatPrice } from '@/utils/common.utils';
import userAxiosInstance from '@/config/userAxiosInstance';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/lib/redux/slices/loaderSlice';

type Size = {
  _id: string;
  slug: string;
  name: string;
};

const SLIM_SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const REGULAR_SIZES = ['M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

type Props = {
  sizes: Size[];
  productId?: string; // Optional for API calls
  basePrice?: number;
};

const AvailableSizeSelector = ({ sizes, productId, basePrice = 0 }: Props) => {
  const dispatch = useDispatch();
  const [selectedFit, setSelectedFit] = useState<'slim' | 'regular'>('slim');
  const [selectedSizeSlug, setSelectedSizeSlug] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(basePrice);

  const filteredSizes = sizes.filter((size) =>
    selectedFit === 'slim' ? SLIM_SIZES.includes(size.name) : REGULAR_SIZES.includes(size.name)
  );

  const handleSizeChange = async (slug: string) => {
    setSelectedSizeSlug(slug);
    if (!productId) return;

    dispatch(setLoading(true));
    try {
      const res = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE, {
        _id: productId,
        size: slug,
      });
      setPrice(res.data.data.price);
    } catch (err) {
      console.error('Error fetching price by size:', err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (filteredSizes.length && !selectedSizeSlug) {
      const firstSizeSlug = filteredSizes[0].slug;
      setSelectedSizeSlug(firstSizeSlug);
      if (productId) handleSizeChange(firstSizeSlug);
    }
  }, [selectedFit]);

  return (
    <div className="available-size-selector">
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

      <div className="size-buttons">
        {filteredSizes.map((size) => (
          <button
            key={size._id}
            className={selectedSizeSlug === size.slug ? 'active' : ''}
            onClick={() => handleSizeChange(size.slug)}
          >
            {size.name}
          </button>
        ))}
      </div>

      <div className="price-display">
        <strong>Price: {formatPrice(price)}</strong>
      </div>
    </div>
  );
};

export default AvailableSizeSelector;

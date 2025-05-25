'use client';

import React, { useState, useEffect } from 'react';
import { PRODUCT_PRICE_BY_SIZE_YARN_ID } from '@/constants/apis';
import userAxiosInstance from '@/config/userAxiosInstance';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { useRouter } from 'next/navigation';
type Size = {
  _id: string;
  slug: string;
  name: string;
};

type Props = {
  sizes: Size[];
  productId?: string; // Optional for API calls
  basePrice?: number;
  yarn?: string;
  gauge?: string;
  pattern?: string;
  style?: string;
  onPriceChange?: (price: number) => void;
};

const sizeMapping: any = {
  xs: "sizeFXS",
  s: "sizeFS",
  m: "sizeFM",
  l: "sizeFL",
  xl: "sizeFXL",
  '2xl': "sizeFXL2",
  '3xl': "sizeFXL3",
  '4xl': "sizeFXL4",
  '5xl': "sizeFXL5",
};

const AvailableSizeSelector = ({ sizes, basePrice = 0, yarn, gauge, pattern, style }: Props) => {
  const dispatch = useDispatch();
  const [selectedFit, setSelectedFit] = useState<'slim' | 'regular'>('slim');
  const [selectedSizeSlug, setSelectedSizeSlug] = useState<string | null>(null);
  const [, setPrice] = useState<number>(basePrice);
  const router = useRouter();

  const handleSizeChange = async (slug: string) => {
    setSelectedSizeSlug(slug);
    dispatch(setLoading(true));
    try {
      const res = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_YARN_ID, {
        yarnId: yarn,
        gaugeId: gauge,
        patternId: pattern,
        styleId: style,
        size: slug,
      });

      const mappedSizeKey = sizeMapping[slug.toLowerCase()];
      const fetchedPrice = res.data?.data[mappedSizeKey];

      if (fetchedPrice) {
        setPrice(fetchedPrice);
        // onPriceChange && onPriceChange(fetchedPrice);
        // Update the URL parameters with the new price
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('price', fetchedPrice);
        router.push(currentUrl.toString());

      }
    } catch (err) {
      console.error('Error fetching price by size:', err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (sizes.length && !selectedSizeSlug) {
      const firstSizeSlug = sizes[0].slug;
      setSelectedSizeSlug(firstSizeSlug);
      setSelectedFit('slim')
      // if (productId) handleSizeChange(firstSizeSlug);
      handleSizeChange(firstSizeSlug);
    }
  }, [selectedFit]);

  return (
    <div className="available-size-selector">
      <div className="size-buttons">
        {sizes.map((size) => (
          <button
            key={size._id}
            className={selectedSizeSlug === size.slug ? 'active' : ''}
            onClick={() => handleSizeChange(size.slug)}
          >
            {size.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvailableSizeSelector;

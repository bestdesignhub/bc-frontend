'use client';

import React, { useState, useEffect } from 'react';
import { PRODUCT_PRICE_BY_SIZE_YARN_ID } from '@/constants/apis';
import userAxiosInstance from '@/config/userAxiosInstance';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { useRouter, useSearchParams } from 'next/navigation';
type Size = {
  _id: string;
  slug: string;
  name: string;
};

// const SLIM_SIZES = ['XS', 'S', 'M', 'L', 'XL'];
// const REGULAR_SIZES = ['M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

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
  // const [price, setPrice] = useState<number>(basePrice);
  const router = useRouter();
  // const params = useParams();
  const searchParams = useSearchParams();
  console.log(searchParams, basePrice, 'params');


  // console.log(setSelectedFit('slim'));

  // const filteredSizes = sizes.filter((size) =>
  //   selectedFit === 'slim' ? SLIM_SIZES.includes(size.name) : REGULAR_SIZES.includes(size.name)
  // );

  // const handleSizeChange = async (slug: string) => {

  //   setSelectedSizeSlug(slug);
  //   // if (!productId) return;

  //   dispatch(setLoading(true));
  //   try {
  //     const res = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_YARN_ID, {
  //       yarnId: yarn,
  //       gaugeId: gauge,
  //       patternId: pattern,
  //       styleId: style,
  //       size: slug,
  //     });

  //     // const sizeKey = `sizeF${slug.toUpperCase()}`;
  //     const mappedSizeKey = sizeMapping[slug.toLowerCase()];

  //     // Get the price from the response using the key
  //     const fetchedPrice = res.data?.data[mappedSizeKey];
  //     console.log("price", fetchedPrice);

  //     if (fetchedPrice) {
  //       setPrice(fetchedPrice);

  //       // Call the parent's callback with the new price
  //       if (onPriceChange) {
  //         onPriceChange(fetchedPrice);
  //       }
  //     }
  //   } catch (err) {
  //     console.error('Error fetching price by size:', err);
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // };

  const handleSizeChange = async (slug: string) => {
    setSelectedSizeSlug(slug);
    dispatch(setLoading(true));
    try {
      const res = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_YARN_ID, {
        yarnId: yarn,
        gaugeId: gauge,
        patternId: pattern,
        styleId: style,
        genderId: searchParams.get('gender'),
        size: slug,
      });

      const mappedSizeKey = sizeMapping[slug.toLowerCase()];
      const fetchedPrice = res.data?.data[mappedSizeKey];

      if (fetchedPrice) {
        // setPrice(fetchedPrice);
        // onPriceChange && onPriceChange(fetchedPrice);
        // Update the URL parameters with the new price
        const currentUrl = new URLSearchParams(searchParams.toString());
        // const currentUrl = searchParams;
        currentUrl.set('price', fetchedPrice);
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
      {/* <div className="fit-tabs">
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
      </div> */}

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
      {/* <div className="price-display">
        <strong>Price: {formatPrice(price)}</strong>
      </div> */}
    </div>
  );
};

export default AvailableSizeSelector;

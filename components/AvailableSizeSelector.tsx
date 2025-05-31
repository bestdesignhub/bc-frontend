'use client';

import React, { useState, useEffect } from 'react';
// import { PRODUCT_PRICE_BY_SIZE_YARN_ID } from '@/constants/apis';
// import userAxiosInstance from '@/config/userAxiosInstance';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchPriceList } from '@/utils/server-api.utils';
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
  // const [price, setPrice] = useState<number>(basePrice);
  const router = useRouter();
  // const params = useParams();
  const searchParams = useSearchParams();
  console.log(searchParams, basePrice, 'params', yarn);

  const handleSizeChange = async (slug: string) => {
    setSelectedSizeSlug(slug);
    dispatch(setLoading(true));
    try {
      // const res = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_YARN_ID, {
      //   yarnId: yarn,
      //   gaugeId: gauge,
      //   patternId: pattern,
      //   styleId: style,
      //   genderId: searchParams.get('gender'),
      //   size: slug,
      // });

      const requestBody = {
        styleId: style,
        gaugeId: gauge,
        patternId: pattern,
        materialId: searchParams.get('material'),
        genderId: searchParams.get('gender'),
        size: 'l',
      };

      const priceData = await fetchPriceList(requestBody);
      console.log(priceData, "priceData");

      const mappedSizeKey = sizeMapping[slug.toLowerCase()];
      const fetchedPrice = priceData?.[`${mappedSizeKey}`];

      // if (fetchedPrice) {
      //   // setPrice(fetchedPrice);
      //   // onPriceChange && onPriceChange(fetchedPrice);
      //   // Update the URL parameters with the new price
      //   const currentUrl = new URLSearchParams(searchParams.toString());
      //   // const currentUrl = searchParams;
      //   currentUrl.set('price', fetchedPrice);
      //   currentUrl.set('size', selectedSizeSlug ?? 'l');
      //   // router.push(currentUrl.toString());
      //   router.push(`?${currentUrl.toString()}`);

      // }

      if (fetchedPrice) {
        // 🆕 Send size and price to API route
        await fetch('/api/save-selection', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            size: slug,
            price: fetchedPrice
          })
        });

        // 🔁 Refresh to re-render server components (which can now read cookies)
        router.refresh();
      }
    } catch (err) {
      console.error('Error fetching price by size:', err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (sizes.length && !selectedSizeSlug) {
      // if (details?.gender) {
      console.log("jdd", sizes);

      const defaultSize = searchParams.get('gender') === '6798793f705aedfe39db13b1' ? 'l' : 'm';
      // setSelectedSize(defaultSize);
      // }
      // const firstSizeSlug = sizes[0].slug;
      setSelectedSizeSlug(defaultSize);
      setSelectedFit('slim')
      // if (productId) handleSizeChange(firstSizeSlug);
      handleSizeChange(defaultSize);
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

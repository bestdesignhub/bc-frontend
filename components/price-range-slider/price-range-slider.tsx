'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { formatPrice } from '@/utils/common.utils';
import { URL_SLUG } from '@/constants';

const PriceRangeSlider = ({ min = 0, max = 1000, step = 10 }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialMin = Number(searchParams.get(URL_SLUG.MIN_PRICE)) || min;
  const initialMax = Number(searchParams.get(URL_SLUG.MAX_PRICE)) || max;

  const [priceRange, setPriceRange] = useState<[number, number]>([initialMin, initialMax]);

  // Store searchParams string separately
  const searchParamsString = searchParams ? searchParams.toString() : '';

  // Update URL when priceRange changes
  useEffect(() => {
    dispatch(setLoading(true));
    const [newMin, newMax] = priceRange;
    const params = new URLSearchParams(searchParamsString);

    params.set(URL_SLUG.MIN_PRICE, newMin.toString());
    params.set(URL_SLUG.MAX_PRICE, newMax.toString());

    router.push(`?${params.toString()}`, { scroll: false });
  }, [priceRange, router, searchParamsString]);

  // Stop loading when URL updates
  useEffect(() => {
    dispatch(setLoading(false));
  }, [searchParamsString]);

  return (
    <div className="py-4">
      <Slider
        range
        min={min}
        max={max}
        step={step}
        value={priceRange}
        onChange={(values) => setPriceRange(values as [number, number])}
        trackStyle={[{ backgroundColor: '#000', height: 6 }]}
        handleStyle={[
          { backgroundColor: '#000', borderColor: '#000' },
          { backgroundColor: '#000', borderColor: '#000' },
        ]}
      />

      <div className="flex justify-between gap-2 mt-2 text-sm range-price">
        <span>
          Min: <b>{formatPrice(priceRange[0])}</b>
        </span>
        <span>
          Max: <b>{formatPrice(priceRange[1])}</b>
        </span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;

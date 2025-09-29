// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css'; // Import rc-slider styles
// import { dispatch } from '@/lib/redux/store';
// import { setLoading } from '@/lib/redux/slices/loaderSlice';
// import { formatPrice } from '@/utils/common.utils';
// import { URL_SLUG } from '@/constants';

// const PriceRangeSlider = ({ min = 0, max = 1000, step = 10 }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   // const MIN_MARGIN = 10;

//   // Get initial values from URL or fallback to defaults
//   const initialMin = Number(searchParams.get(URL_SLUG.MIN_PRICE)) || min;
//   const initialMax = Number(searchParams.get(URL_SLUG.MAX_PRICE)) || max;

//   const [priceRange, setPriceRange] = useState<[number, number]>([initialMin, initialMax]);

//   // Start loading when priceRange changes
//   useEffect(() => {
//     dispatch(setLoading(true)); // Start loading on price range change
//     const [newMin, newMax] = priceRange;
//     const params = new URLSearchParams(searchParams.toString());

//     params.set(URL_SLUG.MIN_PRICE, newMin.toString());
//     params.set(URL_SLUG.MAX_PRICE, newMax.toString());

//     // Update the URL without scrolling
//     router.push(`?${params.toString()}`, { scroll: false });
//   }, [priceRange]);

//   // Stop loading only when searchParams changes
//   useEffect(() => {

//     dispatch(setLoading(false));
//   }, [searchParams]);
//   return (
//     <div className="py-4">
//       {/* rc-slider component */}
//       <Slider
//         range
//         min={min}
//         max={max}
//         step={step}
//         value={priceRange}
//         onChange={(values) => setPriceRange(values as [number, number])}
//         trackStyle={[{ backgroundColor: '#000', height: 6 }]}
//         handleStyle={[
//           { backgroundColor: '#000', borderColor: '#000' },
//           { backgroundColor: '#000', borderColor: '#000' },
//         ]}
//       />
//       <div className="flex justify-between gap-2 mt-2 text-sm range-price">
//         <span>
//           Min: <b>{formatPrice(priceRange[0])}</b>
//         </span>
//         <span>
//           Max: <b>{formatPrice(priceRange[1])}</b>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default PriceRangeSlider;


// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { dispatch } from '@/lib/redux/store';
// import { setLoading } from '@/lib/redux/slices/loaderSlice';
// import { formatPrice } from '@/utils/common.utils';
// import { URL_SLUG } from '@/constants';

// const PriceRangeSlider = ({ min = 0, max = 1000, step = 50 }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // Generate dropdown options
//   const options: number[] = [];
//   for (let i = min; i <= max; i += step) {
//     options.push(i);
//   }

//   // Initial values from URL or defaults
//   const initialMin = Number(searchParams.get(URL_SLUG.MIN_PRICE)) || min;
//   const initialMax = Number(searchParams.get(URL_SLUG.MAX_PRICE)) || max;

//   const [priceRange, setPriceRange] = useState<[number, number]>([initialMin, initialMax]);

//   // Update URL when dropdown changes
//   useEffect(() => {
//     dispatch(setLoading(true));

//     const [newMin, newMax] = priceRange;
//     const params = new URLSearchParams(searchParams.toString());

//     params.set(URL_SLUG.MIN_PRICE, newMin.toString());
//     params.set(URL_SLUG.MAX_PRICE, newMax.toString());

//     router.push(`?${params.toString()}`, { scroll: false });
//   }, [priceRange]);

//   // Stop loading when params update
//   useEffect(() => {
//     dispatch(setLoading(false));
//   }, [searchParams]);

//   return (
//     <div className="py-4 space-y-2">
//       <div className="flex items-center gap-4">
//         {/* Min Price Dropdown */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Min Price</label>
//           <select
//             className="border rounded p-2 text-sm"
//             value={priceRange[0]}
//             onChange={(e) => {
//               const newMin = Number(e.target.value);
//               setPriceRange([newMin, Math.max(newMin, priceRange[1])]); // ensure min <= max
//             }}
//           >
//             {options.map((value) => (
//               <option key={value} value={value}>
//                 {formatPrice(value)}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Max Price Dropdown */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Max Price</label>
//           <select
//             className="border rounded p-2 text-sm"
//             value={priceRange[1]}
//             onChange={(e) => {
//               const newMax = Number(e.target.value);
//               setPriceRange([Math.min(priceRange[0], newMax), newMax]); // ensure max >= min
//             }}
//           >
//             {options.map((value) => (
//               <option key={value} value={value}>
//                 {formatPrice(value)}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="flex justify-between text-sm mt-2">
//         <span>
//           Min: <b>{formatPrice(priceRange[0])}</b>
//         </span>
//         <span>
//           Max: <b>{formatPrice(priceRange[1])}</b>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default PriceRangeSlider;

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { formatPrice } from '@/utils/common.utils';
import { URL_SLUG } from '@/constants';

const PriceRangeSlider = ({ min = 100, max = 500, steps = 5 }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Calculate step size
  const stepSize = (max - min) / (steps - 1);

  // Generate dropdown options
  const options: number[] = Array.from({ length: steps }, (_, i) => min + i * stepSize);

  // Round options to integers
  const roundedOptions = options.map((v) => Math.round(v));

  // Initial values from URL or defaults
  const initialMin = Number(searchParams.get(URL_SLUG.MIN_PRICE)) || roundedOptions[0];
  const initialMax = Number(searchParams.get(URL_SLUG.MAX_PRICE)) || roundedOptions[roundedOptions.length - 1];

  const [priceRange, setPriceRange] = useState<[number, number]>([initialMin, initialMax]);

  // Update URL when dropdown changes
  useEffect(() => {
    dispatch(setLoading(true));

    const [newMin, newMax] = priceRange;
    const params = new URLSearchParams(searchParams.toString());

    params.set(URL_SLUG.MIN_PRICE, newMin.toString());
    params.set(URL_SLUG.MAX_PRICE, newMax.toString());

    router.push(`?${params.toString()}`, { scroll: false });
  }, [priceRange]);

  // Stop loading when params update
  useEffect(() => {
    dispatch(setLoading(false));
  }, [searchParams]);

  return (
    <div className="py-4 space-y-2">
      <div className="flex items-center gap-4">
        {/* Min Price Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1 labelValue">Min Price</label>
          <select
            className="border p-2 text-sm selectBox"
            value={priceRange[0]}
            onChange={(e) => {
              const newMin = Number(e.target.value);
              setPriceRange([newMin, Math.max(newMin, priceRange[1])]);
            }}
          >
            {roundedOptions.map((value) => (
              <option key={value} value={value}>
                {formatPrice(value)}
              </option>
            ))}
          </select>
        </div>

        {/* Max Price Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1 labelValue">Max Price</label>
          <select
            className="border p-2 text-sm selectBox selectBox"
            value={priceRange[1]}
            onChange={(e) => {
              const newMax = Number(e.target.value);
              setPriceRange([Math.min(priceRange[0], newMax), newMax]);
            }}
          >
            {roundedOptions.map((value) => (
              <option key={value} value={value}>
                {formatPrice(value)}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <div className="flex justify-between text-sm mt-2">
        <span>
          Min: <b>{formatPrice(priceRange[0])}</b>
        </span>
        <span>
          Max: <b>{formatPrice(priceRange[1])}</b>
        </span>
      </div> */}
    </div>
  );
};

export default PriceRangeSlider;

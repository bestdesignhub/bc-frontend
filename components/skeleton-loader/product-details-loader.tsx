'use client';

import { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import Loading from '../common/full-page-loading/loading';

const ProductDetailsSkeleton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <>
      <Loading />
      <ContentLoader
        speed={2}
        width="100%"
        height={isMobile ? 500 : 100}
        viewBox={isMobile ? '0 0 1200 500' : '0 0 1200 100'}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Centered Title */}
        {isMobile ? (
          <rect x="100" y="0" rx="5" ry="5" width="80%" height="500" />
        ) : (
          <rect x="0" y="20" rx="5" ry="5" width="80%" height="0" />
        )}
      </ContentLoader>
      <ContentLoader
        speed={2}
        width="100%"
        height={isMobile ? '800' : '600'}
        viewBox={isMobile ? '0 0 400 800' : '0 0 1300 600'}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Left Side: Product Image Placeholder */}
        {!isMobile && <rect x="100" y="0" rx="8" ry="8" width="500" height="500" />}

        {/* Right Side: Product Details Placeholders */}
        <rect
          x={isMobile ? '50' : '650'}
          y="0"
          rx="4"
          ry="4"
          width={isMobile ? '300' : '300'}
          height="30"
        />
        <rect
          x={isMobile ? '50' : '650'}
          y="50"
          rx="4"
          ry="4"
          width={isMobile ? '200' : '150'}
          height="20"
        />
        <rect
          x={isMobile ? '50' : '650'}
          y="100"
          rx="4"
          ry="4"
          width={isMobile ? '300' : '400'}
          height="20"
        />

        {/* Size Selection */}
        <rect x={isMobile ? '50' : '650'} y="140" rx="4" ry="4" width="70" height="30" />
        <rect x={isMobile ? '130' : '740'} y="140" rx="4" ry="4" width="70" height="30" />
        <rect x={isMobile ? '210' : '830'} y="140" rx="4" ry="4" width="70" height="30" />
        <rect x={isMobile ? '290' : '920'} y="140" rx="4" ry="4" width="70" height="30" />

        {/* Buttons */}
        <rect
          x={isMobile ? '50' : '650'}
          y="200"
          rx="4"
          ry="4"
          width={isMobile ? '140' : '150'}
          height="40"
        />
        <rect
          x={isMobile ? '210' : '820'}
          y="200"
          rx="4"
          ry="4"
          width={isMobile ? '140' : '200'}
          height="40"
        />

        {/* Description */}
        <rect
          x={isMobile ? '50' : '650'}
          y="270"
          rx="4"
          ry="4"
          width={isMobile ? '300' : '400'}
          height="20"
        />
        <rect
          x={isMobile ? '50' : '650'}
          y="310"
          rx="4"
          ry="4"
          width={isMobile ? '300' : '600'}
          height="15"
        />
        <rect
          x={isMobile ? '50' : '650'}
          y="335"
          rx="4"
          ry="4"
          width={isMobile ? '250' : '500'}
          height="15"
        />
      </ContentLoader>
    </>
  );
};

export default ProductDetailsSkeleton;

'use client';

import { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import Loading from '../common/full-page-loading/loading';

const CartSkeleton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile on initial render
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // Initial check
    window.addEventListener('resize', checkIsMobile); // Listen for resize events

    return () => {
      window.removeEventListener('resize', checkIsMobile); // Cleanup
    };
  }, []);
  return (
    <>
      <Loading />
      <ContentLoader
        speed={2}
        width="100%"
        height={100}
        viewBox={'0 0 1200 100'}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Centered Title */}
        <rect x="10%" y="20" rx="5" ry="5" width="80%" height="40" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width="100%"
        height={isMobile ? '800' : '600'}
        viewBox={isMobile ? '0 0 400 800' : '0 0 1200 600'}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Left Side: Cart Products */}
        {isMobile ? (
          <>
            <rect x="20" y="20" rx="8" ry="8" width="360" height="120" />
            <rect x="20" y="160" rx="8" ry="8" width="360" height="120" />
            <rect x="20" y="300" rx="8" ry="8" width="360" height="120" />
          </>
        ) : (
          <>
            <rect x="20" y="20" rx="8" ry="8" width="700" height="120" />
            <rect x="20" y="160" rx="8" ry="8" width="700" height="120" />
            <rect x="20" y="300" rx="8" ry="8" width="700" height="120" />
          </>
        )}

        {/* Right Side: Order Summary */}
        {!isMobile && <rect x="750" y="20" rx="8" ry="8" width="400" height="250" />}
      </ContentLoader>
    </>
  );
};

export default CartSkeleton;

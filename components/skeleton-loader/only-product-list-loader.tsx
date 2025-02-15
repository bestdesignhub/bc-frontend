'use client';

import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import Loading from '../common/full-page-loading/loading';

const OnlyProductListSkeletonLoader = () => {
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
        height="100%"
        viewBox={isMobile ? '0 0 400 1000' : '0 0 1200 1000'}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {isMobile ? (
          // Mobile View: One product card per row
          <>
            <rect x="20" y="50" rx="5" ry="5" width="360" height="250" />
            <rect x="20" y="320" rx="5" ry="5" width="360" height="250" />
            <rect x="20" y="590" rx="5" ry="5" width="360" height="250" />
          </>
        ) : (
          // Desktop View: Three product cards in a row
          <>
            <rect x="20" y="50" rx="5" ry="5" width="360" height="250" />
            <rect x="410" y="50" rx="5" ry="5" width="360" height="250" />
            <rect x="800" y="50" rx="5" ry="5" width="360" height="250" />
            <rect x="20" y="320" rx="5" ry="5" width="360" height="250" />
            <rect x="410" y="320" rx="5" ry="5" width="360" height="250" />
            <rect x="800" y="320" rx="5" ry="5" width="360" height="250" />
          </>
        )}
        {/* Pagination Skeleton */}
        <rect x={isMobile ? '100' : '500'} y="650" rx="5" ry="5" width="200" height="40" />
      </ContentLoader>
    </>
  );
};

export default OnlyProductListSkeletonLoader;

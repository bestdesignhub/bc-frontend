'use client';

import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import Loading from '../common/full-page-loading/loading';
import BannerTitleLoader from './banner-skeleton-loader';

const StepPageSkeletonLoader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
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
      <BannerTitleLoader />
      <ContentLoader
        speed={2}
        width="100%"
        height={60}
        viewBox="0 0 100% 60"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Centered Title */}
        <rect x="10%" y="20" rx="5" ry="5" width="80%" height="50" />
      </ContentLoader>
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
      </ContentLoader>
    </>
  );
};

export default StepPageSkeletonLoader;

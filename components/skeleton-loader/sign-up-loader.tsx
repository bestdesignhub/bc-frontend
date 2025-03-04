'use client';

import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import Loading from '../common/full-page-loading/loading';

const SignUpSkeleton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <rect x="0" y="20" rx="5" ry="5" width="80%" height="0" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width="100%"
        height={isMobile ? '700' : '500'}
        viewBox={isMobile ? '0 0 400 700' : '0 0 800 500'}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Title */}
        <rect x="40%" y="10" rx="4" ry="4" width="150" height="30" />

        {/* First Row */}
        <rect x="50" y="60" rx="4" ry="4" width={isMobile ? '300' : '320'} height="50" />
        {!isMobile && <rect x="420" y="60" rx="4" ry="4" width="320" height="50" />}

        {/* Second Row */}
        <rect x="50" y="130" rx="4" ry="4" width={isMobile ? '300' : '320'} height="50" />
        {!isMobile && <rect x="420" y="130" rx="4" ry="4" width="320" height="50" />}

        {/* Third Row */}
        <rect x="50" y="200" rx="4" ry="4" width={isMobile ? '300' : '320'} height="50" />
        {!isMobile && <rect x="420" y="200" rx="4" ry="4" width="320" height="50" />}

        {/* Fourth Row */}
        <rect x="50" y="270" rx="4" ry="4" width={isMobile ? '300' : '320'} height="50" />
        {!isMobile && <rect x="420" y="270" rx="4" ry="4" width="320" height="50" />}

        {/* Fifth Row */}
        <rect x="50" y="340" rx="4" ry="4" width={isMobile ? '300' : '320'} height="50" />
        {!isMobile && <rect x="420" y="340" rx="4" ry="4" width="320" height="50" />}

        {/* Button */}
        <rect x="50" y="420" rx="4" ry="4" width={isMobile ? '300' : '690'} height="50" />

        {/* Login Text */}
        <rect x="40%" y="490" rx="4" ry="4" width="120" height="20" />
      </ContentLoader>
    </>
  );
};

export default SignUpSkeleton;

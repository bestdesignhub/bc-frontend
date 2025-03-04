'use client';

import Loading from '@/components/common/full-page-loading/loading';
import BannerSkeletonLoader from '@/components/skeleton-loader/banner-skeleton-loader';
import ProductListSkeleton from '@/components/skeleton-loader/product-list-skeleton-loader';
import React, { useEffect, useState } from 'react';

const ProductListingLoaderPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on initial render
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
      <BannerSkeletonLoader />
      <ProductListSkeleton isMobile={isMobile} />
    </>
  );
};

export default ProductListingLoaderPage;

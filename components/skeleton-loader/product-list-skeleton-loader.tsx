import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductListSkeleton = ({ isMobile }: { isMobile: boolean }) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 1200 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Sidebar (only for larger devices) */}
    {!isMobile && <rect x="20" y="20" rx="5" ry="5" width="200" height="300" />}

    {/* Top Header */}
    <rect
      x={isMobile ? '20' : '240'}
      y="20"
      rx="5"
      ry="5"
      width={isMobile ? '90%' : '940'}
      height="50"
    />

    {/* Product Cards */}
    <rect
      x={isMobile ? '20' : '240'}
      y="90"
      rx="5"
      ry="5"
      width={isMobile ? '90%' : '300'}
      height="200"
    />
    {!isMobile && (
      <>
        <rect x="560" y="90" rx="5" ry="5" width="300" height="200" />
        <rect x="880" y="90" rx="5" ry="5" width="300" height="200" />
        <rect x="240" y="310" rx="5" ry="5" width="300" height="200" />
        <rect x="560" y="310" rx="5" ry="5" width="300" height="200" />
        <rect x="880" y="310" rx="5" ry="5" width="300" height="200" />
      </>
    )}

    {/* Pagination */}
    <rect
      x={isMobile ? '20' : '500'}
      y={isMobile ? '320' : '550'}
      rx="5"
      ry="5"
      width={isMobile ? '90%' : '200'}
      height="40"
    />
  </ContentLoader>
);

export default ProductListSkeleton;

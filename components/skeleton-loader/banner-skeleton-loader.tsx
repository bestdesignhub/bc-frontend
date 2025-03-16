import React from 'react';
import ContentLoader from 'react-content-loader';

const BannerTitleLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={150}
    viewBox="0 0 100% 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Centered Title */}
    <rect x="10%" y="20" rx="5" ry="5" width="80%" height="40" />
    {/* Centered Subtitle */}
    <rect x="20%" y="80" rx="5" ry="5" width="60%" height="20" />
  </ContentLoader>
);

export default BannerTitleLoader;

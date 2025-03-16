import ContentLoader from 'react-content-loader';
import Loading from '../common/full-page-loading/loading';
import { useCallback } from 'react';

const AccountSkeletonLoader = () => {
  useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <>
      <Loading />
      <ContentLoader
        speed={2}
        width="100%" // Explicit width to match viewBox
        height="700" // Adjusted height
        viewBox="0 0 1200 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        preserveAspectRatio="none" // Prevent unwanted spacing
      >
        {/* Title Card */}
        <rect x="0" y="0" rx="8" ry="8" width="100%" height="50" />

        {/* Profile Card */}
        <rect x="0" y="70" rx="8" ry="8" width="100%" height="400" />

        {/* Change Password Card */}
        <rect x="0" y="490" rx="8" ry="8" width="100%" height="200" />
      </ContentLoader>
    </>
  );
};

export default AccountSkeletonLoader;

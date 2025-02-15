'use client';

import { setIsPageSwitchLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const usePageSwitch = () => {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  useEffect(() => {
    dispatch(setIsPageSwitchLoading(false));
  }, [searchParamsString]);
};

export default usePageSwitch;

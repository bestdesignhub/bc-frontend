'use client';

import React from 'react';
import Loading from './loading';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

const FullPageLoading = () => {
  const { isLoading, isPageSwitchLoading } = useSelector((state: RootState) => state.loader);
  return <>{(isLoading || isPageSwitchLoading) && <Loading />}</>;
};

export default FullPageLoading;

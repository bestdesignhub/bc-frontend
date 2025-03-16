'use client';

import { useState } from 'react';
import ViewContext from './view-context';
import { ViewLayoutType } from '@/types';

const ViewProvider = ({ children }: { children: React.ReactNode }) => {
  const [view, setView] = useState<ViewLayoutType>('grid');

  return <ViewContext.Provider value={{ view, setView }}>{children}</ViewContext.Provider>;
};

export default ViewProvider;

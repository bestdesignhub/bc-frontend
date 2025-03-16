'use client';

import { ViewLayoutType } from '@/types';
import { createContext } from 'react';

type ViewContextType = {
  view: ViewLayoutType;
  setView: (view: ViewLayoutType) => void;
};

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export default ViewContext;

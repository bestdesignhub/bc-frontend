import { ViewContext } from '@/context';
import { useContext } from 'react';

const useView = () => {
  const context = useContext(ViewContext);
  if (!context) throw new Error('useView must be used within a ViewProvider');
  return context;
};

export default useView;

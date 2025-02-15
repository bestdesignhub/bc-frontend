import { useEffect, useRef } from 'react';

const useClickOutside = <T extends HTMLElement>(callback: () => void) => {
  const elementRef = useRef<T | null>(null); // Generic ref type

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return elementRef;
};

export default useClickOutside;

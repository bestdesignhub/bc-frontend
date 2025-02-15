'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Form } from 'react-bootstrap';
import { useDebounce } from '@/hooks';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';

interface DebounceSearchProps {
  paramName?: string; // Query param name, default is '_search'
  placeholder?: string;
  debounceTime?: number; // Debounce delay, default is 500ms
}

const DebounceSearch: React.FC<DebounceSearchProps> = ({
  paramName = '_search',
  placeholder = 'Search here...',
  debounceTime = 500,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get(paramName) || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const debouncedSearchQuery = useDebounce(searchQuery, debounceTime);

  useEffect(() => {
    if (debouncedSearchQuery !== initialQuery) {
      // Show loader only when the debounced query is different from the initial query
      dispatch(setLoading(true));
    }
    const currentParams = new URLSearchParams(window.location.search);

    if (debouncedSearchQuery) {
      currentParams.set(paramName, debouncedSearchQuery);
    } else {
      currentParams.delete(paramName);
    }

    router.push(`?${currentParams.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery, router, paramName]);

  const searchParamsString = searchParams.toString();
  useEffect(() => {
    dispatch(setLoading(false));
  }, [searchParamsString]);

  return (
    <Form.Group>
      <Form.Control
        type="search"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Form.Group>
  );
};

export default DebounceSearch;

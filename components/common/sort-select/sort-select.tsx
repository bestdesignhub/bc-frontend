'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Form } from 'react-bootstrap';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';

interface SortSelectProps {
  options: { label: string; value: string }[];
  paramBy?: string;
  paramOrder?: string;
  defaultOptionText?: string;
}

const SortSelect: React.FC<SortSelectProps> = ({
  options,
  paramBy = '_by',
  paramOrder = '_order',
  defaultOptionText = 'Select an option',
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial values from URL or set empty as default (no pre-selection)
  const initialBy = searchParams.get(paramBy) || '';
  const initialOrder = searchParams.get(paramOrder) || '';

  const [sortBy, setSortBy] = useState(initialBy);
  const [sortOrder, setSortOrder] = useState(initialOrder);

  useEffect(() => {
    if (sortBy && sortOrder) {
      dispatch(setLoading(true));
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set(paramBy, sortBy);
      currentParams.set(paramOrder, sortOrder);

      router.push(`?${currentParams.toString()}`, { scroll: false });
    }
  }, [sortBy, sortOrder, router, paramBy, paramOrder]);

  const searchParamsString = searchParams.toString();
  useEffect(() => {
    dispatch(setLoading(false));
  }, [searchParamsString]);

  return (
    <Form.Group>
      <Form.Select
        aria-label="Sort by"
        value={sortBy && sortOrder ? `${sortBy}-${sortOrder}` : ''}
        onChange={(e) => {
          const [newBy, newOrder] = e.target.value.split('-');
          setSortBy(newBy);
          setSortOrder(newOrder);
        }}
      >
        <option value="" disabled>
          {defaultOptionText}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default SortSelect;

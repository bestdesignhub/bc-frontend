'use client';

import { DropDownOptionType } from '@/types';
import React, { FC, useEffect } from 'react';
import { Accordion, Form, InputGroup } from 'react-bootstrap';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/lib/redux/slices/loaderSlice';

interface Props {
  genders: DropDownOptionType[];
  colours: DropDownOptionType[];
  materials: DropDownOptionType[];
}

const FILTERS = [
  { key: '_gender', label: 'Gender', field: 'genders' },
  { key: '_colour', label: 'Colour', field: 'colours' },
  { key: '_material', label: 'Material', field: 'materials' },
];

const YarnListingSidebar: FC<Props> = ({ colours, genders, materials }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const optionsMap: Record<string, DropDownOptionType[]> = { genders, colours, materials };

  const updateParams = (key: string, value: string) => {
    dispatch(setLoading(true)); // Start loader

    const params = new URLSearchParams(searchParams.toString());

    // If the selected option is already in the URL, unselect it by deleting the parameter
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      // Set the parameter to the selected value
      params.set(key, value);
    }

    router.push(`?${params.toString()}`);
  };

  const searchParamsString = searchParams.toString();
  useEffect(() => {
    dispatch(setLoading(false));
  }, [searchParamsString, dispatch]);

  return (
    <div className="sidebar">
      <Accordion defaultActiveKey="0">
        {FILTERS.map(({ key, label, field }, index) => (
          <Accordion.Item eventKey={String(index)} key={key}>
            <Accordion.Header>{label}</Accordion.Header>
            <Accordion.Body>
              <InputGroup className="gender-checkbox">
                {optionsMap[field].map((option) => (
                  <Form.Check
                    inline
                    key={option.value}
                    label={option.label}
                    name={key}
                    type="checkbox" // Using checkbox for toggling behavior
                    id={option.value}
                    checked={searchParams.get(key) === option.value} // Check if this option is selected
                    onChange={() => updateParams(key, option.value)} // Toggle the selection
                  />
                ))}
              </InputGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default YarnListingSidebar;

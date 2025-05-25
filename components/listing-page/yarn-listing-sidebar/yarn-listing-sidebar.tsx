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
  price: number
}

const FILTERS = [
  // { key: 'gender', label: 'Gender', field: 'genders' },
  { key: 'colour', label: 'Colour', field: 'colours' },
  { key: 'material', label: 'Material', field: 'materials' },
];

const YarnListingSidebar: FC<Props> = ({ colours, genders, materials, price }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  console.log(price);



  const optionsMap: Record<string, DropDownOptionType[]> = { genders, colours, materials };

  const updateParams = (key: string, value: string) => {
    dispatch(setLoading(true));

    const params = new URLSearchParams(searchParams.toString());


    if (params.get(key) === value) {
      params.delete(key);
    } else {
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
                {optionsMap[field].map((option) => {
                  const isChecked = searchParams.get(key) === option.value;
                  return (
                    <Form.Check
                      inline
                      key={option.value}
                      label={option.label}
                      name={key}
                      type="checkbox"
                      id={option.value}
                      checked={isChecked}
                      onChange={() => updateParams(key, option.value)}
                    />
                  );
                })}
              </InputGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default YarnListingSidebar;

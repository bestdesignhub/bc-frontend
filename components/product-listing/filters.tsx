'use client';

import { DropDownOptionType } from '@/types';
import React, { FC, useEffect } from 'react';
import { Accordion, Form, InputGroup } from 'react-bootstrap';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { PriceRangeSlider } from '../price-range-slider';

interface Props {
  genders?: DropDownOptionType[];
  colours: DropDownOptionType[];
  materials: DropDownOptionType[];
  patterns: DropDownOptionType[];
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
  filtersOptions: {
    key: string;
    label: string;
    field: string;
  }[];
}

const ProductListFilters: FC<Props> = ({
  colours,
  genders = [],
  materials,
  patterns,
  priceRange,
  filtersOptions,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  // const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>({});

  // // Initialize selectedValues based on searchParams
  // useEffect(() => {
  //   const newSelectedValues: Record<string, string[]> = {};
  //   filtersOptions.forEach(({ key }) => {
  //     const values = searchParams.getAll(key);
  //     newSelectedValues[key] = values.length > 0 ? values : [];
  //   });
  //   setSelectedValues(newSelectedValues);
  // }, [searchParams, filtersOptions]);

  // const genderId = searchParams.get("gender")
  const params = new URLSearchParams(searchParams.toString());
  params.delete("gender");
  // const selectedValues = (key: string): string[] => searchParams.getAll(key);

  const optionsMap: Record<string, DropDownOptionType[]> = {
    genders,
    colours,
    materials,
    patterns,
  };

  const updateParams = (key: string, value: string) => {
    dispatch(setLoading(true)); // Start loader

    const params = new URLSearchParams(searchParams.toString());
    // console.log('params', params.get("gender"));
    // console.log('genders', genders);


    // If the selected option is already in the URL, unselect it by deleting the parameter
    // if (params.get(key) === value) {
    //   params.delete(key);
    // } else {
    //   // Set the parameter to the selected value
    //   params.set(key, value);
    // }

    // const values = params.getAll(key);

    // if (values.includes(value)) {
    //   const updatedValues = values.filter((v) => v !== value);
    //   params.delete(key);
    //   updatedValues.forEach((v) => params.append(key, v));
    // } else {
    //   params.append(key, value);
    // }

    const currentValues = params.getAll(key);

    if (currentValues.includes(value)) {
      // Remove the value
      const newValues = currentValues.filter((v) => v !== value);
      params.delete(key);
      newValues.forEach((v) => params.append(key, v));
    } else {
      // Add the new value
      params.delete(key);
      params.append(key, value);
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
        {filtersOptions.map(({ key, label, field }, index) => (
          <Accordion.Item eventKey={String(index)} key={key}>
            <Accordion.Header>{label}</Accordion.Header>
            <Accordion.Body>
              <InputGroup className="gender-checkbox">
                {optionsMap[field].map((option) => (
                  // <Form.Check
                  //   inline
                  //   key={option.value}
                  //   label={option.label}
                  //   name={key}
                  //   type="checkbox" // Using checkbox for toggling behavior
                  //   id={option.value}
                  //   // checked={selectedValues[key]?.includes(option.value) || false}
                  //   // defaultChecked={searchParams.get(key) === option.value}
                  //   // checked={searchParams.getAll(key).includes(option.value)}
                  //   checked={genderId === option.value} // Check if this option is selected
                  //   onChange={() => updateParams(key, option.value)} // Toggle the selection
                  // />


                  <Form.Check
                    inline
                    key={option.value}
                    label={option.label}
                    name={key}
                    type="checkbox"
                    id={`${key}-${option.value}`}
                    checked={searchParams.getAll(key).includes(option.value)}
                    onChange={() => updateParams(key, option.value)}
                  />



                ))}
              </InputGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <PriceRangeSlider max={priceRange?.maxPrice} min={priceRange?.minPrice} step={1} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProductListFilters;

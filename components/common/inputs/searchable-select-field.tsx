'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import { Form, FormControl, ListGroup, Image } from 'react-bootstrap';
import { DropDownOptionType } from '@/types';

interface SearchableDropdownProps {
  name: string;
  options: DropDownOptionType[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  handleOnSelect?: (option: DropDownOptionType) => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  name,
  options,
  label,
  placeholder,
  required,
  handleOnSelect,
}) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const [filteredOptions, setFilteredOptions] = useState<DropDownOptionType[]>(options);
  const [inputValue, setInputValue] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference for detecting clicks outside

  const selectedValue = watch(name); // Get selected value

  // Set input field to the correct label when value changes
  useEffect(() => {
    const selectedOption = options.find((opt) => opt.value === selectedValue);
    setInputValue(selectedOption ? selectedOption.label : '');
  }, [selectedValue, options]);

  // Handle search input change
  const handleInputChange = (input: string) => {
    setInputValue(input);
    if (input.trim() === '') {
      setFilteredOptions(options); // Show all options when input is empty
    } else {
      setFilteredOptions(
        options.filter((option) => option.label.toLowerCase().includes(input.toLowerCase()))
      );
    }
    setShowDropdown(true);
  };

  // Handle selection from dropdown
  const handleSelect = (option: DropDownOptionType) => {
    handleOnSelect?.(option);
    setValue(name, option.value); // Store value, not label
    setInputValue(option.label); // Show label in input
    setShowDropdown(false);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false); // Close dropdown if clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const error = errors[name] as FieldError | undefined;

  return (
    <Form.Group controlId={name} ref={dropdownRef}>
      <FormControl
        type="text"
        placeholder={`Search ${label ?? placeholder}...`} // Placeholder required for FloatingLabel to work
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => {
          setFilteredOptions(options);
          setShowDropdown(true);
        }}
        autoComplete="off"
      />
      {label && (
        <Form.Label className="text-lg font-semibold mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Form.Label>
      )}

      {showDropdown && filteredOptions.length > 0 && (
        <ListGroup
          style={{
            position: 'absolute',
            zIndex: 1000,
            backgroundColor: 'white',
            maxHeight: '200px',
            overflowY: 'auto',
          }}
        >
          {filteredOptions.map((option) => (
            <ListGroup.Item
              key={option.value}
              action
              onClick={() => handleSelect(option)}
              className="d-flex align-items-center"
            >
              {option.image && (
                <Image
                  src={option.image}
                  alt={option.label}
                  width={30}
                  height={30}
                  className="me-2"
                  roundedCircle
                />
              )}
              {option.label}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {error && <Form.Text className="text-danger">{error.message}</Form.Text>}
    </Form.Group>
  );
};

export default SearchableDropdown;

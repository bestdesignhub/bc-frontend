'use client';
import useClickOutside from '@/hooks/useClickOutside';
import Image from 'next/image';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FieldError, useFormContext } from 'react-hook-form';

interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: { value: string; label: string; image?: string }[];
  required?: boolean;
  rules?: object;
  isSearchable?: boolean;
  [key: string]: any;
}

const SelectField: React.FC<SelectProps> = ({
  name,
  label,
  placeholder,
  options,
  required = false,
  rules = {},
  isSearchable = true,
  ...rest
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsDropdownVisible(false));

  const { onChange, ...registerProps } = register(name, {
    required: required ? `${label} is required` : false,
    ...rules,
  });

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (value: string, label: string) => {
    setSearchTerm(label);
    setValue(name, value);
    setIsDropdownVisible(false);
  };

  return (
    <div className="position-relative" ref={dropdownRef}>
      {isSearchable ? (
        // Searchable Input
        <Form.Control
          type="text"
          placeholder={`Search or select ${label ?? placeholder}`}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDropdownVisible(true);
            onChange(e);
          }}
          onFocus={() => setIsDropdownVisible(true)}
          // {...registerProps}
          {...rest}
          autoComplete="off"
        />
      ) : (
        // Non-searchable Dropdown
        <Form.Select
          {...registerProps}
          {...rest}
          onChange={(e) => {
            setValue(name, e.target.value);
          }}
          autoComplete="off"
        >
          <option value="">{`Select ${label ?? placeholder}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      )}
      {/* Dropdown Menu (only visible when searchable and input is focused) */}
      {isSearchable && isDropdownVisible && filteredOptions.length > 0 && (
        <ul className="dropdown-menu show w-100" style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option.value, option.label)}
            >
              {option?.image && (
                <Image
                  src={option.image}
                  alt={option.label}
                  className="w-6 h-6 mr-2 rounded-full"
                  width={30}
                  height={30}
                />
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {label && (
        <Form.Label className="text-lg font-semibold mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Form.Label>
      )}
      {/* Error Message */}
      {error && <Form.Text className="text-danger">{error.message}</Form.Text>}
    </div>
  );
};

export default SelectField;

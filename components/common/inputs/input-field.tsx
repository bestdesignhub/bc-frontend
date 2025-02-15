'use client';

import React from 'react';
import { Form } from 'react-bootstrap';
import { FieldError, useFormContext } from 'react-hook-form';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  rules?: object; // Add rules for custom validation
  [key: string]: any;
}

const InputField: React.FC<InputProps> = ({
  name,
  label,
  placeholder = '',
  type = 'text',
  required = false,
  rules = {},
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  return (
    <>
      <Form.Control
        type={type}
        placeholder={placeholder}
        isInvalid={!!error}
        {...register(name, {
          required: required ? `${label ?? placeholder} is required` : false,
          ...rules,
        })}
        {...rest}
      />

      {label && (
        <Form.Label>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Form.Label>
      )}
      {error && <Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback>}
    </>
  );
};

export default InputField;

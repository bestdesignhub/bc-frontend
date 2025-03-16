'use client';

import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FieldError, useFormContext } from 'react-hook-form';
import { PasswordLockIcon, PasswordUnLockIcon } from '@/components';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  rules?: object; // Add rules for custom validation
  [key: string]: any;
}

const PasswordInputField: React.FC<InputProps> = ({
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

  const [showPassword, setShowPassword] = useState(false);
  const error = errors[name] as FieldError | undefined;

  return (
    <>
      <InputGroup>
        <Form.Control
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          isInvalid={!!error}
          {...register(name, {
            required: required ? `${label ?? placeholder} is required` : false,
            ...rules,
          })}
          {...rest}
        />
        {type === 'password' && (
          <InputGroup.Text
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ cursor: 'pointer' }}
          >
            {showPassword ? <PasswordLockIcon /> : <PasswordUnLockIcon />}
          </InputGroup.Text>
        )}
      </InputGroup>
      {label && (
        <Form.Label>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Form.Label>
      )}
      {error && (
        <div className="invalid" style={{ color: 'var(--bs-form-invalid-color)' }}>
          {error?.message}
        </div>
      )}
    </>
  );
};

export default PasswordInputField;

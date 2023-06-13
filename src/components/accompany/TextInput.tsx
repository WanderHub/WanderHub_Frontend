import React, { ChangeEvent } from 'react';

export interface TextInputProps {
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  classNameProps?: string;
  id?: string;
  type:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'tel'
    | 'url'
    | 'date'
    | 'time'
    | 'checkbox'
    | 'radio'
    | 'file';
  compType?: string;
  isReadOnly: boolean;
}
const TextInput = ({
  placeholder,
  value,
  handleChange,
  classNameProps,
  id,
  type,
  isReadOnly,
}: TextInputProps) => (
  <input
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
    type={type}
    id={id}
    readOnly={isReadOnly}
    className={classNameProps ?? 'border-2 w-8/12 h-9 px-3'}
  />
);

export default TextInput;

import React, { ChangeEvent } from 'react';

export interface TextareaProps {
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  classNameProps?: string;
  id?: string;
  isReadOnly: boolean;
  compType?: string;
}
const Textarea = ({
  placeholder,
  value,
  handleChange,
  classNameProps,
  id,
  isReadOnly,
}: TextareaProps) => (
  <textarea
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
    id={id}
    readOnly={isReadOnly}
    className={classNameProps ?? 'border-2 w-8/12 h-9 px-3'}
  />
);

export default Textarea;

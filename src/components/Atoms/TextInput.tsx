import React from 'react';

export interface TextInputProps {
  classNameProps?: string;
}
const TextInput = ({ classNameProps }: TextInputProps) => {
  return <input type="text" className={classNameProps ?? 'border-2 w-8/12 h-9 px-3'} />;
};

export default TextInput;

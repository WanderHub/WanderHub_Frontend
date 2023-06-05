import React from 'react';
import Button, { ButtonProps } from '@components/Atoms/Button';
import TextInput, { TextInputProps } from '@components/Atoms/TextInput';

interface SearchProps {
  BoxClassNameProps?: string;
  buttonProps: ButtonProps;
  inputProps?: TextInputProps;
}
const Search = ({ BoxClassNameProps, buttonProps, inputProps }: SearchProps) => {
  return (
    <div className={BoxClassNameProps ?? 'my-3 text-center'}>
      <TextInput {...inputProps} />
      <Button {...buttonProps}>{buttonProps?.children}</Button>
    </div>
  );
};

export default Search;

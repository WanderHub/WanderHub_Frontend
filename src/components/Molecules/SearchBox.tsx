import React from 'react';
import Button, { ButtonProps } from '@components/Atoms/Button';
import TextInput, { TextInputProps } from '@components/Atoms/TextInput';

interface SearchBoxProps {
  BoxClassNameProps?: string;
  buttonProps: ButtonProps;
  inputProps?: TextInputProps;
}
const SearchBox = ({ BoxClassNameProps, buttonProps, inputProps }: SearchBoxProps) => {
  return (
    <div className={BoxClassNameProps ?? 'my-3 text-center'}>
      <TextInput {...inputProps} />
      <Button {...buttonProps}>{buttonProps?.children}</Button>
    </div>
  );
};

export default SearchBox;

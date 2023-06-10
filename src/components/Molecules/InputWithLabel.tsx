import Label, { LabelProps } from '@components/Atoms/Label';
import TextInput, { TextInputProps } from '@components/Atoms/TextInput';
import React from 'react';

interface InputWithLabelProps {
  labelProps: LabelProps;
  inputProps: TextInputProps;
}

const InputWithLabel = ({ labelProps, inputProps }: InputWithLabelProps) => {
  return (
    <>
      <Label {...labelProps} />
      <TextInput {...inputProps} />
    </>
  );
};

export default InputWithLabel;

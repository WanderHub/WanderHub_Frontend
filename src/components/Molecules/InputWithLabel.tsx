import Label, { LabelProps } from '@components/Atoms/Label';
import TextInput, { TextInputProps } from '@components/Atoms/TextInput';
import React from 'react';
import SearchWithIcon from './SearchWithIcon';
import Textarea, { TextareaProps } from '@components/Atoms/Textarea';

interface InputWithLabelProps {
  labelProps: LabelProps;
  inputProps: TextInputProps;
  textareaProps: TextareaProps;
}

const InputWithLabel = ({ labelProps, inputProps, textareaProps }: InputWithLabelProps) => {
  const TextFieldOption = (compType: string | undefined) => {
    switch (compType) {
      case 'input':
        return <TextInput {...inputProps} />;
      case 'iconInput':
        return <SearchWithIcon {...inputProps} isModal={true} />;
      case 'textarea':
        return <Textarea {...textareaProps} />;
      default:
        return <div>Default Option</div>;
    }
  };
  return (
    <>
      <Label {...labelProps} />
      {TextFieldOption(inputProps.compType)}
    </>
  );
};

export default InputWithLabel;

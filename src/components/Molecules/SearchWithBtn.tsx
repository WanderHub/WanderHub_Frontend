import React from 'react';
import Button from '@components/Atoms/Button';
import TextInput from '@components/Atoms/TextInput';
import useInput from '@/hooks/useInput';

interface SearchWithBtnProps {
  BoxClassNameProps?: string;
  isReset: boolean;
  buttonProps: {
    children: string;
    classNameProps?: string;
    type?: 'button' | 'submit' | 'reset';
  };
  inputProps: {
    classNameProps?: string;
    placeholder: string;
  };
}
const SearchWithBtn = ({
  BoxClassNameProps,
  isReset,
  buttonProps,
  inputProps,
}: SearchWithBtnProps) => {
  const [targetVal, onChangeTarget, resetValue] = useInput('');
  const handleSearch = () => {
    console.log('검색어:', targetVal);
    if (isReset) resetValue();
  };
  return (
    <div className={BoxClassNameProps ?? 'my-3 text-center'}>
      <TextInput
        {...inputProps}
        value={targetVal}
        type="text"
        handleChange={onChangeTarget}
        isReadOnly={false}
      />
      <Button clickEvent={handleSearch} type={buttonProps.type}>
        {buttonProps?.children}
      </Button>
    </div>
  );
};

export default SearchWithBtn;

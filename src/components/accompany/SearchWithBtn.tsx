import React from 'react';
import Button from '@components/accompany/Button';
import TextInput from '@components/accompany/TextInput';
import useInput from '@/hooks/useInput';

interface SearchWithBtnProps {
  BoxClassNameProps?: string;
  isReset: boolean;
  buttonProps: {
    children: string;
    classNameProps?: string;
    type?: 'button' | 'submit' | 'reset';
    getSearchText: (value: string) => void;
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
    buttonProps.getSearchText(targetVal);
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

import React from 'react';
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
      <input
        {...inputProps}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={targetVal}
        type="text"
        onChange={onChangeTarget}
        readOnly={false}
      />
      <button onClick={handleSearch} type={buttonProps.type}>
        {buttonProps?.children}
      </button>
    </div>
  );
};

export default SearchWithBtn;

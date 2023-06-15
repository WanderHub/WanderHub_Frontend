import React, { ChangeEvent, useState } from 'react';
// import SearchWithIcon from '@components/accompany/post/SearchWithIcon';
import { AiOutlineSearch } from 'react-icons/ai';
import KaKaoSearchModal from './post/KaKaoSearchModal';
interface LabelProps {
  htmlFor: string;
  classNameProps?: string;
  labelText: string;
}
export interface InputProps {
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  classNameProps?: string;
  id: string;
  compType?: string;
  isReadOnly: boolean;
  type?:
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
}

interface InputWithLabelProps {
  labelProps: LabelProps;
  inputProps: InputProps;
}

const InputWithLabel = ({ labelProps, inputProps }: InputWithLabelProps) => {
  const TextFieldOption = (compType: string | undefined) => {
    switch (compType) {
      case 'input':
        return <TextInput {...inputProps} />;
      case 'iconInput':
        return <SearchWithIcon {...inputProps} isModal={true} />;
      case 'textarea':
        return <Textarea {...inputProps} />;
      default:
        return <div>Default Option</div>;
    }
  };
  return (
    <>
      <label htmlFor={labelProps.htmlFor} className={labelProps.classNameProps}>
        {labelProps.labelText}
      </label>
      {/* <Label {...labelProps} /> */}
      {TextFieldOption(inputProps.compType)}
    </>
  );
};

export default InputWithLabel;

const TextInput = ({ placeholder, value, handleChange, id, isReadOnly, type }: InputProps) => (
  <input
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
    type={type}
    id={id}
    readOnly={isReadOnly}
    className={
      'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
    }
  />
);

const Textarea = ({ placeholder, value, handleChange, id, isReadOnly }: InputProps) => (
  <textarea
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
    id={id}
    readOnly={isReadOnly}
    className={
      'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
    }
  />
);
const SearchWithIcon = (props: any) => {
  // 프롭스 리스트 - placeholder,value,handleChange,classNameProps?,id?,type,isModal,isReadOnly,
  const { isModal } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceHolder] = useState('장소를 검색해주세요.');
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          placeholder={placeholder}
          readOnly
          onFocus={() => setPlaceHolder('돋보기를 클릭해주세요.')}
          onBlur={() => setPlaceHolder('장소를 검색해주세요.')}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div onClick={handleModal} className="absolute right-2 top-2 bottom-2 flex items-center">
          <AiOutlineSearch className="text-gray-500 cursor-pointer text-2xl hover:text-green-500" />
        </div>
      </div>
      {isModal && isOpen && <KaKaoSearchModal handleModal={handleModal} />}
    </>
  );
};

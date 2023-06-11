import React, { useState } from 'react';
import TextInput, { TextInputProps } from '@components/Atoms/TextInput';
import { AiOutlineSearch } from 'react-icons/ai';
import KaKaoSearchModal from './KaKaoSearchModal';

export interface SearchWithIconProps extends TextInputProps {
  isReadOnly: boolean;
  isModal: boolean;
}
const SearchWithIcon = (props: SearchWithIconProps) => {
  // 프롭스 리스트 - placeholder,value,handleChange,classNameProps?,id?,type,isModal,isReadOnly,
  const { isModal } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative w-full" onClick={handleModal}>
        <TextInput {...props} />
        <div className="absolute right-2 top-2 bottom-2 flex items-center">
          <AiOutlineSearch className="text-gray-500 cursor-pointer text-2xl" />
        </div>
      </div>
      {isModal && isOpen && <KaKaoSearchModal handleModal={handleModal} />}
    </>
  );
};

export default SearchWithIcon;

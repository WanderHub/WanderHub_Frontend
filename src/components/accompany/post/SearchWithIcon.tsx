import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import KaKaoSearchModal from './KaKaoSearchModal';

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
      {/* {isModal && isOpen && <KaKaoSearchModal handleModal={handleModal} />} */}
    </>
  );
};

export default SearchWithIcon;

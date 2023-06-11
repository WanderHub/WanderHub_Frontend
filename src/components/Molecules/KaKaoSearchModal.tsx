import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import SearchWithBtn from './SearchWithBtn';

interface KaKaoSearchModalProps {
  handleModal: () => void;
}

const KaKaoSearchModal = ({ handleModal }: KaKaoSearchModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="border-2 shadow-md inset bg-white rounded-lg p-6 z-10 w-[50%] h-[50%] relative ">
        <button className="absolute top-2 right-2 text-gray-500" onClick={handleModal}>
          <AiOutlineClose className="text-2xl" />
        </button>
        <SearchWithBtn
          buttonProps={{
            children: '검색',
            type: 'button',
          }}
          inputProps={{
            classNameProps: 'border-2 w-8/12 h-9 px-3 rounded-full',
            placeholder: '동행장소를 입력해주세요.',
          }}
          isReset={false}
        />
      </div>
    </div>
  );
};

export default KaKaoSearchModal;

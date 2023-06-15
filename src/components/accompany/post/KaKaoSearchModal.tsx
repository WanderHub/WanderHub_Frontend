import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import useKaKaoLocalSearch from '@/hooks/queryHooks/useKaKaoLocalSearch';

interface KaKaoSearchModalProps {
  handleModal: () => void;
}

const KaKaoSearchModal = ({ handleModal }: KaKaoSearchModalProps) => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [isAction, setIsAction] = useState(false);
  const { data, isLoading, error } = useKaKaoLocalSearch(searchVal, isAction);
  const getSearchText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAction) {
      setIsAction(true);
    }
  };
  useEffect(() => {
    console.log(data, isLoading, error);
    if (isAction) {
      setIsAction(false);
    }
  }, [isAction]);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="border-2 shadow-md inset bg-white rounded-lg p-6 z-10 w-[50%] h-[50%] relative ">
        <button className="absolute top-2 right-2 text-gray-500" onClick={handleModal}>
          <AiOutlineClose className="text-2xl" />
        </button>
        <div className="relative w-[80%] mx-auto">
          <input
            type="text"
            onChange={e => setSearchVal(e.target.value)}
            onKeyDownCapture={e => {
              if (e.code === 'Enter') {
                e.preventDefault();
                if (searchVal) getSearchText(e);
              } else if (e.code === 'Backspace' && isAction) {
                setIsAction(false);
              }
            }}
            placeholder={'모일 장소를 검색해주세요.'}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div
            onClick={getSearchText}
            className="absolute right-2 top-2 bottom-2 flex items-center"
          >
            <AiOutlineSearch className="text-gray-500 cursor-pointer text-2xl hover:text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaKaoSearchModal;

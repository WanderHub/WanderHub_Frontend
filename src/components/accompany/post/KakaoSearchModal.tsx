import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import useKakaoLocalSearch from '@/hooks/queryHooks/useKakaoLocalSearch';
import { KakaoLocalListType } from '@/types/kakaoType';
import Spinner from '@components/common/Spinner';

interface KakaoSearchModalProps {
  handleModal: () => void;
  getLocation: (address_name: string, place_name: string, x: string, y: string) => void;
}

const SearchList = ({
  data,
  getLocation,
}: {
  data: KakaoLocalListType[];
  getLocation: KakaoSearchModalProps['getLocation'];
}) => (
  <div>
    {data.map((item, idx) => (
      <div
        key={idx}
        onClick={() => getLocation(item.address_name, item.place_name, item.x, item.y)}
        className="border border-gray-300 cursor-pointer mb-1"
      >
        <div>장소명 : {item.place_name}</div>
        <div>주소 : {item.address_name}</div>
      </div>
    ))}
  </div>
);

const KakaoSearchModal = ({ handleModal, getLocation }: KakaoSearchModalProps) => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [isAction, setIsAction] = useState(false);
  const { data, isLoading, error } = useKakaoLocalSearch(searchVal, isAction);

  const getSearchText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAction) setIsAction(true);
  };

  useEffect(() => {
    if (isAction) setIsAction(false);
  }, [isAction]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="border-2 shadow-md inset bg-white rounded-lg p-6 z-10 w-[50%] h-[50%] relative">
        <AiOutlineClose
          className="absolute top-2 right-2 text-gray-500 text-2xl"
          onClick={handleModal}
        />

        <div className="relative w-[80%] mx-auto mt-[1rem]">
          <input
            type="text"
            onChange={e => setSearchVal(e.target.value)}
            onKeyDown={e => {
              if (e.code === 'Enter' && searchVal) getSearchText(e);
              if (e.code === 'Backspace' && isAction) setIsAction(false);
            }}
            placeholder={'모일 장소를 검색해주세요.'}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <AiOutlineSearch
            className="absolute right-2 top-2 bottom-2 text-gray-500 cursor-pointer text-2xl hover:text-green-500"
            onClick={getSearchText}
          />
        </div>

        <div className="mt-[.5rem] overflow-y-auto h-[85%]">
          {isLoading && <Spinner />}
          {data && <SearchList data={data} getLocation={getLocation} />}
          {error && alert('통신이 원할하지 않습니다 다시 시도 해주세요.')}
        </div>
      </div>
    </div>
  );
};

export default KakaoSearchModal;

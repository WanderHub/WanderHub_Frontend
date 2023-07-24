import React, { useEffect } from 'react';
import KakaoMap from '@components/common/KakaoMap';
import { useParams } from 'react-router-dom';
import DetailInfo from './DetailInfo';
import useGetAccompanyDetail from '@/hooks/queryHooks/useGetAccompanyDetail';
import Spinner from '@components/common/Spinner';

const DetailBox = () => {
  const { accompanyId } = useParams();
  const { data, isLoading } = useGetAccompanyDetail(accompanyId);
  return (
    <>
      {isLoading && <Spinner />}
      {data && (
        <>
          <div className="flex justify-between mt-[.5rem]">
            <button
              className={
                'text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-lg px-4 py-2 bg-primary'
              }
            >
              이 여행자의 다른여행일정
            </button>
            <button
              onClick={() => console.log('click!')}
              className={
                'text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-lg px-4 py-2 bg-primary'
              }
            >
              참여하기
            </button>
          </div>
          <div className="flex justify-around mt-[.5rem]">
            <div className="w-[45%] rounded-lg overflow-hidden">
              <KakaoMap mapX={data.coordX} mapY={data.coordY} placeTitle={data.placeTitle} />
            </div>
            <div className="w-[45%] border-2 p-2 rounded-lg">
              <DetailInfo {...data} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailBox;

import React from 'react';
import KakaoMap from '@components/common/KakaoMap';
import { useParams } from 'react-router-dom';
import DetailInfo from './DetailInfo';
import useGetAccompanyDetail from '@/hooks/queryHooks/useGetAccompanyDetail';
import Spinner from '@components/common/Spinner';
import usePostJoinAccompany from '@/hooks/queryHooks/usePostJoinAccompany';
import useDeleteQuitAccompany from '@/hooks/queryHooks/useDeleteQuitAccompany';

const DetailBox = () => {
  const { accompanyId } = useParams();
  const { data, isLoading } = useGetAccompanyDetail(accompanyId);
  const joinAccompanyMutation = usePostJoinAccompany();
  const deleteQuitAccompanyMutation = useDeleteQuitAccompany();

  const handleJoin = (id: string) => {
    joinAccompanyMutation.mutate(id, {
      onSuccess: data => {
        console.log('Joined successfully!', data);
      },
      onError: error => {
        console.error('Error joining:', error);
      },
    });
  };

  const handleQuit = (id: string) => {
    deleteQuitAccompanyMutation.mutate(id, {
      onSuccess: data => {
        console.log('Successfully quit the accompany!', data);
      },
      onError: error => {
        console.error('Error quitting the accompany:', error);
      },
    });
  };

  return (
    <>
      {isLoading && <Spinner />}
      {data && (
        <>
          <div className="flex justify-end mt-[.5rem]">
            <div>
              <button
                onClick={() => accompanyId && handleJoin(accompanyId)}
                className="text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-lg px-4 py-2 bg-primary"
              >
                참여하기
              </button>
              <button
                onClick={() => accompanyId && handleQuit(accompanyId)}
                className="text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-lg px-4 py-2 bg-primary ml-2"
              >
                탈퇴하기
              </button>
            </div>
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

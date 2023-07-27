import Pagenation from '@components/common/Pagenation';
import React, { useState, useEffect } from 'react';
import TableItem from './TableItem';
import WanderHubAPI from '@/api/WanderHubAPI';
import { BoardType } from '@/types/boardType';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/login/userInfoAtoms';
import { AccompanyDetailDataType } from '@/types/accompanyType';

const myBoardTapList: { tabTxt: string; tabName: string }[] = [
  { tabTxt: '#나의동행글', tabName: 'myAccompany' },
  { tabTxt: '#나의댓글', tabName: 'myComment' },
];
const MyBoard = () => {
  const [curMenu, setMenu] = useState('myAccompany');
  const [curPage, setCurPage] = useState<number>(1);
  const [myBoards, setMyBoards] = useState<BoardType[]>();
  const [myAccompanyPost, setMyAccompanyPost] = useState<AccompanyDetailDataType[]>();
  const userInfo = useRecoilValue(userInfoAtom);

  const getMyBoards = async () => {
    const res = await WanderHubAPI.get('/community');
    const totalBoardNum = res.data.pageInfo.totalElements;
    const { data } = await WanderHubAPI.get(`/community?page=0&size=${totalBoardNum}`);
    const boardAll = data.data;
    const newBoards = boardAll.filter((board: BoardType) => board.nickName === userInfo.nickName);
    setMyBoards(newBoards);
  };

  const getMyAccompanyPost = async () => {
    const { data } = await WanderHubAPI.get('/accompany');
    const accompanyAll = data.data;
    const newAccompany = accompanyAll.filter(
      (post: AccompanyDetailDataType) => post.nickname === userInfo.nickName,
    );
    setMyAccompanyPost(newAccompany);
    console.log(myAccompanyPost);
  };

  useEffect(() => {
    getMyBoards();
    getMyAccompanyPost();
  }, []);

  const handlePageNation = (page: number) => {
    setCurPage(page);
  };

  return (
    <>
      <div className="mt-[1rem] border-2 shadow-md inset h-16 w-[80%] rounded-full flex items-center justify-between px-4">
        <div className="w-full flex justify-center">
          {myBoardTapList.map(item => {
            return (
              <button
                key={item.tabTxt}
                className={
                  curMenu === item.tabName
                    ? 'mx-[.5rem] px-4 py-2 text-black border-b border-black'
                    : 'mx-[.5rem] px-4 py-2 text-gray-300 hover:text-black'
                }
                onClick={() => setMenu(item.tabName)}
              >
                {item.tabTxt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="container w-[90%] mx-auto">
        <div className="py-4 -mx-4-auto">
          <div className="inline-block w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    지역
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    생성날짜
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    여행날짜
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    제목
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    <span className="sr-only">더보기</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {myBoards?.map((board, idx) => {
                  return <TableItem board={board} key={idx} />;
                })}
              </tbody>
            </table>
            <Pagenation totalPages={20} curPage={curPage} handlePageNation={handlePageNation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBoard;

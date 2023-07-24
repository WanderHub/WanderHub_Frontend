import React, { useEffect, useState } from 'react';
import ViewsIcon from '@assets/viewsIcon.png';
import WanderHubAPI from '@/api/WanderHubAPI';
import { useNavigate } from 'react-router-dom';
import { BoardType } from '@/types/boardType';
import Pagination from '@pages/Community/components/Pagination';

const PostList = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState<BoardType[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  async function getPostAll() {
    const res = await WanderHubAPI.get(`/community`);
    setTotalPage(Number(res.data.pageInfo.totalPage));
    setBoardList(res.data.data);
  }

  async function getPostAll() {
    const res = await WanderHubAPI.get('/community?page=1&size=12');
    console.log(res);
  }

  useEffect(() => {
    getPostAll();
  }, []);

  return (
    <>
      {boardList.map(board => {
        return (
          <div
            key={board.boardId}
            onClick={() => navigate(`/community/${board.boardId}`)}
            className="border-t"
          >
            <div className="relative border-b p-4 hover:bg-zinc-100">
              <p className="font-semibold pb-6">{board.title}</p>
              <span className="font-medium text-zinc-500">{board.nickName}</span>
              <img src={ViewsIcon} width="25px" className="absolute bottom-6 right-16" />
              <span className="absolute bottom-5 right-10 font-bold text-zinc-500">
                {board.viewPoint}
              </span>
            </div>
          </div>
        );
      })}
      <Pagination totalPages={totalPage} setBoardList={setBoardList} />
    </>
  );
};

export default PostList;

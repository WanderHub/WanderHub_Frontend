import React from 'react';
import WanderHubAPI from '@/api/WanderHubAPI';
import { BoardType } from '@/types/boardType';

interface PaginationProps {
  totalPages: number;
  setBoardList: React.Dispatch<React.SetStateAction<BoardType[]>>;
}

const Pagination = ({ totalPages, setBoardList }: PaginationProps) => {
  const handleChangePage = async (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault();

    const res = await WanderHubAPI.get(`/community?page=${i}`);
    console.log(res.data.data);
    setBoardList(res.data.data);
  };

  return (
    <div className="flex flex justify-center py-10">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {Array(totalPages)
            .fill(0)
            .map((page, i) => {
              return (
                <li key={i + page} onClick={e => handleChangePage(e, i)} className="">
                  <a className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-stone-500 bg-white text-stone-500">
                    {i + 1}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

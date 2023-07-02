import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagenation = () => {
  const [pageStartNum, setPageStartNum] = useState(1);
  const [curPage, setCurPage] = useState(1);
  return (
    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
      <div className="flex items-center">
        <button
          type="button"
          className={
            pageStartNum !== 1
              ? 'w-full p-3 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-400'
              : 'w-full p-3 text-base text-gray-300 bg-gray-100 border rounded-l-xl cursor-not-allowed'
          }
          onClick={() => {
            if (pageStartNum !== 1) {
              setPageStartNum(pageStartNum - 10);
              setCurPage(pageStartNum - 10);
            }
          }}
        >
          <IoIosArrowBack />
        </button>
        {Array(10)
          .fill(null)
          .map((_, i) => {
            return (
              <button
                key={i * pageStartNum}
                className={
                  curPage === i + 1 * pageStartNum
                    ? 'w-full px-4 py-2 text-base text-gray-600 bg-primary border'
                    : 'w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-400'
                }
                onClick={() => {
                  setCurPage(i + 1 * pageStartNum);
                  console.log(i + 1 * pageStartNum);
                }}
              >
                {i + 1 * pageStartNum}
              </button>
            );
          })}

        <button
          type="button"
          className="w-full p-3 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-400"
          onClick={() => {
            setPageStartNum(pageStartNum + 10);
            setCurPage(pageStartNum + 10);
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagenation;

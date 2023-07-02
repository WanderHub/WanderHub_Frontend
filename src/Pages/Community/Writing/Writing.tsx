import React, { useState, useRef } from 'react';
import Header from '@components/Common/Header';

const Writing = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dropDownShow, setDropDownShow] = useState(false);
  const ref = useRef(null);

  return (
    <div>
      <Header setOpenModal={setOpenModal} />
      <div className="flex items-center justify-center">
        <div className="w-2/3 mt-10">
          <div className="mb-6 text-2xl text-gray-800 dark:text-white">
            여행의 추억을 공유해 보아요!
          </div>
          <div className="mb-5">
            <div className="mb-1">제목</div>
            <input
              type="text"
              id="contact-form-name"
              className="rounded-lg appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Title"
            />
          </div>
          <div className="mb-1">지역</div>
          <div className="mb-6">
            <div className="mb-1">본문</div>
            <label className="text-gray-700" htmlFor="name">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Content"
                name="comment"
                rows={5}
                cols={40}
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writing;

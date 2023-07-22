import React, { useState } from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import MainLogo from '@assets/logo.png';
import ViewIcon from '@assets/viewsIcon.png';

const CommunityDetail = () => {
  const [isEdit, setIsEdit] = useState(true);
  const handleSubmitPost = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-[80vh]">
        <div className="w-[50%]">
          {!isEdit && (
            <button
              type="button"
              onClick={() => setIsEdit(!isEdit)}
              className="float-right mt-20 h-10 w-32 flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              수정하기
            </button>
          )}
          {isEdit ? (
            <input
              type="text"
              id="contact-form-name"
              className="mt-16 mb-8 rounded-lg appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="Title"
            />
          ) : (
            <div className="mt-20 mb-8 font-medium text-3xl text-gray-800 dark:text-white">
              제목을 보여주세요
            </div>
          )}

          <div className="font-bold text-[17px] mb-2">장은영</div>
          <div className="flex mb-3 border-b pb-6 mb-6">
            <div className="flex text-slate-500 text-[15px] mr-5">
              <div className="mr-2">작성일</div>
              <div>23.07.12</div>
            </div>
            <div className="flex text-slate-500 text-[15px] mr-4">
              <img src={ViewIcon} alt="view icon" className="w-5 h-3 mt-[5px] mr-2" />
              <div className="mr-2">조회수</div>
              <div>41</div>
            </div>
            <div className="flex text-slate-500 text-[15px]">
              <img src={MainLogo} alt="main logo" className="w-6 h-6 mr-1" />
              <div className="mr-2">여행지</div>
              <div>서울</div>
            </div>
          </div>
          {isEdit ? (
            <textarea
              className="flex-1 w-full h-[400px] px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              id="comment"
              placeholder="Content"
              name="comment"
              rows={5}
              cols={40}
            ></textarea>
          ) : (
            <div>본문</div>
          )}
          {isEdit && (
            <button
              onClick={handleSubmitPost}
              className="py-2 px-4 mt-8 mb-16 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              등록
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityDetail;

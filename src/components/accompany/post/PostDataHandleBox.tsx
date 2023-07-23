import React, { useState } from 'react';
import ReactCalendar from '@components/common/ReactCalendar';
import PostForm from '@components/accompany/post/PostForm';
import usePostAccompany from '@/hooks/queryHooks/usePostAccompany';

export interface FormDataType {
  maxNum: number | string;
  placeTitle: string;
  accompanyTitle: string;
  accompanyContent: string;
  accompanyLocal: string;
  coordX: string;
  coordY: string;
}

const PostDataHandleBox = () => {
  const [accompanyDate, setAccompanyDate] = useState<string | null>('');
  const { mutate, isLoading } = usePostAccompany();
  // const { mutate, isLoading, isError, data, error } = usePostAccompany();
  console.log(isLoading);
  const getDate = (date: string | null) => setAccompanyDate(date);
  const handleSubmit = (formData: FormDataType) => {
    const params = { ...formData, accompanyDate };
    if (accompanyDate) {
      mutate(params);
      console.log({ ...formData, accompanyDate });
    }
  };
  return (
    <>
      <div className="flex justify-around mt-[2rem] mb-[2rem]">
        <div className="w-[45%]">
          <ReactCalendar curDate={accompanyDate} getDate={getDate} />
        </div>
        <div className="w-[45%] border-2 shadow-md inset p-2 rounded-md">
          <PostForm handleSubmit={handleSubmit} />
          <button
            type="submit"
            form="accompanyPostForm"
            className={
              'text-gray-300 hover:text-white border border-gray-300 rounded-full px-4 py-2 bg-primary w-[70%] m-auto block mt-[1rem]'
            }
          >
            등록
          </button>
        </div>
      </div>
    </>
  );
};

export default PostDataHandleBox;

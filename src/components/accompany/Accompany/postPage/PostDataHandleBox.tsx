import React, { useState } from 'react';
import ReactCalendar from '@components/accompany/ReactCalendar';
import Form from '@components/accompany/Form';

export interface PostFormDataType {
  content: string;
  location: string;
  maxPeople: number;
  nickname: string;
  title: string;
  accompanyDate: string;
}
const initialState = {
  nickname: '',
  maxPeople: '',
  location: '',
  title: '',
  content: '',
};

const PostDataHandleBox = () => {
  const [accompanyDate, setAccompanyDate] = useState('');
  const submitFunc = (formData: PostFormDataType) => {
    console.log({ ...formData, accompanyDate });
  };
  const getDateFunc = (date: string) => {
    console.log(date);
    setAccompanyDate(date);
  };

  return (
    <>
      <div className="flex justify-around mt-[2rem] mb-[2rem]">
        <div className="w-[45%]">
          <ReactCalendar getDateFunc={getDateFunc} />
        </div>
        <div className="w-[45%] border-2 shadow-md inset p-2 rounded-md">
          <Form initialState={initialState} submitFunc={submitFunc} btnTxt="등록" />
        </div>
      </div>
    </>
  );
};

export default PostDataHandleBox;

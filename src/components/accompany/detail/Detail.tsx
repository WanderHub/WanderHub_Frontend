import React from 'react';
import { AccompanyDataType } from '@/types/accompanyType';
import {
  FcCalendar,
  FcLinux,
  FcLike,
  FcAbout,
  FcViewDetails,
  FcConferenceCall,
  FcCloseUpMode,
} from 'react-icons/fc';
import { IoLocation } from 'react-icons/io5';
// import { FaMapLocationDot, FaPeopleGroup } from 'react-icons/fa6';

const Detail = (props: AccompanyDataType) => {
  const {
    // id,
    // memberId,
    // createdAt,
    // modifiedAt,
    // openStatus,
    writerName,
    accompanyLocal,
    accompanyDate,
    maxNum,
    accompanyTitle,
    accompanyContent,
  } = props;
  return (
    <>
      <div className="flex items-center font-serif font-bold mb-[.5rem]">
        <FcLinux size={'2rem'} />
        &nbsp;작성자 : &nbsp; {writerName}
      </div>
      <div className="flex items-center font-serif font-bold mb-[.5rem]">
        <IoLocation size={'2rem'} />
        &nbsp;지역 : &nbsp; {accompanyLocal}
      </div>
      <div className="flex items-center font-serif font-bold mb-[.5rem]">
        <FcCalendar size={'2rem'} />
        &nbsp;날짜 : &nbsp; {accompanyDate}
      </div>
      <div className="flex items-center font-serif font-bold mb-[.5rem]">
        <FcConferenceCall size={'2rem'} />
        &nbsp;참여인원 : &nbsp; {maxNum}
      </div>
      <div className="flex items-center font-serif font-bold mb-[.5rem]">
        <FcAbout size={'2rem'} />
        제목 :
      </div>
      {accompanyTitle}
      <div className="flex items-center font-serif font-bold mb-[.5rem]">
        <FcViewDetails size={'2rem'} />
        내용 :
      </div>
      {accompanyContent}
      {/* <div className="flex">
        <FcLike />
        &nbsp; : &nbsp; {openStatus}
      </div> */}
      {/* 
        작성자
        날짜
        지역
        참여인원
        타이틀
        컨텐츠
      */}
    </>
  );
};

export default Detail;

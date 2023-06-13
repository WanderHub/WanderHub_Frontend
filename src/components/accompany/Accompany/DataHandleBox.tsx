import React from 'react';
import ReactCalendar from '@components/accompany/ReactCalendar';
import SvgMap from '@components/accompany/SvgMap';
import CardList from './CardList';
import Button from '@components/accompany/Button';
import { mapList } from '@/constant/MapPath';
import { formatDate } from '@/utils/commonUtil';
import { accompanyList } from '@/constant/DummyData';

const DataHandleBox = () => {
  const getDateFunc = (date: string) => {
    console.log(date);
  };

  return (
    <section className="my-3">
      <div className="flex justify-around">
        <div className="w-[45%] max-h-[50vh]">
          <SvgMap pathList={mapList} />
        </div>
        <div className="w-[45%] max-h-[50vh]">
          <ReactCalendar getDateFunc={getDateFunc} />
        </div>
      </div>
      <div className="mt-[2rem] pt-[1rem] border-t-2 border-gray-300 ">
        <p className="text-3xl font-bold text-center mb-4">
          <span>{formatDate(new Date())}&nbsp;</span>
          {/* <span>((2023/12/3))</span> */}-<span>&nbsp;제주도</span>
          <br />
          이런 여행이 기다리고 있어요!
        </p>
        <CardList cards={accompanyList} />
        <Button
          clickEvent={() => console.log('getMore')}
          classNameProps="bg-white w-full text-gray-300 hover:text-black border-2 border-lightgrey rounded-full mt-4 h-[3rem]"
        >
          더보기
        </Button>
      </div>
    </section>
  );
};

export default DataHandleBox;

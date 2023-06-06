import React from 'react';
import AtomCalendar from '@components/Atoms/AtomCalendar';
import SvgMap from '@components/Molecules/SvgMap';
import { mapList } from '@/constant/MapPath';
import Search from '@components/Molecules/Search';

const DataHandleBox = () => {
  return (
    <section>
      <Search
        buttonProps={{
          children: '검색',
        }}
        inputProps={{
          classNameProps: 'border-2 w-8/12 h-9 px-3 rounded-full',
          placeholder: '함께 여행할 동행을 찾아보세요!',
        }}
      />
      <div className="flex justify-around">
        <div className="w-[45%] max-h-[50vh]">
          <SvgMap pathList={mapList} />
        </div>
        <div className="w-[45%] max-h-[50vh]">
          <AtomCalendar />
        </div>
      </div>
    </section>
  );
};

export default DataHandleBox;

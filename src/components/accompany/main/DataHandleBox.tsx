import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactCalendar from '@components/common/ReactCalendar';
import SvgMap from '@components/accompany/main/SvgMap';
import CardList from '@components/accompany/CardList';
import { mapList } from '@/constant/MapPath';
import useRouter from '@/hooks/useRouter';
import { objectToQuerystring, querystringToObject } from '@/utils/commonUtil';
import { useLocation } from 'react-router-dom';
import useGetAccompanyList from '@/hooks/queryHooks/useGetAccompanyList';

const DataHandleBox = () => {
  const [uri, setUri] = useState<null | 'bylocal' | 'bydate' | 'bylocalanddate'>(null);
  const [curLocal, setCurLocal] = useState<null | string>(null);
  const [curDate, setCurDate] = useState<null | string>(null);
  const [curPage, _] = useState<number>(0);
  const { goTo } = useRouter();
  const location = useLocation();
  const { data, isLoading } = useGetAccompanyList({ uri, curLocal, curDate, curPage });

  const handleRoute = (local: string | null, date: string | null) => {
    console.log(data, isLoading);

    switch (true) {
      case Boolean(date && local):
        setUri('bylocalanddate');
        break;
      case Boolean(date):
        setUri('bydate');
        break;
      case Boolean(local):
        setUri('bylocal');
        break;
      default:
        setUri(null);
        return;
    }
    const queryObj = { accompanyLocal: local, accompanyDate: date };
    const filteredQuery = Object.entries(queryObj).reduce(
      (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
      {},
    );
    goTo(objectToQuerystring(filteredQuery), true);
  };

  const getLocalName = (name: string | null) => {
    setCurLocal(name);
    handleRoute(name, curDate);
  };

  const getDate = (date: string | null) => {
    setCurDate(date);
    handleRoute(curLocal, date);
  };

  useEffect(() => {
    if (!location.search) {
      setCurLocal(null);
      setCurDate(null);
      setUri(null);
    }
  }, [location]);
  useLayoutEffect(() => {
    const queryLocation = querystringToObject(location.search);
    if (queryLocation.accompanyLocal) setCurLocal(decodeURI(queryLocation.accompanyLocal));
    if (queryLocation.accompanyDate) setCurDate(queryLocation.accompanyDate);
  }, []);
  return (
    <section className="my-3">
      <div className="flex justify-around">
        <div className="w-[45%] max-h-[50vh]">
          <SvgMap pathList={mapList} curLocal={curLocal} getLocalName={getLocalName} />
        </div>
        <div className="w-[45%] max-h-[50vh]">
          <ReactCalendar curDate={curDate} getDate={getDate} />
        </div>
      </div>
      {(curDate || curLocal) && (
        <div className="mt-[2rem] pt-[1rem] border-t-2 border-gray-300 ">
          <p className="text-3xl font-bold text-center mb-4">
            <span>{curDate}</span>
            <span>{curLocal}</span>
            <br />
            이런 여행이 기다리고 있어요!
          </p>
          <CardList cards={data} />
          <button
            onClick={() => console.log('getMore')}
            className="bg-white w-full text-gray-300 hover:text-black border-2 border-lightgrey rounded-full mt-4 h-[3rem]"
          >
            더보기
          </button>
        </div>
      )}
    </section>
  );
};

export default DataHandleBox;

import React from 'react';
import TravelCard from '@/components/travel/TravelCard';

interface TravelCardBoxTypes {
  travelList?: {
    addr1: string;
    addr2: string;
    areacode: string;
    booktour: string;
    cat1: string;
    cat2: string;
    cat3: string;
    contentid: string;
    contenttypeid: string;
    createdtime: string;
    firstimage: string;
    firstimage2: string;
    cpyrhtDivCd: string;
    mapx: string;
    mapy: string;
    mlevel: string;
    modifiedtime: string;
    sigungucode: string;
    tel: string;
    title: string;
    zipcode: string;
  }[];
}

const TravelCardBox = ({ travelList }: TravelCardBoxTypes) => {
  return (
    <div>
      <ul className="grid mt-5 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {travelList?.map((item): any => {
          return <TravelCard key={item.title} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default TravelCardBox;

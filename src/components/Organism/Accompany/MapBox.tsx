import React from 'react';
import SvgMap from '@/components/Molecules/SvgMap';
import { mapList } from '@/constant/MapPath';

const MapBox = () => {
  return (
    <section className="w-3/6">
      <SvgMap pathList={mapList} />
    </section>
  );
};

export default MapBox;

import React from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';

const KaKaoMap = () => {
  return (
    <Map
      center={{ lat: 37.4982654003355, lng: 127.0582624226 }}
      className="w-full h-full min-h-[360px]"
    >
      <ZoomControl />
      <MapMarker position={{ lat: 37.4982654003355, lng: 127.0582624226 }}>
        <div style={{ color: '#000' }}>장소이름!!</div>
      </MapMarker>
    </Map>
  );
};

export default KaKaoMap;

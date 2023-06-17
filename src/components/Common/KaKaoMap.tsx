import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React from 'react';

const KaKaoMap = () => {
  return (
    <Map
      center={{ lat: 37.4982654003355, lng: 127.0582624226 }}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: 37.4982654003355, lng: 127.0582624226 }}>
        <div style={{ color: '#000' }}>장소이름!!</div>
      </MapMarker>
    </Map>
  );
};

export default KaKaoMap;

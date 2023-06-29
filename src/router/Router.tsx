import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Accompany from '@/pages/Accompany/Accompany';
import AccompanyPost from '@/pages/Accompany/AccompanyPost';
import AccompanyDetail from '@/pages/Accompany/AccompanyDetail';
import MyPage from '@pages/MyPage/MyPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accompany" element={<Accompany />} />
      <Route path="/accompany/post" element={<AccompanyPost />} />
      <Route path="/accompany/:accompanyId" element={<AccompanyDetail />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default Router;

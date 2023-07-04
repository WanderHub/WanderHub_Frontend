import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Accompany from '@/pages/Accompany/Accompany';
import AccompanyPost from '@/pages/Accompany/AccompanyPost';
import AccompanyDetail from '@/pages/Accompany/AccompanyDetail';
import Comunity from '@/Pages/Community/Community';
import Writing from '@/Pages/Community/Writing/Writing';
import NotFound from '@/pages/NotFound.tsx/NotFound';
import MyPage from '@pages/MyPage/MyPage';
import Travel from '@pages/Travel/Travel';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accompany" element={<Accompany />} />
      <Route path="/accompany/post" element={<AccompanyPost />} />
      <Route path="/accompany/:accompanyId" element={<AccompanyDetail />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/community" element={<Comunity />} />
      <Route path="/community/writing" element={<Writing />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;

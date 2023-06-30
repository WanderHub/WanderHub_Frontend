import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Accompany from '@/pages/Accompany/Accompany';
import AccompanyPost from '@/pages/Accompany/AccompanyPost';
import AccompanyDetail from '@/pages/Accompany/AccompanyDetail';
import Comunity from '@/Pages/Community/Community';
import NotFound from '@/pages/NotFound.tsx/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accompany" element={<Accompany />} />
      <Route path="/accompany/post" element={<AccompanyPost />} />
      <Route path="/accompany/:accompanyId" element={<AccompanyDetail />} />
      <Route path="/community" element={<Comunity />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;

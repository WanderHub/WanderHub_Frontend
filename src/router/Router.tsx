import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/Pages/Home/Home';
import Accompany from '@/Pages/Accompany/Accompany';
import AccompanyPost from '@/Pages/Accompany/AccompanyPost';
import AccompanyDetail from '@/Pages/Accompany/AccompanyDetail';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accompany" element={<Accompany />} />
      <Route path="/accompany/post" element={<AccompanyPost />} />
      <Route path="/accompany/:accompanyId" element={<AccompanyDetail />} />
    </Routes>
  );
};

export default Router;

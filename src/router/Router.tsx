import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/Pages/Home/Home';
import Accompany from '@/Pages/Accompany/Accompany';
import AccompanyPost from '@/Pages/Accompany/AccompanyPost';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accompany" element={<Accompany />} />
      <Route path="/accompany/post" element={<AccompanyPost />} />
    </Routes>
  );
};

export default Router;

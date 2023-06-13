import { Route, Routes } from 'react-router-dom';
import Home from '@components/Pages/Home/Home';
import Accompany from '@components/Pages/Accompany/Accompany';
import React from 'react';
import AccompanyPost from '@components/Pages/Accompany/AccompanyPost';

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

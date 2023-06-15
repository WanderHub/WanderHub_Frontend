import React, { useState } from 'react';
import Footer from '@components/Common/Footer';
import Header from '@components/Common/Header';
import Modal from '@/Pages/Login/Modal';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Footer />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </>
  );
};

export default Home;
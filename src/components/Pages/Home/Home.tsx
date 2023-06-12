import React, { useState } from 'react';
import Footer from '@components/Organism/Common/Footer';
import Header from '@components/Organism/Common/Header';
import Modal from '@components/Pages/Login/Modal';

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

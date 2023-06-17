import React, { useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@/components/common/Container';
import Modal from '@pages/Login/Modal';

const AccompanyDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>디테일</Container>
      <Footer />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </>
  );
};

export default AccompanyDetail;

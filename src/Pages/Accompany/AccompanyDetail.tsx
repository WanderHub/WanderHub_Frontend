import React, { useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@/components/common/Container';
import Modal from '@pages/Login/Modal';
import Title from '@components/accompany/Title';
import DetailBox from '@components/accompany/detail/DetailBox';

const AccompanyDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <Title title={'동행 디테일'} />
        <DetailBox />
      </Container>
      <Footer />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </>
  );
};

export default AccompanyDetail;

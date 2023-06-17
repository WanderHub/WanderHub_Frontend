import React, { useState } from 'react';
import Footer from '@components/Common/Footer';
import Header from '@components/Common/Header';
import Container from '@/components/Common/Container';

const AccompanyDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>디테일</Container>
      <Footer />
    </>
  );
};

export default AccompanyDetail;

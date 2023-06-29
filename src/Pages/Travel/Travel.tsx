import React, { useEffect, useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@/components/common/Container';
import Modal from '@/pages/Login/Modal';
import { useLocation } from 'react-router-dom';
import RegionBtns from '@components/travel/main/RegionBtns';
import TravelCardBox from '@components/travel/TravelCardBox';

const Travel = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  // useEffect(() => {
  //   console.log(decodeURI(location.search));
  // }, [location]);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <RegionBtns />
        <TravelCardBox />
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
      <Footer />
    </>
  );
};

export default Travel;

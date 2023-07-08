import React, { useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@/components/common/Container';
import Modal from '@/pages/Login/Modal';
import { useLocation } from 'react-router-dom';
import RegionBtns from '@components/travel/main/RegionBtns';
import TravelCardBox from '@components/travel/TravelCardBox';
import useGetTravelList from '@/hooks/queryHooks/useGetTravelList';
import Spinner from '@components/common/Spinner';

const Travel = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const { data, isLoading, error } = useGetTravelList(location.search);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <RegionBtns />
        {isLoading && <Spinner />}
        {data && <TravelCardBox travelList={data.items.item} />}
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
      <Footer />
    </>
  );
};

export default Travel;

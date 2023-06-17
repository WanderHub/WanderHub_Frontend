import React, { useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@/components/common/Container';
import Modal from '@pages/Login/Modal';
import KaKaoMap from '@components/common/KaKaoMap';
import { accompanyList } from '@/constant/DummyData';
import { CardProps } from '@components/accompany/Card';
import Title from '@components/accompany/Title';

const AccompanyDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const {
    id,
    memberId,
    writerName,
    accompanyLocal,
    accompanyDate,
    maxNum,
    accompanyTitle,
    accompanyContent,
    openStatus,
    createdAt,
    modifiedAt,
  }: CardProps = accompanyList[0];
  console.log(
    id,
    memberId,
    writerName,
    accompanyLocal,
    accompanyDate,
    maxNum,
    accompanyTitle,
    accompanyContent,
    openStatus,
    createdAt,
    modifiedAt,
  );
  console.log(import.meta.env.VITE_KAKAO_API_KEY);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <Title title={'동행 디테일'} />
        <div className="flex justify-around mt-[1rem]">
          <div className="w-[45%]">
            <KaKaoMap />
          </div>
          <div className="w-[45%]"></div>
        </div>
      </Container>
      <Footer />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </>
  );
};

export default AccompanyDetail;

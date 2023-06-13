import React, { useState } from 'react';
import Footer from '@components/Common/Footer';
import Header from '@components/Common/Header';
import Container from '@/components/Common/Container';
import Title from '@/components/accompany/Title';
import DataHandleBox from '@/components/accompany/Accompany/DataHandleBox';
import useRouter from '@/hooks/useRouter';
import Modal from '../Login/Modal';

const AccompanyPage = () => {
  const { goTo } = useRouter();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <Title
          title={'동행'}
          isWithBtn={true}
          btnTxt={'글쓰기'}
          clickEvent={() => goTo('/accompany/post')}
        />
        <DataHandleBox />
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
      <Footer />
    </>
  );
};

export default AccompanyPage;

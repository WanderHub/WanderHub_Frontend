import React, { useState } from 'react';
import Footer from '@components/Common/Footer';
import Header from '@components/Common/Header';
import Container from '@components/Common/Container';
import Title from '@components/accompany/Title';
import PostDataHandleBox from '@components/accompany/Accompany/postPage/PostDataHandleBox';
import Modal from '../Login/Modal';

const AccompanyPost = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <Title title={'동행 글쓰기'} isWithBtn={false} />
        <PostDataHandleBox />
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
      <Footer />
    </>
  );
};

export default AccompanyPost;

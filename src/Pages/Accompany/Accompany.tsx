import React, { useState } from 'react';
import Footer from '@components/Common/Footer';
import Header from '@components/Common/Header';
import Container from '@/components/Common/Container';
import Title from '@/components/accompany/Title';
import DataHandleBox from '@/components/accompany/main/DataHandleBox';
import useRouter from '@/hooks/useRouter';
import Modal from '@/Pages/Login/Modal';

const AccompanyPage = () => {
  const { goTo } = useRouter();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <div className="flex justify-end">
          <button
            className="text-gray-300 hover:text-white border border-gray-300 rounded-full px-4 py-2 bg-primary"
            onClick={() => goTo('/accompany/post')}
          >
            글쓰기
          </button>
        </div>
        <Title title={'동행'} />
        <DataHandleBox />
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
      <Footer />
    </>
  );
};

export default AccompanyPage;
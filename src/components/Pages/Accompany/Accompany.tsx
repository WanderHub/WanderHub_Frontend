import Footer from '@components/Organism/Common/Footer';
import Header from '@components/Organism/Common/Header';
import React from 'react';
import Container from '@/components/Atoms/Container';
import Title from '@/components/Molecules/Title';
import DataHandleBox from '@components/Organism/Accompany/DataHandleBox';

const AccompanyPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title={'동행'} isWithBtn={true} btnTxt={'글쓰기'} />
        <DataHandleBox />
      </Container>
      <Footer />
    </>
  );
};

export default AccompanyPage;

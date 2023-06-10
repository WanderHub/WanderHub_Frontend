import React from 'react';
import Footer from '@components/Organism/Common/Footer';
import Header from '@components/Organism/Common/Header';
import Container from '@components/Atoms/Container';
import Title from '@components/Molecules/Title';
import PostDataHandleBox from '@components/Organism/Accompany/postPage/PostDataHandleBox';

const AccompanyPost = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title={'동행 글쓰기'} isWithBtn={false} />
        <PostDataHandleBox />
      </Container>
      <Footer />
    </>
  );
};

export default AccompanyPost;

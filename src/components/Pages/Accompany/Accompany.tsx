import Footer from '@components/Organism/Common/Footer';
import Header from '@components/Organism/Common/Header';
import React from 'react';
import Container from '@/components/Atoms/Container';
import MapBox from '@/components/Organism/Accompany/MapBox';
import Calender from '@/components/Atoms/Calender';
import Title from '@/components/Molecules/Title';
import SearchBox from '@components/Molecules/SearchBox';

const AccompanyPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title={'동행'} isWithBtn={true} btnTxt={'글쓰기'} />
        <SearchBox
          buttonProps={{
            clickEvent: () => {
              console.log(123);
            },
            children: '검색',
          }}
          inputProps={{ classNameProps: 'border-2 w-8/12 h-9 px-3 rounded-full' }}
        />
        <div className="flex">
          <MapBox />
          <Calender />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AccompanyPage;

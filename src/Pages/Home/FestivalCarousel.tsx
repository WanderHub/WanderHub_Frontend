import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data.json';

const FestivalCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="flex justify-center">
      <div className="flex-col w-2/3 mt-10">
        <Slider className="h-72 bg-amber-50" {...settings}>
          {data.festival.map(e => {
            return (
              <div key="e" className="w-full h-full">
                <img src={e.imgSrc} alt={e.name} className="float-left w-1/3 h-72 bg-primary" />
                <div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
                  <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                      Festival
                    </h2>
                    <p className="mt-1 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white">
                      {e.name}
                    </p>
                  </div>
                  <div className="flex flex-wrap dark:text-white">
                    <div className="w-full p-5 md:w-1/2 md:border-r lg:w-1/3">
                      <div className="flex items-center mb-6">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="w-6 h-6 text-indigo-500"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                        </svg>
                        <div className="ml-4 text-xl">Period</div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        {e.startDate} - {e.endDate}
                      </p>
                    </div>
                    <div className="w-full p-5 md:w-1/2 lg:w-1/3 lg:border-r">
                      <div className="flex items-center mb-6">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="w-6 h-6 text-indigo-500"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                        </svg>
                        <div className="ml-4 text-xl">Location</div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        {e.location}
                      </p>
                    </div>
                    <div className="w-full p-5 md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
                      <div className="flex items-center mb-6">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="w-6 h-6 text-indigo-500"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                        </svg>
                        <div className="ml-4 text-xl">Tel</div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        {e.tel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default FestivalCarousel;

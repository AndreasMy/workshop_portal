/* eslint-disable react/prop-types */
import { SlideContent } from '../slideContent/SlideContent';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';
import "../../../styles/BlogEntries.css";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const SwiperComponent = ({dataArray}) => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {dataArray.map((item) => (
        <SwiperSlide key={item.id}>
          <SlideContent media={item.video} content={item.text}/>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}

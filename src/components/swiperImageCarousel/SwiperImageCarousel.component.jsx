// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import "./SwiperImageCarousel.styles.css"
import { imageSwiperData } from '../../data/carouselData.js';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export const SwiperImageCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="myImageSwiper"
      >
        {imageSwiperData.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image.image} alt={item.alt} className="swiper-image"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

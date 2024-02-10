// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import "./SwiperImageCarousel.css"


// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export  const  SwiperImageCarousel = () => {
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
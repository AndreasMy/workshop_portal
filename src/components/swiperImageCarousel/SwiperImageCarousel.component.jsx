// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import "./SwiperImageCarousel.styles.css"
import { imageSwiperData } from '../../data/carouselData';


// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export const SwiperImageCarousel = () => {
  return (
    <>
      <div className="swiper-navigation-container">
        <div className="navigation-buttons">
          {/* Use Swiper's built-in classes for compatibility */}
          <div className="swiper-button-prev custom-swiper-button-prev"></div>
          <div className="swiper-button-next custom-swiper-button-next"></div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Simplified configuration
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

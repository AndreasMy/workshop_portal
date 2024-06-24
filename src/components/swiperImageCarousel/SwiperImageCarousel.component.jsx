// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperImageCarousel.styles.css";
import { imageSwiperData } from "../../data/carouselData.js";
// import { Wrapper } from "../wrapper/Wrapper.component";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

export const SwiperImageCarousel = () => {
  return (
    <div className="img-carousel-wrapper">
      <div className="swiper-navigation-wrapper">
        <div className="swiper-navigation-container">
          <div className="custom-prev swiper-button-prev"></div>
          <div className="custom-next swiper-button-next"></div>
        </div>
      </div>
      <div className="img-carousel-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="myImageSwiper"
        >
          {imageSwiperData.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image.image}
                alt={item.alt}
                className="swiper-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

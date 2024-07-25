import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperImageCarousel.styles.css";
import { imageSwiperData } from "../../data/carouselData.js";

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
            type: "fraction",
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          autoplay={{
            delay: 4500, // default autoplay delay
            disableOnInteraction: true,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
              autoplay: {
                delay: 4500,
                disableOnInteraction: true,
              },
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              autoplay: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
              autoplay: false,
            },
          }}
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

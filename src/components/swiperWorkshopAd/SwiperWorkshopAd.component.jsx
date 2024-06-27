/* eslint-disable react/prop-types */
import { SlideContent } from "../slideContent/slideContent.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SwiperWorkshopAd = ({ dataArray, slidesPerView }) => {
  return (
    <>
      <div className="swiper-navigation-container workshop-navigation-container">
        <div className="custom-prev swiper-button-prev"></div>
        <div className="custom-next swiper-button-next"></div>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        {dataArray.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideContent media={item.media} content={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

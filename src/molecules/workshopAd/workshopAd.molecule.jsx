/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import "../../styles/BlogEntries.styles.css";
import "./workshopAd.styles.css";
import { entryData } from "../../data/blogData";
import { InfoPanel } from "../../components/infoPanel/infoPanel.component";
import { Button } from "../../components/button/button.component";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const getMediaType = (src) => {
  const extension = src.split(".").pop().toLowerCase();
  const videoExtensions = ["mp4", "webm", "ogg"];
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];

  if (videoExtensions.includes(extension)) {
    return "video";
  } else if (imageExtensions.includes(extension)) {
    return "image";
  }
  return null;
};

export const WorkshopAd = ({
  wrapperClassName = "",
  blogContainerClassName = "",
}) => {
  return (
    <>
      {entryData.map((entry, index) => (
        <div key={index} className={`workshop-poster-container ${wrapperClassName}`}>
          <div className={`poster-entry ${blogContainerClassName}`}>
            <div className="poster-banner">
              <h1 className="banner-heading">{entry.title}</h1>
              <div className="poster-line-overlay"></div>
              <InfoPanel
                entry={entry}
                containerClassName="workshop-banner-info-wrapper"
                liClassName="workshop-banner-info"
                headerClassName="workshop-banner-heading"
                paraClassName="workshop-banner-para"
              />
            </div>

            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              pagination={{
                clickable: true,
                // type: "fraction",
              }}
              navigation={{
                nextEl: `.custom-next-${index}`,
                prevEl: `.custom-prev-${index}`,
              }}
              modules={[Pagination, Navigation, FreeMode]}
              className="mySwiper"
            >
              {entry.slideContent.map((item) => {
                const mediaType = getMediaType(item.media.src);
                return (
                  <SwiperSlide key={item.id}>
                    <div className="slide-content-wrapper">
                      <div className="slide-left">
                        {mediaType === "video" ? (
                          <video
                            src={item.media.src}
                            className={item.media.className}
                            loop
                            muted
                            autoPlay
                          />
                        ) : mediaType === "image" ? (
                          <img
                            src={item.media.src}
                            className={item.media.className}
                            alt={item.media.alt || "Slide media"}
                          />
                        ) : (
                          <p>Unsupported media type</p>
                        )}
                      </div>

                      <div className="slide-right-content">
                        <h1 className="slide-content-header">
                          {item.text.header}
                        </h1>
                        <ul className="slide-content-text-container">
                          {item.text.paragraphs.map((para, index) => (
                            <li key={index}>
                              <p className="slide-content-paragraph">{para}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
                    <span className="workshop-swiper-navigation-container">
                      <div
                        className={`custom-prev-${index} swiper-button-prev`}
                      ></div>
                      <div
                        className={`custom-next-${index} swiper-button-next`}
                      ></div>
                    </span>
            </Swiper>

            <Button className="workshop-btn" url={entry.href}>
              {entry.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

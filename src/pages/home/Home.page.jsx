/* eslint-disable no-unused-vars */
/* import "../../styles/.styles.css"; */
import { ImageCarousel } from "../../components/imageCarousel/ImageCarousel.component";
import { Wrapper } from "../../components/Wrapper/Wrapper.component";
import { Button } from "../../components/button/Button.component";
import { WorkshopAd } from "../../components/workshopAd/WorkshopAd.component";
import { ImageSwiper } from "../../components/imageSwiper/ImageSwiper.component";

export const HomePage = () => {
  return (
    <>
      <ImageCarousel
        wrapperClassName="carousel-wrapper"
        containerClassName="carousel-container"
        itemClassName="carousel-gallery-image"
      >
        <Wrapper
          wrapperClassName="carousel-overlay-wrapper"
          containerClassName="carousel-overlay-container"
        >
          <div className="carousel-overlay-left">
            <h2 className="carousel-overlay-header">Upcoming Workshops</h2>
            <div className="carousel-line-overlay"></div>
          </div>
        </Wrapper>
      </ImageCarousel>

      <Wrapper
        wrapperClassName="workshop-content-wrapper"
        containerClassName="workshop-content-container"
      >
        <WorkshopAd
          wrapperClassName="workshop-poster-container"
          blogContainerClassName="poster-entry"
        />
      </Wrapper>
      <Wrapper
        wrapperClassName="img-carousel-content-wrapper"
        containerClassName="img-carousel-content-container"
      >
        <ImageSwiper
          wrapperClassName="img-carousel-wrapper"
          blogContainerClassName="img-carousel-container"
        />
      </Wrapper>
    </>
  );
};

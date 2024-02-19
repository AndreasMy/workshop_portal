/* eslint-disable no-unused-vars */
/* import "../../styles/SplashImage.css"; */
import { ImageCarousel } from "../content/image-carousel/ImageCarousel";
import { ContentWrapper } from "../layout/ContentWrapper";
import { Button } from "../UI/ButtonComponent";
import { WorkshopAd } from "../content/workshop-ad/WorkshopAd";
import { ImageSwiper } from "../content/imageSwiper/ImageSwiper";

export const HomePage = () => {
  return (
    <>
      <ImageCarousel
        wrapperClassName="carousel-wrapper"
        containerClassName="carousel-container"
        itemClassName="carousel-gallery-image"
      >
        <ContentWrapper
          wrapperClassName="carousel-overlay-wrapper"
          containerClassName="carousel-overlay-container"
        >
          <div className="carousel-overlay-left">
            <h2 className="carousel-overlay-header">Upcoming Workshops:</h2>
            <div className="poster-line-overlay"></div>
          </div>
        </ContentWrapper>
      </ImageCarousel>

      <ContentWrapper
        wrapperClassName="workshop-content-wrapper"
        containerClassName="workshop-content-container"
      >
        <WorkshopAd
          wrapperClassName="workshop-poster-container"
          blogContainerClassName="poster-entry"
        />
      </ContentWrapper>
      <ContentWrapper
        wrapperClassName="img-carousel-content-wrapper"
        containerClassName="img-carousel-content-container"
      >
        <ImageSwiper
          wrapperClassName="img-carousel-wrapper"
          blogContainerClassName="img-carousel-container"
        />
      </ContentWrapper>
    </>
  );
};

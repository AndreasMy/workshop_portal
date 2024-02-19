/* eslint-disable no-unused-vars */
/* import "../../styles/.styles.css"; */
import { ImageCarousel } from "../components/content/imageCarousel/ImageCarousel.component";
import { ContentWrapper } from "../components/layout/contentWrapper.component";
import { Button } from "../components/UI/buttonComponent.component";
import { WorkshopAd } from "../components/content/workshopAd/WorkshopAd.component";
import { ImageSwiper } from "../components/content/imageSwiper/ImageSwiper.component";

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

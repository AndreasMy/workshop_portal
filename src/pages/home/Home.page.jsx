/* eslint-disable no-unused-vars */
/* import "../../styles/.styles.css"; */
import React from "react";
import { ImageCarousel } from "../../components/imageCarousel/imageCarousel.component";
import { Wrapper } from "../../components/wrapper/Wrapper.component";
import { Button } from "../../components/button/button.component";
import { WorkshopAd } from "../../components/workshopAd/workshopAd.component";
import { ImageSwiper } from "../../components/imageSwiper/imageSwiper.component";

import { entryData } from "../../data/blogData";
import { ScrollToSection } from "../../components/scrollToSection/scrollToSection.component";

import './home.styles.css'

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
            <h4 className="carousel-overlay-header">Kurs Høsten 2024:</h4>
            {/* <div className="carousel-line-overlay"></div> */}
            <ScrollToSection
              data={entryData}
              sectionId="#workshopContentWrapper"
            />
          </div>
        </Wrapper>
      </ImageCarousel>

      <Wrapper
        wrapperClassName="img-carousel-content-wrapper"
        containerClassName="img-carousel-content-container"
      >
        <ImageSwiper
          wrapperClassName="img-carousel-wrapper"
          blogContainerClassName="img-carousel-container"
        />
      </Wrapper>
      <Wrapper
        wrapperId="workshopContentWrapper"
        wrapperClassName="workshop-content-wrapper"
        containerClassName="workshop-content-container"
      >
        <WorkshopAd
          wrapperClassName="workshop-poster-container"
          blogContainerClassName="poster-entry"
        />
      </Wrapper>
    </>
  );
};

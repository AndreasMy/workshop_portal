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
import { linkToGallery } from "../../data/headerData";

import "./home.styles.css";
import { Nav } from "../../components/nav/nav.component";

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
        <div className="homepage-header-wrapper">
          <div className="homepage-header-upper-container">
            <h3 className="homepage-header">Selected Paintings</h3>
            <Nav
              data={linkToGallery}
              ulClassName={"header-nav-links"}
              itemClassName={"header-link"}
              liClassName={"header-link-li"}
            ></Nav>
          </div>
          <div className="homepage-header-lower-container">
            <div className="homepage-header-line"></div>
          </div>
        </div>
        <ImageSwiper
          wrapperClassName="img-carousel-wrapper"
          blogContainerClassName="img-carousel-container"
        />
        <div className="homepage-header-wrapper">
          <div className="homepage-header-upper-container">
            <h4 className="homepage-header">About my Work</h4>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            omnis, sit, est adipisci temporibus sed quibusdam laboriosam in
            expedita ut quisquam fugit hic tempore repudiandae dolore vitae vero
            dolorem aliquid.
          </p>
        </div>
      </Wrapper>
      <Wrapper
        wrapperId="workshopContentWrapper"
        wrapperClassName="workshop-content-wrapper"
        containerClassName="workshop-content-container"
      >
        <div className="homepage-workshop-header-wrapper">
          <div className="homepage-header-upper-container">
            <h3 className="homepage-header">Upcoming Workshops</h3>
          </div>
          <div className="homepage-header-lower-container">
            <div className="homepage-header-line"></div>
          </div>
        </div>
        <WorkshopAd
          wrapperClassName="workshop-poster-container"
          blogContainerClassName="poster-entry"
        />
      </Wrapper>
    </>
  );
};

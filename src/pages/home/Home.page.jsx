/* eslint-disable no-unused-vars */
import React from "react";
import { ImageCarousel } from "../../components/imageCarousel/imageCarousel.component";
import { Wrapper } from "../../components/wrapper/Wrapper.component";
import { WorkshopAd } from "../../components/workshopAd/workshopAd.component";
import { ImageSwiper } from "../../components/imageSwiper/imageSwiper.component";
import { ScrollToSection } from "../../components/scrollToSection/scrollToSection.component";
import { PageSection } from "../../components/pageSection/pageSection.component";
import { TextElement } from "../../components/textElement/textElement.component";
import { SectionHeader } from "../../molecules/sectionHeader/sectionHeader.component";

import { entryData } from "../../data/blogData";
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
            <ScrollToSection
              data={entryData}
              sectionId="#workshopContentWrapper"
            />
          </div>
        </Wrapper>
      </ImageCarousel>

      <PageSection
        wrapperClassName="img-carousel-content-wrapper"
        containerClassName="img-carousel-content-container"
        useInnerContainer={true}
      >
        <SectionHeader
          sectionWrapperClassName={"homepage-header-wrapper"}
          sectionContainerClassName={"homepage-header-upper-container"}
          title={"Selected Paintings"}
          navData={linkToGallery}
          showUnderLine={true}
        />

        <ImageSwiper
          wrapperClassName="img-carousel-wrapper"
          blogContainerClassName="img-carousel-container"
        />
        <div className="homepage-header-wrapper">
          <div className="homepage-header-upper-container">
            <TextElement as="h4" className="homepage-header">
              About my Work
            </TextElement>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            omnis, sit, est adipisci temporibus sed quibusdam laboriosam in
            expedita ut quisquam fugit hic tempore repudiandae dolore vitae vero
            dolorem aliquid.
          </p>
        </div>
      </PageSection>

      <PageSection
        wrapperId="workshopContentWrapper"
        wrapperClassName="workshop-content-wrapper"
        containerClassName="workshop-content-container"
      >
        <SectionHeader
          sectionWrapperClassName={"homepage-workshop-header-wrapper"}
          sectionContainerClassName={"homepage-header-upper-container"}
          title={"Upcoming Workshops"}
          showNav={false}
          showUnderLine={true}
        />
        <WorkshopAd
          wrapperClassName="workshop-poster-container"
          blogContainerClassName="poster-entry"
        />
      </PageSection>
    </>
  );
};

/* eslint-disable no-unused-vars */
import React from "react";
import { ImageCarousel } from "../../components/imageCarousel/imageCarousel.component";
import { Wrapper } from "../../components/wrapper/Wrapper.component";
import { WorkshopAd } from "../../molecules/workshopAd/workshopAd.molecule";
import { SwiperImageCarousel } from "../../components/swiperImageCarousel/swiperImageCarousel.component";
import { ScrollToSection } from "../../components/scrollToSection/scrollToSection.component";
import { PageSection } from "../../components/pageSection/pageSection.component";
import { TextElement } from "../../components/textElement/textElement.component";
import { SectionHeader } from "../../molecules/sectionHeader/sectionHeader.molecule";

import { entryData } from "../../data/blogData";
import { homepageText } from "../../data/pageTextData";
import { linkToGallery } from "../../data/headerData";

import "./home.styles.css";

export const HomePage = () => {
  return (
    <>
      <ImageCarousel>
        <Wrapper
          wrapperClassName="carousel-overlay-wrapper"
          containerClassName="carousel-overlay-container"
        >
          <div className="carousel-overlay-left">
            <TextElement as="h4" className="carousel-overlay-header">
              Kurs Høsten 2024:
            </TextElement>
            <ScrollToSection
              data={entryData}
              sectionId="#workshopContentWrapper"
            />
          </div>
        </Wrapper>
      </ImageCarousel>

      <PageSection
        containerProps={{
          style: {
            justifyContent: "center",
            padding: "3% 0",
          },
        }}
      >
        <SectionHeader
          title={"Selected Paintings"}
          navData={linkToGallery}
          showUnderLine={true}
          sectionHeaderWrapperClassName="selected-paintings-header-wrapper"
        />
        <SwiperImageCarousel />
        <SectionHeader
          title={"About my Work"}
          showParagraph={true}
          paragraphData={homepageText}
        ></SectionHeader>
      </PageSection>

      <PageSection
        wrapperId="workshopContentWrapper"
        containerClassName="workshop-content-container"
        containerProps={{
          style: {
            padding: "0 0 5% 0",
          },
        }}
      >
        <SectionHeader
          title={"Upcoming Workshops"}
          showNav={false}
          showUnderLine={true}
        />
        <WorkshopAd
        />
      </PageSection>
    </>
  );
};

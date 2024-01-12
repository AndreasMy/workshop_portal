// import { BlogEntries } from '../components/blogpost/BlogEntries';
import "../styles/SplashImage.css";
//import { homepageData } from '../data/homepageData';
//import { ImageContainer } from '../components/Common/ImageContainer';
import { ImageCarousel } from "../components/GalleryComponents/ImageCarousel";
import { PageSection } from "../components/Common/PageSection";
import { BlogEntries } from "../components/blogpost/BlogEntries";

export const HomePage = () => {
  return (
    <>
      <ImageCarousel />
      <PageSection
        headerText={"Upcoming Workshops"}
        wrapperClassName="homepage-workshop-wrapper"
        containerClassName="homepage-workshop-container"
      >
        <BlogEntries
          wrapperClassName="poster-container"
          blogContainerClassName="poster-entry"
        />
      </PageSection>
    </>
  );
};

import "../styles/SplashImage.css";
import { ImageCarousel } from "../components/GalleryComponents/ImageCarousel";
import { PageSection } from "../components/Common/PageSection";
import { BlogEntries } from "../components/blogpost/BlogEntries";

export const HomePage = () => {
  return (
    <>
      <ImageCarousel />
      <PageSection
        headerText={"Upcoming Workshops"}
        wrapperClassName="content-wrapper"
        containerClassName="workshop-content-container"
      >
        <BlogEntries
          wrapperClassName="poster-container"
          blogContainerClassName="poster-entry"
          showTextContent={false}
          isSingleImage={true}
        />
      </PageSection>
    </>
  );
};

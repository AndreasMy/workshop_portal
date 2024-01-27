import "../../styles/SplashImage.css";
import { ImageCarousel } from "../content/ImageCarousel";
import { PageSection } from "../content/PageSection";
import { BlogEntries } from "../content/BlogEntries";

export const HomePage = () => {
  return (
    <>
      <ImageCarousel />
    {/*   <PageSection
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
      </PageSection> */}
    </>
  );
};

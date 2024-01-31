import "../../styles/SplashImage.css";
import { ImageCarousel } from "../content/ImageCarousel";
import { ContentWrapper } from "../layout/ContentWrapper";
import { BlogEntries } from "../content/BlogEntries";

export const HomePage = () => {
  return (
    <>
      <ImageCarousel />
    {/*   <ContentWrapper
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
      </ContentWrapper> */}
    </>
  );
};

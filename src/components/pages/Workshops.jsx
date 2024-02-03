import { ContentWrapper } from "../layout/ContentWrapper";
// import { BlogEntries } from "../content/BlogEntries";
import { WorkshopAd } from "../content/workshop-ad/WorkshopAd";

export const Workshops = () => {
  return (
    <ContentWrapper
      wrapperClassName="content-wrapper"
      containerClassName="content-container"
    >
      <WorkshopAd 
        wrapperClassName="workshop-poster-container"
        blogContainerClassName="poster-entry"
      />
    </ContentWrapper>
  );
};

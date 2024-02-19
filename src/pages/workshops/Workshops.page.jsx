import { ContentWrapper } from "../../components/contentWrapper/ContentWrapper.component";
import { WorkshopAd } from "../../components/workshopAd/WorkshopAd.component";
// import { BlogEntries } from "../content/BlogEntries";

export const Workshops = () => {
  return (
    <ContentWrapper
      wrapperClassName="content-wrapper"
      containerClassName="content-container workshop-content-container"
    >
{/*       <div className="workshop-page-banner">
        <h2>Jeg tilbyr 2 helgekurs i våren 2024:</h2>
      </div> */}
      <WorkshopAd 
        wrapperClassName="workshop-poster-container"
        blogContainerClassName="poster-entry"
      />
    </ContentWrapper>
  );
};

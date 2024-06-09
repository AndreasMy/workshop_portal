import { Wrapper } from "../../components/wrapper/Wrapper.component";
import { WorkshopAd } from "../../molecules/workshopAd/workshopAd.molecule";
// import { BlogEntries } from "../content/BlogEntries";

export const Workshops = () => {
  return (
    <Wrapper
      wrapperClassName="content-wrapper"
      containerClassName="content-container workshop-content-container"
    >
      <WorkshopAd 
        wrapperClassName="workshop-poster-container"
        blogContainerClassName="poster-entry"
      />
    </Wrapper>
  );
};

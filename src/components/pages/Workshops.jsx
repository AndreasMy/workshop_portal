import { ContentWrapper } from "../content/ContentWrapper";
import { BlogEntries } from "../content/BlogEntries";

export const Workshops = () => {
  return (
    <ContentWrapper
      headerText={""}
      wrapperClassName="content-wrapper"
      containerClassName="content-container"
    >
      <BlogEntries
        wrapperClassName="poster-container"
        blogContainerClassName="poster-entry"
        showTextContent={true}
      />
    </ContentWrapper>
  );
};

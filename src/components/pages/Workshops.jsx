import { PageSection } from "../content/PageSection";
import { BlogEntries } from "../content/BlogEntries";

export const Workshops = () => {
  return (
    <PageSection
      headerText={""}
      wrapperClassName="content-wrapper"
      containerClassName="content-container"
    >
      <BlogEntries
        wrapperClassName="poster-container"
        blogContainerClassName="poster-entry"
        showTextContent={true}
      />
    </PageSection>
  );
};

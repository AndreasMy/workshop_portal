import { PageSection } from "../components/Common/PageSection";
import { BlogEntries } from "../components/blogpost/BlogEntries";

export const Workshops = () => {
  return (
    <>

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
    </>
  );
};

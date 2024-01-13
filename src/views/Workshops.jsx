import { BlogEntries } from "../components/blogpost/BlogEntries";

export const Workshops = () => {
  return (
    <>
    <div className="workshop-content-wrapper">

      <BlogEntries
        wrapperClassName="poster-container"
        blogContainerClassName="poster-entry"
        showTextContent={true}
        />
        </div>
    </>
  );
};

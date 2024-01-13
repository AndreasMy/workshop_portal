import "../../styles/BlogEntries.css";
import { ImageContainer } from "../Common/ImageContainer";
import { entryData } from "../../data/blogData";
import { BlogTextContent } from "./BlogTextContent";

export const BlogEntries = ({
  wrapperClassName = "",
  blogContainerClassName = "",
  isSingleImage,
  imgIndex,
  showTextContent,
}) => {
  return (
    <>
      {entryData.map((entry, index) => (
        <div className={wrapperClassName}>
          <a
            key={index}
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={blogContainerClassName}>
              <ImageContainer
                images={entry.images}
                containerClassName={"poster-img-header"}
              />
              <h2 className="poster-header">{entry.title}</h2>
              <div className="poster-line"></div>
              <div className="poster-info-container">
                <p>Sted : {entry.location}</p>
                <p>|</p>
                <p>Dato: {entry.date}</p>
              </div>
            </div>
          </a>
          {showTextContent ? (
            <BlogTextContent entry={entry} index={index} />
          ) : null}
        </div>
      ))}
    </>
  );
};

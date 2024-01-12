import "../../styles/BlogEntries.css";
import { ImageContainer } from "../Common/ImageContainer";
import { entryData } from "../../data/blogData";

export const BlogEntries = ({
  wrapperClassName = "",
  blogContainerClassName = "",
  isSingleImage,
  imgIndex,
}) => {
  return (
    <>
      {entryData.map((entry, index) => (
        <a
          key={index}
          className={wrapperClassName}
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
      ))}
    </>
  );
};

import "../../styles/BlogEntries.css";
import { ImageContainer } from "../Common/ImageContainer";
import { entryData } from "../../data/blogData";
import { BlogTextContent } from "./BlogTextContent";
import { BlogInfo } from "./BlogInfo";
import { Button } from "../common/ButtonComponent";

export const BlogEntries = ({
  wrapperClassName = "",
  blogContainerClassName = "",
  isSingleImage,
  showTextContent,
}) => {
  return (
    <>
      {entryData.map((entry, index) => (
        <div className={wrapperClassName} key={index}>
          <a href={entry.href} target="_blank" rel="noopener noreferrer" className="a-wrapper">
            <div className={blogContainerClassName}>
              {isSingleImage ? (
                <ImageContainer
                  images={entry.defaultImage}
                  containerClassName={"poster-img-header"}
                />
              ) : (
                <ImageContainer
                  images={entry.images}
                  containerClassName={"poster-img-header"}
                  hasOverlay={true}
                />
              )}
              <div
                className={
                  showTextContent
                    ? "header-container-over-image"
                    : "header-container-under-image"
                }
              >
                <h2
                  className={
                    showTextContent ? "poster-header-overlay" : "poster-header"
                  }
                >
                  {entry.descriptiveTitle}
                </h2>
                <h2
                  className={
                    showTextContent ? "poster-header-overlay" : "poster-header"
                  }
                >
                  {entry.title}
                </h2>
                <div
                  className={
                    showTextContent ? "poster-line-overlay" : "poster-line"
                  }
                ></div>
              </div>{" "}
              {showTextContent ? null : (
                <div className="poster-info-container">
                  <p>Sted : {entry.location}</p>
                  <p>|</p>
                  <p>Dato: {entry.date}</p>
                </div>
              )}
            </div>
          </a>
          {showTextContent ? (
            <div className="blog-text-wrapper">
              <BlogTextContent entry={entry} index={index} />
              <aside className="workshop-info-wrapper">
                <BlogInfo entry={entry} />
                <Button className="workshop-cta" url={entry.href}>
                  Påmelding via Kursagenten
                </Button>
              </aside>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
};

import "../../styles/BlogEntries.css";
import { ImageBannerContainer } from "./ImageBannerContainer";
import { entryData } from "../../data/blogData";
import { TextSection } from "./TextSection";
import { InfoPanel } from "./InfoPanel";
import { Button } from "../UI/ButtonComponent";
import { ImageCarousel } from "./image-carousel/ImageCarousel";

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
          <a
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            className="a-wrapper"
          >
            <div className={blogContainerClassName}>
              {isSingleImage ? (
                <ImageBannerContainer
                  images={entry.defaultImage}
                  containerClassName={"poster-img-banner"}
                />
              ) : (
                <ImageBannerContainer
                  images={entry.images}
                  containerClassName={"poster-img-banner"}
                  hasOverlay={true}
                />
              )}
              <div
                className={
                  showTextContent
                    ? "banner-container-over-image"
                    : "banner-container-under-image"
                }
              >
                <h2
                  className={
                    showTextContent ? "poster-title-overlay" : "poster-title"
                  }
                >
                  {entry.descriptiveTitle}
                </h2>
                <h2
                  className={
                    showTextContent ? "poster-title-overlay" : "poster-title"
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
            <div className="blog-content-wrapper">
              <div className="blog-text-wrapper">
                <div className="blog-right-content">
{/*                   <TextSection
                    entry={entry}
                    index={index}
                    SectionElement="ul"
                    ItemElement="li"
                    /> */}
              <ImageCarousel
                wrapperClassName="poster-carousel-wrapper"
                containerClassName="poster-carousel-container"
                itemClassName="carousel-gallery-image"
                isImage={false}
                />
                  </div>
                <aside className="workshop-info-wrapper">
                  <InfoPanel entry={entry} />
                  <Button className="workshop-cta" url={entry.href}>
                    Påmelding via Kursagenten
                  </Button>
                </aside>
              </div>

            </div>
          ) : null}
        </div>
      ))}
    </>
  );
};

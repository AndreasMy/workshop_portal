/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../../styles/BlogEntries.css";
import { ImageBannerContainer } from "./ImageBannerContainer";
import { entryData } from "../../data/blogData";
import { InfoPanel } from "./InfoPanel";
import { Button } from "../UI/ButtonComponent";
import { SwiperComponent } from "./swiper/SwiperComponent";

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
                  <SwiperComponent dataArray={entry.slideContent} />
                </div>
                <aside className="workshop-info-wrapper">
                  <InfoPanel
                    entry={entry}
                    containerClassName="workshop-info-container"
                    liClassName="details-li-elem"
                    headerClassName="details-header"
                    paraClassName="details-text"
                  />
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

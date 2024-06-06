/* eslint-disable react/prop-types */
import "./slideContent.styles.css";
import "../swiperWorkshopAd/swiper.styles.css";

export const SlideContent = ({ media, content }) => {
  const getMediaType = (src) => {
    const extension = src.split(".").pop().toLowerCase();
    const videoExtensions = ["mp4", "webm", "ogg"];
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];

    if (videoExtensions.includes(extension)) {
      return "video";
    } else if (imageExtensions.includes(extension)) {
      return "image";
    }
    return null;
  };

  const mediaType = getMediaType(media.src);

  return (
    <div className="slide-content-wrapper">
      <div className="slide-left">
        {mediaType === "video" ? (
          <video
            src={media.src}
            className={media.className}
            loop
            muted
            autoPlay
          />
        ) : mediaType === "image" ? (
          <img
            src={media.src}
            className={media.className}
            alt={media.alt || "Slide media"}
          />
        ) : (
          <p>Unsupported media type</p>
        )}
      </div>

      <div className="slide-right-content">
        <h1 className="slide-content-header">{content.header}</h1>
        <ul className="slide-content-text-container">
          {content.paragraphs.map((para, index) => (
            <li key={index}>
              <p className="slide-content-paragraph">{para}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

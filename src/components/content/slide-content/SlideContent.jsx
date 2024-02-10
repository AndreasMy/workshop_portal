/* eslint-disable react/prop-types */
import "./slide-content.css";
import "../swiperWorkshopAd/swiper.css";

export const SlideContent = ({ media, content }) => {

  return (
    <div className="slide-content-wrapper">
      <div className="slide-left">
        <video
          src={media.videoSrc}
          className={media.className}
          loop
          muted
          autoPlay
        />
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

import { useEffect, useState } from "react";
import { carouselData } from "../../../data/carouselData";
import { entryData } from "../../../data/blogData";
import "../../../styles/ImageCarousel.css";

export const ImageCarousel = ({
  wrapperClassName = "",
  containerClassName = "",
  itemClassName = "",
  isImage = false,

}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselData.length
      );
    }, 14000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, isImage]);

  return (
    <div className={wrapperClassName}>
      <div className={containerClassName}>
        {isImage
          ? carouselData.map((item, index) => (
              <img
                key={index}
                src={item.image.image}
                alt={item.alt}
                className={`${itemClassName} ${
                  index === currentImageIndex ? "active" : ""
                }`}
              />
            ))
          : entryData[0].videos.map((item, index) => (
              <video
                key={index}
                src={item.videoSrc}
                alt={item.alt}
                className={`${itemClassName} ${
                  index === currentImageIndex ? "active" : ""
                }`}
                loop
                muted
                autoPlay
              />
            ))}
      </div>
      {/*       <div className="carousel-nav-container">
        <h2 className="carousel-title">Browse galleries</h2>
      </div> */}
    </div>
  );
};

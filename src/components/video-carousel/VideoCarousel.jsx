/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { entryData } from "../../data/blogData";
import "../../../styles/ImageCarousel.styles.css";

export const VideoCarousel = ({
  wrapperClassName = "",
  containerClassName = "",
  itemClassName = "",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % entryData[0].videos.length
      );
    }, 14000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className={wrapperClassName}>
      <div className={containerClassName}>
        {entryData[0].videos.map((item, index) => (
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
    </div>
  );
};

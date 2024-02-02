/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { carouselData } from "../../../data/carouselData";
import "../../../styles/ImageCarousel.css";

export const ImageCarousel = ({
  wrapperClassName = "",
  containerClassName = "",
  itemClassName = "",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselData.length
      );
    }, 14000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className={wrapperClassName}>
      <div className={containerClassName}>
        {carouselData.map((item, index) => (
          <img
            key={index}
            src={item.image.image}
            alt={item.alt}
            className={`${itemClassName} ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      {/*       <div className="carousel-nav-container">
        <h2 className="carousel-title">Browse galleries</h2>
      </div> */}
    </div>
  );
};

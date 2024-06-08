/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { carouselData } from "../../data/carouselData";
import "./imageCarousel.styles.css";

export const ImageCarousel = ({
  wrapperClassName = "",
  containerClassName = "",
  itemClassName = "",
  children,
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
    <div className={`carousel-wrapper ${wrapperClassName}`}>
      {children}
      <div className={`carousel-container ${containerClassName}`}>
        {carouselData.map((item, index) => (
          <img
            key={index}
            src={item.image.image}
            alt={item.alt}
            className={`carousel-gallery-image ${itemClassName} ${
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

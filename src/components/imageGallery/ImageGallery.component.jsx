/* eslint-disable react/prop-types */
import { useState } from "react";

import '../layout/LayoutMQueries.styles.css'
import "./imageGallery.styles.css";
import { Button } from "../button/button.component";
import { Lightbox } from "../lightbox/lightbox.component";

export const ImageGallery = ({ images, thumbnails, imgListClassName }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setCurrentIndex(null);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <>
      <ul className="gallery-container">
        {thumbnails.map((thumb, index) => (
          <li key={index} className={imgListClassName}>
            <Button
              className="image-container"
              onClick={() => handleClick(index)}
            >
              <img src={thumb.image} alt={thumb.alt} className={thumb.className} />
            </Button>
          </li>
        ))}
      </ul>

      <Lightbox
        isOpen={isModalOpen}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      >
        {currentIndex !== null && (
          <img
            src={images[currentIndex].image}
            alt={images[currentIndex].alt}
            className={`${images[currentIndex].className}-lightbox`}
          />
        )}
      </Lightbox>
    </>
  );
};

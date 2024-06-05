/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./lightbox.styles.css";
import { Button } from "../button/button.component";

const arrowLeft = "assets/arrow-left-wide-fill.svg";
const arrowRight = "assets/arrow-right-wide-fill.svg";

export const Lightbox = ({ isOpen, onClose, onPrev, onNext, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        onNext();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay">
      <div className="lightbox-header">
        <Button className="lightbox-close-button" onClick={onClose}>
          X
        </Button>
      </div>
      <div className="lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-controls ">
          <div className="lightbox-control lc-left" onClick={onPrev}>
            <Button className="lightbox-nav-button" onClick={onPrev}>
              <img src={arrowLeft} alt="Arrow SVG" className="nav-arrow" />
            </Button>
          </div>
          <div className="lightbox-control lc-right" onClick={onNext}>
            <Button className="lightbox-nav-button" onClick={onNext}>
              <img src={arrowRight} alt="Arrow SVG" className="nav-arrow" />
            </Button>
          </div>
        </div>

        <div className="lightbox-content">{children}</div>
      </div>
    </div>
  );
};

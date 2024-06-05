/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./lightbox.styles.css";
import { Button } from "../button/button.component";

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay">
      <div className="lightbox-header">
        <Button className="lightbox-close-button" onClick={onClose}>
          X
        </Button>
      </div>
      <div className="lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-controls">
          <div className="lightbox-control" onClick={onPrev}></div>
          <div className="lightbox-control" onClick={onNext}></div>
        </div>

        <div className="lightbox-content">{children}</div>
      </div>
    </div>
  );
};

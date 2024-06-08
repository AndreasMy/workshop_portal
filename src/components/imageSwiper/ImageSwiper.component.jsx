/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import "../../styles/BlogEntries.styles.css";
import { SwiperImageCarousel } from "../swiperImageCarousel/swiperImageCarousel.component";
import "./imageSwiper.styles.css"
/* import "../swiperImageCarousel/swiperImageCarousel.css" */

// first two divs should be replaced by Wrapper component
export const ImageSwiper = ({
  wrapperClassName = "",
  blogContainerClassName = "",
}) => {
  return (
    <>
      <div className={`img-carousel-wrapper ${wrapperClassName}`}>
        <div className={`img-carousel-container  ${blogContainerClassName}`}>
          <SwiperImageCarousel />
        </div>
      </div>
    </>
  );
};

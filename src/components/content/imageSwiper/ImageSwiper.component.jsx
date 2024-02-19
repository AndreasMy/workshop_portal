/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../../../styles/BlogEntries.styles.css";
import { SwiperImageCarousel } from "../swiperImageCarousel/swiperImageCarousel.component";
import "./ImageSwiper.styles.css"
/* import "../swiperImageCarousel/swiperImageCarousel.css" */

export const ImageSwiper = ({
  wrapperClassName = "",
  blogContainerClassName = "",
}) => {
  return (
    <>
      <div className={wrapperClassName}>
        <div className={blogContainerClassName}>
          <SwiperImageCarousel />
        </div>
      </div>
    </>
  );
};

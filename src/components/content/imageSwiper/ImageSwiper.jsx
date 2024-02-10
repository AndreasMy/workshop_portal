/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../../../styles/BlogEntries.css";
import { SwiperImageCarousel } from "../swiperImageCarousel/SwiperImageCarousel";
import "./imageSwiper.css";
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

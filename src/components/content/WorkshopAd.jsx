/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../../styles/BlogEntries.css";
import { ImageBannerContainer } from "./ImageBannerContainer";
import { entryData } from "../../data/blogData";
import { InfoPanel } from "./InfoPanel";
import { Button } from "../UI/ButtonComponent";
import { SwiperComponent } from "./swiper/SwiperComponent";

export const WorkshopAd = ({
  wrapperClassName = "",
  blogContainerClassName = "",
}) => {
  return (
    <>
      {entryData.map((entry, index) => (
        <div key={index} className={wrapperClassName}>
          <div className={blogContainerClassName}>
            <div className="poster-banner">
              <h1>{entry.title}</h1>
            </div>
            <div className="poster-line-overlay"></div>
            <SwiperComponent dataArray={entry.slideContent} />
          
          <Button className="workshop-btn" url={entry.href}>
            Påmelding via Kursagenten
          </Button>
          </div>
        </div>
      ))}
    </>
  );
};

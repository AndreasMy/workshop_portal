/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../../styles/BlogEntries.styles.css";
import "./workshopAd.styles.css";
import { entryData } from "../../data/blogData";
import { SwiperComponent } from "../swiperWorkshopAd/swiperWorkshopAd.component";
import { InfoPanel } from "../infoPanel/infoPanel.component";
import { Button } from "../button/button.component";

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
              <h1 className="banner-header">{entry.title}</h1>
            </div>
            <div className="poster-line-overlay"></div>
            <InfoPanel
              entry={entry}
              containerClassName="workshop-banner-info-wrapper"
              liClassName="workshop-banner-info"
              headerClassName="workshop-banner-header"
              paraClassName="workshop-banner-para"
            />
            <SwiperComponent
              dataArray={entry.slideContent}
              slidesPerView={"auto"}
            />
            <Button className="workshop-btn" url={entry.href}>
              Til Påmelding
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

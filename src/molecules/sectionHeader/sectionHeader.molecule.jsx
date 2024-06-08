/* eslint-disable react/prop-types */
import "./sectionHeader.styles.css";

import { TextElement } from "../../components/textElement/textElement.component";
import { Nav } from "../../components/nav/nav.component";

export const SectionHeader = ({
  title,
  sectionWrapperClassName = "",
  sectionContainerClassName = "",
  showUnderLine = false,
  showNav = true,
  navData = [],
}) => {
  return (
    <>
      <div className={`header-wrapper ${sectionWrapperClassName}`}>
        <div className={`header-container ${sectionContainerClassName}`}>
          <TextElement as="h3" className={"section-heading"}>
            {title}
          </TextElement>
          {showNav && (
            <Nav
              data={navData}
              ulClassName="header-nav-links"
              itemClassName="header-link"
              liClassName="header-link-li"
            />
          )}
        </div>
        {showUnderLine && (
          <div className="section-header-lower-container">
            <div className="section-header-line"></div>
          </div>
        )}
      </div>
    </>
  );
};

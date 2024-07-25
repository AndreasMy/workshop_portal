/* eslint-disable react/prop-types */
import "./sectionHeader.styles.css";

import { TextElement } from "../../components/textElement/textElement.component";
import { Nav } from "../../components/nav/nav.component";

export const SectionHeader = ({
  title,
  sectionHeaderWrapperClassName = "",
  sectionHeaderContainerClassName = "",
  sectionParagraphClassName = "",
  showUnderLine = false,
  showParagraph = false,
  showNav = true,
  paragraphData = [],
  navData = [],
  wrapperProps = {},
  // children,
}) => {
  return (
    <>
      <div
        className={`header-wrapper ${sectionHeaderWrapperClassName}`}
        {...wrapperProps}
      >
        <div className={`header-container ${sectionHeaderContainerClassName}`}>
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
        {showParagraph && (
          <ul className={`section-header-paragraph-container`}>
            {paragraphData.map((item, index) => (
              <li key={index}>
                <TextElement
                  as="p"
                  className={`section-header-paragraph ${sectionParagraphClassName}}`}
                >
                  {item}
                </TextElement>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

/* eslint-disable react/prop-types */
import './scrollToSection.styles.css'
import { Button } from "../button/button.component";

export const ScrollToSection = ({ data, sectionId,  }) => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ul className='workshop-scroll-to-section-list'>
      {data.map((entry, index) => (
        <li key={index} className='workshop-scroll-to-section-list-item'>
          <Button
            onClick={() => scrollToSection(sectionId)}
            className="workshop-scroll-to-section"
          >
            {entry.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

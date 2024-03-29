/* eslint-disable react/prop-types */
import './scrollToSection.styles.css'
import { Button } from "../button/Button.component";

export const ScrollToSection = ({ data, sectionId,  }) => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ul>
      {data.map((entry, index) => (
        <li key={index}>
          <Button
            onClick={() => scrollToSection(sectionId)}
            className="workshop-link-to-section"
          >
            {entry.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

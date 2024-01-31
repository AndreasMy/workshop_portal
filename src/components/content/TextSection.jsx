export const TextSection = ({
  entry,
  index,
  SectionElement = "section",
  ItemElement = "article",
}) => {
  return (
    <div className="blog-section">
      <p className="blog-text-headerTxt">{entry.text.headerText} </p>
      <SectionElement key={index} >
        {entry.text.paragraphs.map((paragraph, idx) => (
          <ItemElement key={idx}>
            {paragraph.header && (
              <h5 className="blog-text-paraHeader">{paragraph.header}</h5>
            )}
            <p className="blog-text">{paragraph.para}</p>
          </ItemElement>
        ))}
      </SectionElement>
    </div>
  );
};

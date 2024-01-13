
export const BlogTextContent = ({ entry, index }) => {
  return (
    <div key={index} className="blog-text-wrapper">
      <p>{entry.text.headerText} </p>
      {entry.text.paragraphs.map((paragraph, index) => (
        <div key={index}>
          {paragraph.header && <h5>{paragraph.header}</h5>}
          <p className="blog-text">{paragraph.para}</p>
        </div>
      ))}
    </div>
  );
};


export const BlogTextContent = ({ entry, index }) => {
  return (
    <section key={index} className="blog-section" >
      <p className="blog-text-headerTxt">{entry.text.headerText} </p>
      {entry.text.paragraphs.map((paragraph, index) => (
        <article key={index}>
          {paragraph.header && <h5 className="blog-text-paraHeader">{paragraph.header}</h5>}
          <p className="blog-text">{paragraph.para}</p>
        </article>
      ))}
    </section>
  );
};

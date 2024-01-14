export const BlogInfo = ({ entry }) => {
  return (
    <ul className="workshop-info-container">
      {entry.info.map((detail, index) => (
        <li className="details-li-elem" key={index}>
          <h4 className="details-header">{detail.name}</h4>
          <p className="details-text">{detail.value}</p>
        </li>
      ))}
    </ul>
  );
};

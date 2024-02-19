/* eslint-disable react/prop-types */
export const InfoPanel = ({
  entry,
  containerClassName = "",
  liClassName = "",
  headerClassName = "",
  paraClassName = "",
}) => {
  return (
    <ul className={containerClassName}>
      {entry.info.map((detail, index) => (
        <li className={liClassName} key={index}>
          <h4 className={headerClassName}>{detail.name}</h4>
          <p className={paraClassName}>{detail.value}</p>
        </li>
      ))}
    </ul>
  );
};

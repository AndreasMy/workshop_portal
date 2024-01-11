/* eslint-disable react/prop-types */
import '../../styles/PageSection.css';

export const PageSection = ({
  children,
  headerText,
  wrapperClassName = '',
  containerClassName = '',
}) => {
  return (
    <div className={wrapperClassName}>
      <h1>{headerText}</h1>
      <div className={containerClassName}>{children}</div>
    </div>
  );
};

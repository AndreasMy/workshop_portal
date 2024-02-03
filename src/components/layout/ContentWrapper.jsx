/* eslint-disable react/prop-types */
import '../../styles/PageSection.css';

export const ContentWrapper = ({
  children,
  wrapperClassName = '',
  containerClassName = '',
}) => {
  return (
    <div className={wrapperClassName}>
      <div className={containerClassName}>{children}</div>
    </div>
  );
};

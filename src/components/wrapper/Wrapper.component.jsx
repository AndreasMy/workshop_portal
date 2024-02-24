/* eslint-disable react/prop-types */
//import '../styles/PageSection.styles.css';

export const Wrapper = ({
  children,
  wrapperClassName = '',
  containerClassName = '',
  wrapperId = ""
}) => {
  return (
    <div className={wrapperClassName} id={wrapperId}>
      <div className={containerClassName}>{children}</div>
    </div>
  );
};

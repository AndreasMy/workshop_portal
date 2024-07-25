/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./pageSection.styles.css";

export const PageSection = ({
  children,
  wrapperClassName = "",
  containerClassName = "",
  wrapperId = "",
  bannerContent = null,
  bannerProps = {},
  wrapperProps = {},
  containerProps = {},
  useInnerContainer = false,
  containerDisplayOptions = "flex",
}) => {
  const className =
    containerDisplayOptions === "flex"
      ? "section-container-flex"
      : "section-container-grid";

  const content = useInnerContainer ? (
    <div className="section-inner-container">{children}</div>
  ) : (
    children
  );

  return (
    <div
      id={wrapperId}
      className={`section-wrapper ${wrapperClassName}`}
      {...wrapperProps}
    >
      {bannerContent && (
        <div className="section-banner" {...bannerProps}>
          {bannerContent}
        </div>
      )}
      <div
        className={`${className} section-container ${containerClassName}`}
        {...containerProps}
      >
        {content}
      </div>
    </div>
  );
};

PageSection.propTypes = {
  containerDisplayOptions: PropTypes.oneOf(["flex", "grid"]), // Removed isRequired
};

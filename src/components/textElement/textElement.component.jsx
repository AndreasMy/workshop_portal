/* eslint-disable react/prop-types */
import "./textElement.styles.css";

export const TextElement = ({
  as: Component = "h3",
  className,
  children,
  ...props
}) => {
  return (
    <Component className={`text-element ${className}`} {...props}>
      {children}
    </Component>
  );
};

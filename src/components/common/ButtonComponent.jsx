/* eslint-disable react/prop-types */

export const Button = ({ children, onClick, className = "", url }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <button className={`${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

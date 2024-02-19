/* eslint-disable react/prop-types */
export const ImageBannerContainer = ({ images, containerClassName, hasOverlay }) => {
  return (
    <div className={containerClassName}>
      {hasOverlay ? <div className="poster-img-overlay"></div> : null}
      {images.map((img, index) => (
        <img
          key={index}
          src={img.image}
          alt={img.alt}
          className={img.className}
        />
      ))}
    </div>
  );
};

/* eslint-disable react/prop-types */
export const ImageContainer = ({ images, containerClassName }) => {
  return (
    <>
      <div className={containerClassName}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.image}
            alt={img.alt}
            className={img.className}
          />
        ))}
      </div>
    </>
  );
};

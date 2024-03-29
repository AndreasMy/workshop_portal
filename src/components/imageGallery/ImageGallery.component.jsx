/* eslint-disable react/prop-types */
import '../../styles/LayoutMQueries.styles.css'


export const ImageGallery = ({ images, imgListClassName }) => {
  return (
    <>
      <ul className='gallery-container'>
        {images.map((img, index) => (
          <li key={index} className={imgListClassName} >
            <img src={img.image} alt={img.alt} />
          </li>
        ))}
      </ul>
    </>
  );
};

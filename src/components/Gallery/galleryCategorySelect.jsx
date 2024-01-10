/* eslint-disable react/prop-types */
import '../../styles/GalleryCategories.css';
import { Link } from 'react-router-dom';

export const GalleryCategories = ({
  data,
  ulClassName = '',
  liClassName = '',
  linkClassName = '',
  overlayClassName = '',
  titleClassname = '',
  imageClassName = '',
}) => {
  return (
    <nav className='cat-select-nav'>
      <ul className={ulClassName}>
        {data.map((item, index) => (
          <li key={index} className={liClassName}>
            <Link to={item.path} className={linkClassName}>
              <div className={overlayClassName}>
                <h2 className={titleClassname}>{item.title}</h2>
              </div>
              <img
                src={item.image.image}
                alt={item.image.image.alt}
                className={imageClassName}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

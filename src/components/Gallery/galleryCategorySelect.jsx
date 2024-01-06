/* eslint-disable react/prop-types */
import '../../styles/GalleryCategories.css';
import { Link } from 'react-router-dom';

export const GalleryCategories = ({
  data,
  ulClassName = '',
  linkClassName = '',
}) => {
  return (
    <nav>
      <ul className={ulClassName}>
        {data.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className={linkClassName}>
              <h2 className='cat-select-title'>{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

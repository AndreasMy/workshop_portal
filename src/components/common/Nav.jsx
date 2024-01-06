/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Nav = ({ data, ulClassName = '', itemClassName = '' }) => {
  return (
    <nav>
      <ul className={ulClassName}>
        {data.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className={itemClassName}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

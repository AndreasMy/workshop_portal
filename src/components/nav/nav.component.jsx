/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Nav = ({
  data = [],
  ulClassName = "",
  itemClassName = "",
  liClassName = "",
  isNavLink = false,
}) => {
  return (
    <nav>
      <ul className={ulClassName}>
        {data.map((item, index) => (
          <li key={index} className={liClassName}>
            {isNavLink ? (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `${itemClassName} ${itemClassName}-active`
                    : itemClassName
                }
              >
                {item.name}
              </NavLink>
            ) : (
              <Link to={item.path} className={itemClassName}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

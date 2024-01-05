/* eslint-disable react/prop-types */
export const Nav = ({ data, ulClassName = '', itemClassName = '' }) => {
  return (
    <nav>
      <ul className={ulClassName}>
        {data.map((item, index) => (
          <li key={index}>
            <a href={item.path} className={itemClassName}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

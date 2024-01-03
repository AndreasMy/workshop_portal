import { navItems } from '../../data/headerData';

export const Header = () => {
  return (
    <>
      <h2>Andreas Myklebust Art</h2>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.name} </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

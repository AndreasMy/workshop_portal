import { navItems } from '../../data/headerData';

export const Header = () => {
  return (
    <div className='header-content'>
      <h2>
        <a href='/'>Andreas Myklebust Art</a>
      </h2>
      <nav>
        <ul className='header-nav-links'>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path} className='header-link'>{item.name}  </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

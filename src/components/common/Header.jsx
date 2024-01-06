import '../../styles/Header.css';
import { navItems } from '../../data/headerData';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <div className='header-content'>
      <h2>
        <a href='/' className='header-title'>
          Andreas Myklebust Art
        </a>
      </h2>
      <Nav
        data={navItems}
        ulClassName={'header-nav-links'}
        itemclassName={'header-link'}
      />
    </div>
  );
};

import '../../styles/Header.css';
import { Link } from 'react-router-dom';
import { navItems } from '../../data/headerData';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <div className='header-content'>
      <h2>
        <Link to='/' className='header-title'>
          Andreas Myklebust Art
        </Link>
      </h2>
      <Nav
        data={navItems}
        ulClassName={'header-nav-links'}
        itemClassName={'header-link'}
        liClassName={'header-link-li'}
      />
    </div>
  );
};

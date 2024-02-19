/* eslint-disable react/prop-types */
import { Nav } from '../nav/nav.component';
import { navItems } from '../../data/headerData';
import './HamburgerMenu.styles.css';
import { Button } from '../button/Button.component';

export const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className='burger-wrapper'>
        <Button onClick={toggleMenu} className={'burger-close-btn'}>
          x
        </Button>
        <Nav
          data={navItems}
          ulClassName={'burger-nav-links'}
          itemClassName={'burger-link'}
          liClassName={'burger-link-li'}
        />
      </div>
    </div>
  );
};

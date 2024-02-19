/* eslint-disable react/prop-types */
import { Nav } from './nav.component';
import { navItems } from '../../data/headerData';
import '../../styles/HamburgerMenu.styles.css';
import { Button } from './buttonComponent.component';

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

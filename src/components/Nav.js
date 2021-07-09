import React from 'react';
import NavItem from './NavItem';
import {
  UilHome,
  UilBars,
  UilSearch,
  UilShoppingCart,
  UilUser,
} from '@iconscout/react-unicons';

import '../styles/nav.css';

const Nav = () => {
    return (
      <header className='nav__header'>
        <nav className='nav container'>
          <a href='#' className='nav__link'>
            <NavItem title='Home' Icon={UilHome} />
          </a>
          <a href='#' className='nav__link'>
            <NavItem title='Category' Icon={UilBars} />
          </a>
          <a href='#' className='nav__link'>
            <NavItem title='Search' Icon={UilSearch} />
          </a>
          <a href='#' className='nav__link'>
            <NavItem title='Cart' Icon={UilShoppingCart} />
          </a>
          <a href='#' className='nav__link'>
            <NavItem title='Account' Icon={UilUser} />
          </a>
        </nav>
      </header>
    );
}

export default Nav

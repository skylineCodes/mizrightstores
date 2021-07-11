import React from 'react';
import { Link } from 'react-router-dom';
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
        <nav className='nav'>
          <Link to='/' className='nav__link'>
            <NavItem title='Home' Icon={UilHome} />
          </Link>
          <Link to='/category' className='nav__link'>
            <NavItem title='Category' Icon={UilBars} />
          </Link>
          <Link to='/search' className='nav__link'>
            <NavItem title='Search' Icon={UilSearch} />
          </Link>
          <Link to='/cart' className='nav__link'>
            <NavItem title='Cart' Icon={UilShoppingCart} />
          </Link>
          <Link to='/account' className='nav__link'>
            <NavItem title='Account' Icon={UilUser} />
          </Link>
        </nav>
      </header>
    );
}

export default Nav

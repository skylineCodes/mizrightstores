import React from 'react';
import { Link } from 'react-router-dom';
import {
  UilShoppingCart,
} from '@iconscout/react-unicons';

import logo from '../mizright.png';
import '../styles/header.css';

const Header = () => {
    return (
      <div className='header'>
        <div className='logo__div'>
          <Link to='/' className='logo__link'>
            <img src={logo} alt='' className='logo' />
          </Link>
        </div>
        <div className='cart__div'>
          <UilShoppingCart size='35' color='#000' />
        </div>
      </div>
    );
}

export default Header;

import React from 'react';
import {
  UilShoppingCart,
} from '@iconscout/react-unicons';


import logo from '../mizright.png';
import '../styles/header.css';

const Header = () => {
    return (
      <div className='header'>
        <div className='logo__div'>
          <a href='#' className='logo__link'>
            <img src={logo} alt='' className='logo' />
          </a>
        </div>
        <div className='cart__div'>
          <UilShoppingCart size='35' color='#000' />
        </div>
      </div>
    );
}

export default Header;

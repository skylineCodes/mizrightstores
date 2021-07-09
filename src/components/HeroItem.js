import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/homepage.css';

const HeroItem = ({ title, image, textAlign, left, right }) => {
  return (
    <div className='card'>
      <img src={process.env.PUBLIC_URL + image} alt='' className='image__bg' />
      <section className='card__content' style={{ textAlign, left, right }}>
        <h2 className='title__text'>{title}</h2>
        <div className='button'>
          <span className='button__span--top'></span>
          <span className='button__span--right'></span>
          <span className='button__span--left'></span>
          <span className='button__span--bottom'></span>
          <Link to='https://www.google.com' className='button__link'>
            <span className='button__text'>Shop Collection</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

HeroItem.defaultProps = {
  left: '34',
  right: 'auto'
};

export default HeroItem

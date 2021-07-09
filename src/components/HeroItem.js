import React from 'react';

import '../styles/homepage.css';

const HeroItem = ({ title, image, textAlign, left, right }) => {
  return (
    <div className='card'>
      <img src={process.env.PUBLIC_URL + image} className='image__bg' />
      <section className='card__content' style={{ textAlign, left, right }}>
        <h2 className='title__text'>{title}</h2>
        <div className='button'>
          <span className='button__span--top'></span>
          <span className='button__span--right'></span>
          <span className='button__span--left'></span>
          <span className='button__span--bottom'></span>
          <a href='#' className='button__link'>
            <span className='button__text'>Buy Now</span>
          </a>
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

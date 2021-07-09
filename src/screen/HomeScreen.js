import React from 'react';
import { Link } from 'react-router-dom';
import HeroItem from '../components/HeroItem';
import Product from '../components/Product';

import '../styles/homepage.css';

const HomeScreen = () => {
  return (
    <>
      <section className='hero__section'>
        <HeroItem
          title='Classic Adire'
          image='/shirt-woman.jpg'
          textAlign='left'
        />
        <HeroItem
          title='Jumpsuit Comfy'
          image='/jumsuit.jpg'
          textAlign='right'
          left='auto'
          right='34px'
        />
        <HeroItem
          title='Ankara Collections'
          image='/ankara-fabric.jpg'
          textAlign='left'
        />
        <HeroItem
          title='Summer Shorts'
          image='/bum-short.jpg'
          textAlign='right'
          left='auto'
          right='34px'
        />
        <HeroItem
          title='Courtures'
          image='/couture-dress.jpg'
          textAlign='left'
        />
        <HeroItem
          title='Ready To Wear'
          image='/ready-to-wear.jpg'
          textAlign='right'
          left='auto'
          right='34px'
        />
      </section>
      <section className='product__display'>
        <Product
          imageOne='/checkers-1.png'
          imageTwo='/checkers-2.jpg'
          imageThree='/checkers-3.jpg'
          title='Lycra'
          price='2,500'
        />
        <Product
          imageOne='/red-top.jpg'
          imageTwo='/red-top-1.jpg'
          imageThree='/red-top-2.jpg'
          title='Silk'
          price='4,500'
        />
        <Product
          imageOne='/velvet.jpg'
          imageTwo='/velvet-1.jpg'
          imageThree='/velvet-2.jpg'
          title='Velvet'
          price='10,500'
        />
        <div className='product__display--read__more'>
          <Link
            to='/product/single'
            className='product__display--read__more--link'
          >
            <span className='product__display--read__more--text'>
              View More
            </span>
          </Link>
        </div>
      </section>
      <section className='banner__section'>
        <div className='banner__container'>
          <div className='banner__div'>
            <div className='banner__content'>
              <div className='left__content'>
                <h2 className='left__content--text'>
                  <b className='big__sale'>Big Sale</b>
                  All new fashion brands items up to 70% off
                  <small className='small__text'>Online Purchases Only</small>
                </h2>
              </div>
              <div className='right__content'>
                <span className='button__span--top white__stroke'></span>
                <span className='button__span--right white__stroke'></span>
                <span className='button__span--left white__stroke'></span>
                <span className='button__span--bottom white__stroke'></span>
                <a href='#' className='right__content--link'>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='collections'>
        <h1>Collections</h1>
      </section>
    </>
  );
};

export default HomeScreen;

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import '../styles/product.css';

import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const Product = ({ imageOne, imageTwo, imageThree, title, price }) => {
    return (
      <div className='product__body'>
        <Swiper
          pagination={true}
          loop={true}
          className='mySwiper product__card'
        >
          <SwiperSlide className='product__card--image'>
            {/* <div> */}
              <Link to='https://www.google.com'>
                <img
                  src={process.env.PUBLIC_URL + imageOne}
                  alt=''
                  width='660'
                  height='500'
                  className='image'
                />
              </Link>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className='product__card--image'>
            {/* <div> */}
              <Link to='https://www.google.com'>
                <img
                  src={process.env.PUBLIC_URL + imageTwo}
                  alt=''
                  width='660'
                  height='500'
                  className='image'
                />
              </Link>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className='product__card--image'>
            {/* <div> */}
              <Link to='https://www.google.com'>
                <img
                  src={process.env.PUBLIC_URL + imageThree}
                  alt=''
                  width='660'
                  height='500'
                  className='image'
                />
              </Link>
            {/* </div> */}
          </SwiperSlide>
        </Swiper>
        <div className='product__card--content'>
          <h4 className='title__text'>
            <Link to='https://www.google.com'>{title}</Link>
          </h4>
          <div className='product__card--price'>
            <span className='product__card--amount'>
              <span className='currency'>&#8358;</span>
              {price}
            </span>
          </div>
        </div>
        <Link
          to='https://www.google.com'
          className='product__card--link'
        ></Link>
      </div>
    );
}

export default Product

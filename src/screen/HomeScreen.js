import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UilHeadphonesAlt, UilCreditCard } from '@iconscout/react-unicons';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CategoryItem from '../components/CategoryItem';
import HeroItem from '../components/HeroItem';
import Product from '../components/Product';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import '../styles/homepage.css';

import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

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
        <div className='product__collection'>
          <div className='product__item--div'>
            <Product
              imageOne='/checkers-1.png'
              imageTwo='/checkers-2.jpg'
              imageThree='/checkers-3.jpg'
              title='Lycra'
              price='2,500'
            />
          </div>
          <div className='product__item--div'>
            <Product
              imageOne='/red-top.jpg'
              imageTwo='/red-top-1.jpg'
              imageThree='/red-top-2.jpg'
              title='Silk'
              price='4,500'
            />
          </div>
          <div className='product__item--div'>
            <Product
              imageOne='/velvet.jpg'
              imageTwo='/velvet-1.jpg'
              imageThree='/velvet-2.jpg'
              title='Velvet'
              price='10,500'
            />
          </div>
          <div className='product__item--div'>
            <Product
              imageOne='/velvet.jpg'
              imageTwo='/velvet-1.jpg'
              imageThree='/velvet-2.jpg'
              title='Velvet'
              price='10,500'
            />
          </div>
          <div className='product__item--div'>
            <Product
              imageOne='/velvet.jpg'
              imageTwo='/velvet-1.jpg'
              imageThree='/velvet-2.jpg'
              title='Velvet'
              price='10,500'
            />
          </div>
          <div className='product__item--div'>
            <Product
              imageOne='/velvet.jpg'
              imageTwo='/velvet-1.jpg'
              imageThree='/velvet-2.jpg'
              title='Velvet'
              price='10,500'
            />
          </div>
        </div>
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
        <div className='container'>
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
                <Link to='/product/single' className='right__content--link'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='category__section'>
        <div className='category__section--header'>
          <span className='category__section--header-span'>New And Solid</span>
          <h2 className='category__section--header-main'>Shop Category</h2>
        </div>
        <div className='category__item-section'>
          <div className='category__item--single'>
            <CategoryItem title='Kaftan' image='kaftan.jpg' />
          </div>
          <div className='category__item--single'>
            <CategoryItem title='Ankara Gown' image='ankara-gown.jpeg' />
          </div>
          <div className='category__item--single'>
            <CategoryItem title='Owambe' image='owambe.jpg' />
          </div>
        </div>
      </section>
      <hr className='line__breaker container' />
      <section className='feature__section'>
        <div className='feature__section--one'>
          <div className='feature__box'>
            <UilHeadphonesAlt className='svg' size='45' />
            <div className='feature__box--content'>
              <h3 className='feature__box--header'>Customer Assistance</h3>
              <h5>Need Assistance?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapib.
              </p>
            </div>
          </div>
        </div>
        <div className='feature__section--two'>
          <div className='feature__box'>
            <UilCreditCard className='svg' size='45' />
            <div className='feature__box--content'>
              <h3 className='feature__box--header'>Secured Payment</h3>
              <h5>Safe & Fast</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapib.
              </p>
            </div>
          </div>
        </div>
        <div className='feature__section--three'>
          <div className='feature__box'>
            <ReplyOutlinedIcon className='svg' style={{ fontSize: 45 }} />
            <div className='feature__box--content'>
              <h3 className='feature__box--header'>Free Returns</h3>
              <h5>Easy & Free</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapib.
              </p>
            </div>
          </div>
        </div>
        <div className='feature__section--four'>
          <div className='feature__box'>
            <LocalShippingIcon className='svg' style={{ fontSize: 45 }} />
            <div className='feature__box--content'>
              <h3 className='feature__box--header'>Free Shipping</h3>
              <h5>
                Order above <span className='currency'>&#8358;</span>15,000
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapib.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className='line__breaker container' />
      <section className='testimonial__section container'>
        <h1 className='testimonial__section--header'>
          What Our Clients Are Saying
        </h1>
        <Swiper
          pagination={true}
          clickable={true}
          loop={true}
          className='mySwiper testimonial__card'
        >
          <SwiperSlide className='testimonial__card--div'>
            <p className='testimonial__card--paragraph'>
              Ipsum dolor sit amet consectetur adipisicing elit. Fuga
              perferendis maiores, ipsam accusantium quidem accusamus itaque
              molestias a atque minus dolore, aperiam cumque impedit odio
              facilis suscipit at neque eaque.
            </p>
            <h5 className='testimonial__card--name'>Korede O,</h5>
            <small className='testimonial__card--state'>Osogbo</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial__card--div'>
            <p className='testimonial__card--paragraph'>
              Ipsum dolor sit amet consectetur adipisicing elit. Fuga
              perferendis maiores, ipsam accusantium quidem accusamus itaque
              molestias a atque minus dolore, aperiam cumque impedit odio
              facilis suscipit at neque eaque.
            </p>
            <h5 className='testimonial__card--name'>Luqman O,</h5>
            <small className='testimonial__card--state'>Osogbo</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial__card--div'>
            <p className='testimonial__card--paragraph'>
              Ipsum dolor sit amet consectetur adipisicing elit. Fuga
              perferendis maiores, ipsam accusantium quidem accusamus itaque
              molestias a atque minus dolore, aperiam cumque impedit odio
              facilis suscipit at neque eaque.
            </p>
            <h5 className='testimonial__card--name'>Mutiat O,</h5>
            <small className='testimonial__card--state'>Osogbo</small>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HomeScreen;

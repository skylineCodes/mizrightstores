import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ title, image }) => {
    return (
      <>
        <div className='category__section--image__div'>
          <img
            src={process.env.PUBLIC_URL + image}
            alt=''
            width='660'
            height='500'
            className='image'
          />
        </div>
        <div className='product__display--read__more'>
          <div className='category__section--category__text'>
            <h4 className='title__text'>{title}</h4>
          </div>
          <Link
            to='/category/single'
            className='product__display--read__more--link'
          >
            <span className='product__display--read__more--text'>Shop Now</span>
          </Link>
        </div>
      </>
    );
}

export default CategoryItem

import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //it dispatches an action --> reducer listen to that action --> and that how we manipulate state
    // add items to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {/* here we'll loop through the no and show stars that many times */}
          {
            // function that -> created an array of that value (say 5)
            Array(rating)
              .fill() //filled it with empty value
              .map((_) => (
                <p>⭐</p> //run this that no. times
              )) //now it will map through that no. of times
          }
        </div>
      </div>

      <img src={image} alt='' />
      <button className='product__button' onClick={addToBasket}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;

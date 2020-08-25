import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  //pulling basket from the store
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
      {/* add at the top of page */}
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is Empty!</h2>
            <p>
              You have no items in your cart. To buy one or more items, clcik
              'Add to cart' next to the the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Cart</h2>
            {/* list out all of the checkout product */}
            {basket?.map((item) => (
              // map through the basket -->  for every single item return me the product
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket?.length > 0 && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

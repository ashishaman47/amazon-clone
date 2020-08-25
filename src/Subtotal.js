import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      {/* price */}
      {/* we are using this as it can handle currency, decimal places for us and other buch of prop things */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains gifts
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //calling the selector func present inside reducer.js
        displayType={'text'}
        thousandSeparator={true} //separate by 1000
        prefix={'$'}
      />

      {/* button */}
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  // access of basket from data layer
  const [{ basket, user }] = useStateValue();

  console.log(basket);

  const login = () => {
    if (user) {
      //if there is user then perform signout
      auth.signOut();
    }
  };

  return (
    //   here we'll use nav here --> it tells that it's a nav bar
    <div className='header'>
      {/* logo on the left -> img */}
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>

      <div className='header__search'>
        {/* search box */}
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        {/* 1st links */}
        {/* if there is no user logged in then push it to login page otherwise */}
        <Link to={!user && '/login'} className='header__link'>
          <div onClick={login} className='header__option'>
            <span className='header__optionLineOne'>
              Hello {!user ? 'Guest' : user?.email}
            </span>
            <span className='header__optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        {/* 2nd links */}
        <Link to='/orders' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        {/* 3rd links */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        {/* Basket items with number */}
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            {/* Shopping Basket icon */}
            <ShoppingCartIcon />

            {/* Number of items in the basket*/}
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

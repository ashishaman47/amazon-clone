import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />

      {/* Product id, title, price, rating, image */}
      {/* Product */}
      <div className='home__row'>
        <Product
          id='789'
          title='Apple iPhone 11 Pro Max (256GB) - Gold'
          price={1698.32}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/611JavcU70L._SL1024_.jpg'
        />

        <Product
          id='123456'
          title='Samsung Galaxy Note 10 (Aura Glow, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers '
          price={997.43}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71JJB8w5erL._SL1500_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='12345'
          title='You Were My Crush: Till You Said You Love Me! '
          price={11.96}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/51Hxcnrg0sL._SX324_BO1,204,203,200_.jpg'
        />

        <Product
          id='123'
          title='If It’s Not Forever It’s Not Love '
          price={15}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/513HiNZ4M3L._SX323_BO1,204,203,200_.jpg'
        />

        <Product
          id='1234'
          title='The Perfect Us'
          price={20}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41PTZc2n9DL._SX324_BO1,204,203,200_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='1234532'
          title='Fitbit FB507RGPK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Petal/Copper Rose, One Size (S & L Bands Included) (Petal/Copper Rose) '
          price={276.39}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61iqvrkk3nL._SL1500_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;

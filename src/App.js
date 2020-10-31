import React, { useEffect } from 'react';
import './App.css';
// Router --> is responsible for handling different page routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

// Stripe Publishable API Key --> which loads stripe and stroe it in promise
const promise = loadStripe(
  'pk_test_51HQzO7CPh4Pzkj5WZabcfh2ErEigRyDrH3bMXBk949GI7tSZbpYY3X27JyQuzJpjgSBFO4Rr5pc2IYlcicAzN76300rttPSVh6'
);

function App() {
  const [{ user, basket }, dispatch] = useStateValue();

  //Piece of code which runs on given condition --> useEffect()
  useEffect(() => {
    // keeps track of authenticated user --> even if page refreshes
    // everytime authentication state changes -> it gives us authenticated user
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in.. / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser, //if user is logged then set the response as authUser, logged in then we'll push them into data layer
        });
      } else {
        // the user is logged out..
        dispatch({
          type: 'SET_USER',
          user: null, //if user is logged out set the user to null
        });
      }
    });

    // if anything changes it re-render so we need to clean this up
    return () => {
      // any cleanup operation go here
      unsubscribe();
    };
  }, []);

  console.log('User is >>>', user);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Header />
            {/* putting payment inside the elements */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* Bottom one is the default Route */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// wrap the entire app inside Router
{
  /* we need React-Router --> provides muti page functionality inside sigle page app without refresh */
}

// switch --> this is where we add multiple routes

// Routes lead us to page

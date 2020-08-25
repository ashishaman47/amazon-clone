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

function App() {
  const [{ user }, dispatch] = useStateValue();

  //Piece of code which runs on given condition --> useEffect()
  useEffect(() => {
    // everytime authentication state changes -> it gives us authenticated user
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in..

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

  console.log('Use is >>>', user);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
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

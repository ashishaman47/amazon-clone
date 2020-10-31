import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault(); //this stops refresh

    //do login logic here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage...
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    //do register logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        // created a user and logged in, redirect to homepage...
        if (auth) {
          history.push('/');
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
          <button onClick={login} type='submit' className='login__signInButton'>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

// authentication process -->
// 1st redirect to homepage after logged in
// 2nd Listening to if user login/logout and pushing that value to data layer

// we need some kind of listner who always listen to this login/logout event if it does it must update the data layer

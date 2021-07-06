import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from './redux/user/user.selectors';
import { Switch, Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';
import HomePage from './pages/homepage/homepage.component';
import Navigation from './components/navigation/navigation.component';
import SignIn from './pages/sign-in/sign-in.component';
import Register from './pages/register/register.component';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
      },
    },
    move: {
      speed: 2,
    },
  },
};

const App = () => {
  const isSignedIn = useSelector(selectIsUserLoggedIn);

  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions} />
      <Navigation />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (isSignedIn ? <HomePage /> : <Redirect to='/signin' />)}
        />
        <Route
          exact
          path='/signin'
          render={() => (!isSignedIn ? <SignIn /> : <Redirect to='/' />)}
        />
        <Route
          exact
          path='/register'
          render={() => (!isSignedIn ? <Register /> : <Redirect to='/' />)}
        />
      </Switch>
    </div>
  );
};

export default App;

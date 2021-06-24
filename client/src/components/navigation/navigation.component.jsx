import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../redux/user/user.actions';
import { selectIsUserLoggedIn } from '../../redux/user/user.selectors';

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsUserLoggedIn);

  return isSignedIn ? (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => {
          dispatch(signOut());
          history.push('/signin');
        }}
        className='f3 link dim black underline pa3 pointer'
      >
        Sign Out
      </p>
    </nav>
  ) : (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => history.push('/signin')}
        className='f3 link dim black underline pa3 pointer'
      >
        Sign In
      </p>
      <p
        onClick={() => history.push('/register')}
        className='f3 link dim black underline pa3 pointer'
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;

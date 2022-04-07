import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Businesses from './components/Business';

const ProtectedRoute =({sessionUser}) => {

  return (
    <Route {...sessionUser}>
      {(sessionUser) ? <Businesses sessionUser={sessionUser} /> : <Redirect to='/' />}
    </Route>
  )
};

export default ProtectedRoute;

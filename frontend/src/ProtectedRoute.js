import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Businesses from './components/Business';

const ProtectedRoute =({sessionUser}) => {

  return (
    <>
    <Switch>
    <Route {...sessionUser}>
      {(sessionUser) ? <Businesses sessionUser={sessionUser} /> : <Redirect to='/' />}
    </Route>
    </Switch>
    </>
  )
};

export default ProtectedRoute;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import BusinessDetail from "./components/Business/BusinessDetail";
import Reviews from "./components/Review";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()); //.then(() => setIsLoaded(true))
  }, [dispatch]);

  const Splash = () => {
    return (
      <div className="landingPageWrapper">
        <LandingPage />
      </div>
    )
  }

  return (
    <>
    <Switch>
    <Route exact path="/">
      {sessionUser ? <Redirect to="/businesses" /> : <Splash />}
    </Route>
    <ProtectedRoute exact path="/businesses" sessionUser={sessionUser} />
    {sessionUser ?
    <>
    <Switch>
    <Route path='/businesses/:businessId'>
        <BusinessDetail />
    </Route>
    <Route path='/reviews/:reviewId'>
        <Reviews />
    </Route>
    <Route>
      <h2>404 error</h2>
    </Route>
    </Switch>
    </>
    : <Redirect to="/" />}
    </Switch>
    </>
  );
}

export default App;

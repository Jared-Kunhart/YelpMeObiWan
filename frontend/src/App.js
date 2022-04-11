import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import BusinessDetail from "./components/Business/BusinessDetail";
import Reviews from "./components/Review";
import './App.css'

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
    <div id='dev-box'>
      <div id="card">
        <a id="dev-link" target="_blank" href='https://github.com/Jared-Kunhart'><img src='/images/github-512.png'></img></a>
        <a id="dev-link" target="_blank" href='https://www.linkedin.com/in/jared-kunhart-307661236'><img src='/images/linkedin.png'></img></a>
      </div>
    <div id="holo"></div>
    </div>
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
      <h2>404 error while crocodiles can be found in both freshwater and saltwater—although they can't live in the ocean</h2>
    </Route>
    </Switch>
    </>
    : <Redirect to="/" />}
    </Switch>
    </>
  );
}

export default App;

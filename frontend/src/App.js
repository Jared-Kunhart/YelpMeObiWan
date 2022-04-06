import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Businesses from "./components/Business";
import ProfileButton from "./components/Navigation/ProfileButton";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  let landingPage;
  if (sessionUser) {
    landingPage = (
      <>
      <ProfileButton user={sessionUser} />
      <Redirect to="/businesses"/>
      </>
    )
  } else {
    landingPage = (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
    )
  }


  return (
      <div className="landingPageWrapper">
      {landingPage}
      </div>
  );
}

export default App;

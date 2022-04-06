import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import LandingPage from "./components/LandingPage";
import Businesses from "./components/Business";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
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
    <Route path="/businesses">
      <Businesses sessionUser={sessionUser} />
    </Route>
    </Switch>
    </>
  );
}

export default App;




  // let landingPage;
  // if (sessionUser) {
  //   landingPage = (
  //     <>
  //       <Redirect to="/businesses" /> : <ProfileButton />
  //     </>
  //   )
  // } else {
  //   landingPage = (
  //   <>
  //     {isLoaded && (
  //       <Switch>
  //         <Route exact path="/">
  //           <LandingPage />
  //         </Route>
  //         <Route path="/signup">
  //           <SignupFormPage />
  //         </Route>
  //       </Switch>
  //     )}
  //   </>
  //   )
  // }

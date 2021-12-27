import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoBodypage from "./pages/LogoBodypage";
import SelectlogoPage from "./pages/SelectlogoPage";
import Signuppage from "./pages/Signuppage";
import LogoSubCatogory from "./pages/LogoSubCatogory";
import SaveLogoPage from "./pages/SaveLogoPage";
// import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import userService from "./services/UserService";
import "react-toastify/dist/ReactToastify.css";
import ChangePasswordPage from "./pages/ChangePasswordPage";

function App() {
  const [storedLogo, setStoredLogo] = React.useState(null);
  // const [checkLogin, setCheckLogin] = React.useState(userService.isLoggedIn());
  console.log("USER service logged in > ", userService.isLoggedIn());
  const setLogo = (data) => {
    setStoredLogo(data);
  };

  React.useEffect(() => {
    console.log("storedLogo 30> ", storedLogo);
  }, [storedLogo]);

  const checkUser = () => {
    // setLogin(!login);
    console.log("Checkuser");
    return userService.isLoggedIn();
  };

  return (
    <Router>
      <ToastContainer />
      <Route exact path="/" exact>
        <HomePage />
      </Route>
      <Route exact path="/login">
        {checkUser() ? <Redirect to="/" /> : <LoginPage />}
      </Route>
      <Route exact path="/signup">
        {checkUser() ? <Redirect to="/" /> : <Signuppage />}
      </Route>

      <Route exact path="/selectlogo/:variable/:logoid">
        <LogoBodypage storedLogo={storedLogo} setLogo={setLogo} />
      </Route>
      <Route exact path="/selectlogo">
        <SelectlogoPage storedLogo={storedLogo} setLogo={setLogo} />
      </Route>
      <Route exact path="/selectlogo/:variable">
        <LogoSubCatogory setLogo={setLogo} />
      </Route>
      <Route exact path="/saveLogo">
        <SaveLogoPage setLogo={setLogo} />
      </Route>
      <Route exact path="/changePassword">
        <ChangePasswordPage />
      </Route>
    </Router>
  );
}

export default App;

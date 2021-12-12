import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoBodypage from "./pages/LogoBodypage";
import SelectlogoPage from "./pages/SelectlogoPage";
import Signuppage from "./pages/Signuppage";
import LogoSubCatogory from "./pages/LogoSubCatogory";
// import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [storedLogo, setStoredLogo] = React.useState(null);

  const setLogo = (data) => {
    setStoredLogo(data);
  };
  return (
    <Router>
      <ToastContainer />
      <Route exact path="/" exact>
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <Signuppage />
      </Route>

      <Route exact path="/selectlogo/:variable/:logoid">
        <LogoBodypage storedLogo={storedLogo} />
      </Route>
      <Route exact path="/selectlogo">
        <SelectlogoPage storedLogo={storedLogo} setLogo={setLogo} />
      </Route>
      <Route exact path="/selectlogo/:variable">
        <LogoSubCatogory setLogo={setLogo} />
      </Route>
    </Router>
  );
}

export default App;

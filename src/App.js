import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoBodypage from "./pages/LogoBodypage";
import SelectlogoPage from "./pages/SelectlogoPage";
import Signuppage from "./pages/Signuppage";
import LogoSubCatogory from "./pages/LogoSubCatogory";

function App() {
  const [storedLogo, setStoredLogo] = React.useState(null);

  const setLogo = (data) => {
    setStoredLogo(data);
  };
  useEffect(() => {
    if (storedLogo) {
      console.log("storedLogo > ", storedLogo);
    }
  }, [storedLogo]);

  return (
    <Router>
      {/* Client Routes */}
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <Signuppage />
      </Route>

      <Route path="/logo">
        <LogoBodypage storedLogo={storedLogo} />
      </Route>
      <Route exact path="/selectlogo">
        <SelectlogoPage setLogo={setLogo} />
      </Route>
      <Route exact path="/selectlogo/:variable">
        <LogoSubCatogory setLogo={setLogo} />
      </Route>
    </Router>
  );
}

export default App;

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

// import userService from "./services/UserService";
import categoryService from "./services/Categories";
import iconCategoriesService from "./services/IconCategories";
import iconsService from "./services/Icons";
import logoService from "./services/Logos";
import shapesService from "./services/Shapes";
import ForgetPassword from "./pages/ForgetPassword";
import GeneratedPassword from "./pages/GeneratePassword";

function App() {
  const [storedLogo, setStoredLogo] = React.useState(null);
  // const [checkLogin, setCheckLogin] = React.useState(userService.isLoggedIn());
  console.log("USER service logged in > ", userService.isLoggedIn());
  const [login, setLogin] = React.useState(userService.isLoggedIn());
  const [categories, setCategories] = React.useState([]);
  const [logos, setLogos] = React.useState([]);
  const [iconCategories, setIconCategories] = React.useState([]);
  const [icons, setIcons] = React.useState([]);
  const [shapes, setShapes] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  const getCategories = () => {
    categoryService
      .getCategories()
      .then((data) => {
        console.log("Logo Categories > ", data.categories);
        setCategories(data.categories);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  const getIconCategories = () => {
    iconCategoriesService
      .getIconCategories()
      .then((data) => {
        console.log("Icons Categories > ", data.categories);
        setIconCategories(data.categories);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  const getIcons = () => {
    iconsService
      .getIcons()
      .then((data) => {
        console.log("Icons> ", data);
        setIcons(data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };

  const getLogos = () => {
    logoService
      .getLogos()
      .then((data) => {
        console.log("Logos > ", data);
        setLogos(data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  const getShapes = () => {
    shapesService
      .getShapes()
      .then((data) => {
        console.log("shapes > ", data);
        setShapes(data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };

  const updateRecord = () => {
    setUpdate(!update);
  };

  React.useEffect(() => {
    getCategories();
    getIconCategories();
    getIcons();
    getShapes();
    getLogos();
  }, [update]);

  const setLogo = (data) => {
    setStoredLogo(data);
  };

  React.useEffect(() => {
    console.log("storedLogo 30> ", storedLogo);
  }, [storedLogo]);

  const checkUser = () => {
    // setLogin(!login);
    let usr = userService.isLoggedIn();
    console.log("Checkuser > ", usr);
    return usr;
  };

  return (
    <Router>
      <ToastContainer />
      <Route exact path="/" exact>
        <HomePage categories={categories} />
      </Route>
      <Route exact path="/login">
        {checkUser() ? <Redirect to="/" /> : <LoginPage />}
      </Route>
      <Route exact path="/signup">
        {checkUser() ? <Redirect to="/" /> : <Signuppage />}
      </Route>

      <Route exact path="/selectlogo/:variable/:logoid">
        <LogoBodypage
          iconCategories={iconCategories}
          icons={icons}
          shapes={shapes}
          storedLogo={storedLogo}
          setLogo={setLogo}
          updateRecord={updateRecord}
        />
      </Route>
      <Route exact path="/selectlogo">
        <SelectlogoPage
          logos={logos}
          categories={categories}
          storedLogo={storedLogo}
          setLogo={setLogo}
        />
      </Route>
      <Route exact path="/selectlogo/:variable">
        <LogoSubCatogory
          logos={logos}
          categories={categories}
          setLogo={setLogo}
        />
      </Route>
      <Route exact path="/saveLogo">
        <SaveLogoPage setLogo={setLogo} />
      </Route>
      <Route exact path="/changePassword">
        <ChangePasswordPage />
      </Route>
      <Route exact path="/forgetPassword">
        <ForgetPassword />
      </Route>
      <Route exact path="/generatepassword/:token">
        <GeneratedPassword />
      </Route>
    </Router>
  );
}

export default App;

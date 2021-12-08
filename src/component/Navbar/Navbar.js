import React from "react";
import {
  AppBar,
  makeStyles,
  Typography,
  Button,
  useMediaQuery,
  Toolbar,
  useTheme,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { FcStumbleupon } from "react-icons/fc";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
  },
  freelogo: {
    color: "black",
    display: "flex",
    fontSize: "1.9rem",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif;",
    marginLeft: "10px",
  },
  freelogotext: {
    textDecoration: "none",
    color: "black",
  },
  makelogolink: {
    textDecoration: "none",
  },
  makelogo: {
    border: "2px solid #2ac5b3",
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "0.5rem",
    color: "#2ac5b3",
    "&:hover": {
      background: "#2ac5b3",
      color: "white",
      fontSize: "15px",
    },
  },
  loginlink: {
    textDecoration: "none",
  },
  loginbutton: {
    backgroundColor: "#2ac5b3",
    color: "white",
    marginTop: "0.5rem",
    fontWeight: "600",

    "&:hover": {
      background: "#2ac5b3",
    },
  },
  signuplink: {
    textDecoration: "none",
  },
  signupbutton: {
    color: "black",
    fontWeight: "600",
    marginTop: "0.5rem",
    backgroundColor: "rgba(64,87,109,.07)",
    "&:hover": {
      background: "rgba(64,87,109,.07)",
    },
  },
  category: {
    marginTop: "1rem",
  },
  categorylink: {
    textDecoration: "none",
    fontWeight: "500",
    color: "#303133",
    fontSize: "1.0625em",
  },
  appbar: {
    backgroundColor: "white",
    boxShadow: "0 4px 4px rgb(64 87 109 / 7%)",
    marginBottom: "10px",
  },

  tabsContainer: {
    marginLeft: "auto",
  },
  iconLogo: {
    fontSize: "3rem",
    marginLeft: "10px",
  },
  icons: {
    fontSize: "1.4rem",
  },
}));

const Navbar = () => {
  //Hooks
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <FcStumbleupon className={classes.iconLogo} />
          <Typography className={classes.freelogo}>
            <Link to="/" className={classes.freelogotext}>
              FreeLogo
            </Link>
          </Typography>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <Grid container justifyContent="space-around">
              <Grid item md={6}>
                <Link to="/selectlogo" className={classes.makelogolink}>
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.makelogo}
                  >
                    Make a logo
                  </Button>
                </Link>
              </Grid>
              {/* <Grid item className={classes.category}>
                <Link to="" className={classes.categorylink}>
                  Categories
                </Link>
              </Grid> */}
              <Grid item>
                <Grid container spacing={3}>
                  <Grid item>
                    <Link to="/login" className={classes.loginlink}>
                      <Button
                        className={classes.loginbutton}
                        variant="contained"
                      >
                        Log in{" "}
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="signup" className={classes.signuplink}>
                      <Button
                        className={classes.signupbutton}
                        variant="contained"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

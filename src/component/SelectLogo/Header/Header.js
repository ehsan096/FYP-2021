import React from "react";
import {
  AppBar,
  Button,
  useMediaQuery,
  Toolbar,
  useTheme,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import { FcStumbleupon } from "react-icons/fc";
import DrawerComponent from "./DrawerComponent";

const Header = () => {
  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Link to="/" className={classes.freelogotext}>
            <FcStumbleupon className={classes.iconLogo} />
          </Link>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <Grid container justifyContent="space-around">
              {/* <Grid item md={1}>
                <Link to="/selectlogo" className={classes.makelogolink}>
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.makelogo}
                  >
                    Template
                  </Button>
                </Link>
              </Grid> */}
              <Grid item></Grid>
              <Grid item>
                <Grid container>
                  <Grid item md={6}>
                    <Link to="/logo" className={classes.makelogolink}>
                      <Button
                        variant="outlined"
                        size="medium"
                        className={classes.mylogo}
                      >
                        MyLogo
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={3}>
                  {/* <Grid item>
                    <Link to="/download" className={classes.loginlink}>
                      <Button
                        className={classes.startfromscratch}
                        variant="contained"
                      >
                        <MdContentCopy
                          fontSize="large"
                          className={classes.undoicon}
                        />
                        Start from Scratch
                      </Button>
                    </Link>
                  </Grid> */}
                  <Grid item>
                    <Link to="/signup" className={classes.signuplink}>
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

export default Header;

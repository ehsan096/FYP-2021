import React from "react";
import {
  AppBar,
  Button,
  useMediaQuery,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  useTheme,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import { FcStumbleupon } from "react-icons/fc";
import DrawerComponent from "./DrawerComponent";
import UserService from "../../../services/UserService";

import man from "../../../images/man.jpeg";

const Header = ({ storedLogo }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery
  console.log("Header StoredLogo", storedLogo ? storedLogo._id : storedLogo);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [login, setLogin] = React.useState(false);

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
              <Grid item></Grid>
              <Grid item>
                <Grid container>
                  <Grid item md={6}>
                    <Link
                      to={
                        storedLogo && storedLogo._id
                          ? `/selectlogo/${storedLogo.category}/${storedLogo._id}`
                          : "/selectlogo"
                      }
                      className={classes.makelogolink}
                    >
                      <Button
                        variant="outlined"
                        size="medium"
                        className={classes.makelogo}
                      >
                        MyLogo
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={3}>
                  {!UserService.isLoggedIn() ? (
                    <>
                      <Grid item>
                        <Link to="/login" className={classes.loginlink}>
                          <Button
                            className={classes.makelogo}
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
                    </>
                  ) : (
                    <Grid item>
                      <div
                        className={classes.avatar}
                        // aria-expanded={open ? "true" : undefined}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <Avatar alt="Remy Sharp" src={man} />
                        <div style={{ color: "white" }}>
                          {UserService.getLoggedInUser().name}
                        </div>
                      </div>

                      <Menu
                        className={classes.profilemenu12}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link
                            to="/savelogo"
                            className={classes.profilemenulink}
                          >
                            My Logos
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          {" "}
                          <Link
                            to="/changepassword"
                            className={classes.profilemenulink}
                          >
                            Profile
                          </Link>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            UserService.logout();
                            setLogin(!login);
                          }}
                        >
                          Logout
                        </MenuItem>
                      </Menu>
                    </Grid>
                  )}
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

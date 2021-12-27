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
  Menu,
  MenuItem,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import man from "../../images/man.jpeg";

import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { FcStumbleupon } from "react-icons/fc";

import UserService from "../../services/UserService";

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
    marginTop: "0.8rem",
    color: "#2ac5b3",
    "&:hover": {
      background: "#2ac5b3",
      color: "white",
      fontSize: "15px",
    },
  },
  avatar: {
    marginTop: "0.5rem",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profilemenu12: {
    marginTop: "53px",
    marginLeft: "14px",
  },
  profilemenulink: {
    textDecoration: "none",
    color: "black",
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
    // marginBottom: "10px",
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
  const [login, setLogin] = React.useState(false);
  // const [profile, setProfile] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(false);
  // const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  // React.useEffect(() => {
  //   setUpdate(!update);
  // }, [login]);

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
              <Grid item>
                <Grid container spacing={3}>
                  {!UserService.isLoggedIn() ? (
                    <>
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
                        <div style={{ color: "black" }}>
                          {UserService.getLoggedInUser().name}
                        </div>
                      </div>

                      <Menu
                        // className={classes.profilemenu12}
                        // id="basic-menu"
                        // anchorEl={profile}
                        // open={open}
                        // onClose={handleClose}
                        // MenuListProps={{
                        //   "aria-labelledby": "basic-button",
                        // }}
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

export default Navbar;

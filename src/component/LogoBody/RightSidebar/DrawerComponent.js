import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "2rem",
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
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link to="/selectlogo" className={classes.makelogolink}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.makelogo}
              >
                Make a logo
              </Button>
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link to="" className={classes.categorylink}>
              Categories
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link to="/login" className={classes.loginlink}>
              <Button className={classes.loginbutton} variant="contained">
                Log in{" "}
              </Button>
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link to="/signup" className={classes.signuplink}>
              <Button className={classes.signupbutton} variant="contained">
                Sign Up
              </Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;

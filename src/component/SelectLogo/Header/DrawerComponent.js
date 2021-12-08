import React, { useState } from "react";
import {
  List,
  ListItem,
  IconButton,
  makeStyles,
  Drawer,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { MdContentCopy } from "react-icons/md";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "2rem",
      color: "white",
    },
    makelogolink: {
      textDecoration: "none",
    },
    makelogo: {
      border: "2px solid white",
      fontSize: "12px",
      fontWeight: "bold",
      marginTop: "0.3rem",
      backgroundColor: "#2D3136",
      color: "white",
      "&:hover": {
        background: "#2ac5b3",
        color: "white",
        fontSize: "12px",
      },
    },

    mylogo: {
      fontSize: "12px",
      fontWeight: "bold",
      marginTop: "0.5rem",
      color: "white",
      border: "none",
      "&:hover": {
        background: "#2ac5b3",
        color: "white",
        fontSize: "12px",
      },
    },
    loginlink: {
      textDecoration: "none",
    },
    startfromscratch: {
      border: "2px solid white",
      fontSize: "12px",
      backgroundColor: "#2D3136",
      color: "white",
      marginTop: "0.4rem",
      fontWeight: "600",

      "&:hover": {
        background: "#2ac5b3",
        color: "white",
        fontSize: "12px",
      },
    },
    signuplink: {
      textDecoration: "none",
    },
    signupbutton: {
      fontSize: "12px",
      backgroundColor: "#2ac5b3",
      color: "white",
      fontWeight: "600",
      marginTop: "0.5rem",
      "&:hover": {
        background: "#2ac5b3",
      },
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
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link to="/selectlogo" className={classes.makelogolink}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.makelogo}
              >
                Template
              </Button>
            </Link>
          </ListItem>

          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link to="/logo" className={classes.makelogolink}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.savelogo}
              >
                MyLogo
              </Button>
            </Link>
          </ListItem>

          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link to="/download" className={classes.loginlink}>
              <Button className={classes.startfromscratch} variant="contained">
                <MdContentCopy fontSize="large" className={classes.undoicon} />
                Start from Scratch
              </Button>
            </Link>
          </ListItem>

          <ListItem button onClick={() => setOpenDrawer(false)}>
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

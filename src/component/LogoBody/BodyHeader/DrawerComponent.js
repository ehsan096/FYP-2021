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
  TextField,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";
import { GoCloudUpload } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { MdAddCircle } from "react-icons/md";

import { Link } from "react-router-dom";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {
      width: "10rem",
    },
    iconButtonContainer: {
      marginLeft: "auto",
      // width: "20px",
      color: "white",
    },

    menuIconToggle: {
      // marginTop: "2rem",
      color: "white",
      fontSize: "2rem",
      // color: "black",
      // position: "fixed",
      // display: "flex",
    },
    undoicon: {
      fontSize: "1.5rem",
      marginRight: "0.4rem",
    },
    previewicon: {
      fontSize: "1.5rem",
      marginRight: "0.4rem",
    },
    saveicon: {
      fontSize: "1.5rem",
      marginRight: "0.4rem",
    },
    freelogo: {
      color: "black",
      // display: "flex",
      fontSize: "1.2rem",
      fontWeight: "700",
      fontFamily: "'Poppins', sans-serif;",
      // marginLeft: "10px",
    },
    freelogotext: {
      textDecoration: "none",
      color: "black",
    },
    makelogolink: {
      textDecoration: "none",
    },
    makelogo: {
      border: "2px solid white",
      fontSize: "12px",
      fontWeight: "bold",
      marginTop: "0.3rem",
      color: "black",
      "&:hover": {
        background: "#2ac5b3",
        color: "white",
        fontSize: "12px",
      },
    },
    undologo: {
      fontSize: "12px",
      fontWeight: "bold",
      marginTop: "0.5rem",
      color: "black",
      border: "none",
      "&:hover": {
        background: "#2ac5b3",
        color: "white",
        fontSize: "12px",
      },
    },
    previewlogo: {
      fontSize: "12px",
      fontWeight: "bold",
      marginTop: "0.5rem",
      color: "black",
      border: "none",
      "&:hover": {
        background: "#2ac5b3",
        color: "white",
        fontSize: "12px",
      },
    },
    savelogo: {
      fontSize: "12px",
      fontWeight: "bold",
      marginTop: "0.5rem",
      color: "black",
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
    loginbutton: {
      fontSize: "12px",
      backgroundColor: "#2ac5b3",
      color: "black",
      marginTop: "0.4rem",
      fontWeight: "600",

      "&:hover": {
        background: "#2ac5b3",
      },
    },
    signuplink: {
      textDecoration: "none",
    },
    signupbutton: {
      fontSize: "12px",
      backgroundColor: "#2ac5b3",
      color: "black",
      fontWeight: "600",
      marginTop: "0.5rem",
      backgroundColor: "#2ac5b3",
      "&:hover": {
        background: "#2ac5b3",
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
      backgroundColor: "#2D3136",
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
          <ListItem>
            <Typography className={classes.Categories}>Categories</Typography>
          </ListItem>

          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link to="/logo" className={classes.makelogolink}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.makelogo}
              >
                <IoIosArrowBack fontSize="large" />
                Template
              </Button>
            </Link>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link to="/logo" className={classes.makelogolink}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.undologo}
              >
                <GrUndo fontSize="large" className={classes.undoicon} />
                Undo
              </Button>
            </Link>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link to="/logo" className={classes.makelogolink}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.undologo}
              >
                <GrRedo fontSize="large" className={classes.undoicon} />
                Redo
              </Button>
            </Link>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}></ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link to="/logo" className={classes.makelogolink}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.previewlogo}
              >
                <VisibilityIcon
                  fontSize="large"
                  className={classes.previewicon}
                />
                Preview
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
                <GoCloudUpload fontSize="large" className={classes.saveicon} />
                Save
              </Button>
            </Link>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link to="/download" className={classes.loginlink}>
              <Button className={classes.loginbutton} variant="contained">
                <FiDownload fontSize="large" className={classes.undoicon} />
                Download{" "}
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

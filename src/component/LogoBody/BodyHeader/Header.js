import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  useMediaQuery,
  Toolbar,
  useTheme,
  Grid,
  Menu,
  Dialog,
  MenuItem,
  Box,
  Avatar,
} from "@material-ui/core";
import shirtlogo from "../../../images/shirtlogo.png";
import laptoplogo from "../../../images/laptop.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import { FcStumbleupon } from "react-icons/fc";
import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";
import { GoCloudUpload } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Redirect } from "react-router-dom";

import man from "../../../images/man.jpeg";

import UserService from "../../../services/UserService";

import userService from "../../../services/UserService";
import DrawerComponent from "./DrawerComponent";

const Header = ({ setUndoRedo, setDownload, preview }) => {
  const [profile, setProfile] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const openAnchor = Boolean(anchorEl);
  const handleClickAnchor = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };
  const [downloadmenu, setDownloadmenu] = React.useState(null);
  const open = Boolean(downloadmenu);
  const handleClick = (event) => {
    setDownloadmenu(event.currentTarget);
  };
  const handleClose = () => {
    setDownloadmenu(null);
  };

  const setUserLogo = async (logo) => {
    let loggedInUser = await userService.getLoggedInUser();
    let user = await userService.getSingleUser(loggedInUser._id);
    if (user) {
      console.log("user in server response > ", user);
      if (user.logos.length === 0) {
        console.log("user logo length ===0  ");

        await userService.updateUserLogo(loggedInUser._id, preview.current);
      } else {
        console.log("user length >1 ", user);

        let i = user.logos.findIndex(checkLogo);
        function checkLogo(logo) {
          return logo._id === preview.current._id;
        }
        let data = {
          _id: logo._id,
          name: logo.name,
          category: logo.category,
          logotype: "user",
          logoSvg: logo.logoSvg,
          logoJson: logo.logoJson,
        };
        if (i === -1) {
          console.log("user logo could not find index > ");
          await userService.updateUserLogo(loggedInUser._id, data);
        } else {
          console.log("user logo findIndex[] > ", logo);
          await userService
            .updateUserLogoExisting(loggedInUser._id, data)
            .then((res) => {
              console.log("User Response 90 > ", res);
            });
        }
      }
    }
  };
  //preview Dialog
  // const [open, setOpen] = React.useState(false);
  const [previewopen, setPreviewopen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const previewhandleClickOpen = () => {
    setPreviewopen(true);
  };

  const previewhandleClose = (value) => {
    setPreviewopen(false);
    setSelectedValue(value);
  };

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    return (
      <Dialog
        // className={classes.previewDialog}
        onClose={handleClose}
        maxWidth={"md"}
        fullWidth={true}
        // maxHeight="400px"
        aria-labelledby="simple-dialog-title"
        open={previewopen}
      >
        <Grid
          container
          justifyContent="space-between"
          className={classes.previewDialog}
        >
          <Grid item lg={6}>
            <Box>
              <img src={shirtlogo} alt="" className={classes.tshirt} />

              <img
                src={`data:image/svg+xml;base64,${btoa(
                  unescape(
                    encodeURIComponent(
                      preview.current ? preview.current.logoSvg : ""
                    )
                  )
                )}`}
                alt=""
                className={classes.placeshirtlogo}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <img src={laptoplogo} alt="" className={classes.laptop} />
            <img
              src={`data:image/svg+xml;base64,${btoa(
                unescape(
                  encodeURIComponent(
                    preview.current ? preview.current.logoSvg : ""
                  )
                )
              )}`}
              alt=""
              className={classes.placelaptoplogo}
            />
          </Grid>
        </Grid>
      </Dialog>
    );
  }
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

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
              <Grid item md={1}>
                <Link to="/selectlogo" className={classes.makelogolink}>
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.makelogo}
                  >
                    <IoIosArrowBack fontSize="large" />
                    Template
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item md={8}>
                    {/* <Link className={classes.makelogolink}> */}
                    <Button
                      variant="outlined"
                      size="medium"
                      className={classes.undologo}
                      onClick={() => {
                        setUndoRedo("undo");
                      }}
                    >
                      <GrUndo fontSize="large" className={classes.undoicon} />
                      Undo
                    </Button>
                    {/* </Link> */}
                  </Grid>
                  <Grid item md={2}>
                    {/* <Link className={classes.makelogolink}> */}
                    <Button
                      variant="outlined"
                      size="medium"
                      className={classes.undologo}
                      onClick={() => {
                        setUndoRedo("redo");
                      }}
                    >
                      <GrRedo fontSize="large" className={classes.undoicon} />
                      Redo
                    </Button>
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item md={8}>
                    {/* <Link to="/logo" className={classes.makelogolink}> */}
                    <Button
                      variant="outlined"
                      size="medium"
                      onClick={previewhandleClickOpen}
                      className={classes.previewlogo}
                    >
                      <VisibilityIcon
                        fontSize="large"
                        className={classes.previewicon}
                      />
                      Preview
                    </Button>
                    <SimpleDialog
                      selectedValue={selectedValue}
                      open={open}
                      onClose={previewhandleClose}
                    />
                    {/* </Link> */}
                  </Grid>
                  <Grid item md={2}>
                    <Button
                      variant="outlined"
                      size="medium"
                      className={classes.savelogo}
                      onClick={() => {
                        userService.isLoggedIn ? (
                          setUserLogo(preview.current)
                        ) : (
                          <Redirect to="/login" />
                        );
                      }}
                    >
                      <GoCloudUpload
                        fontSize="large"
                        className={classes.saveicon}
                      />
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={3}>
                  <Grid item>
                    {/* <Link to="" className={classes.loginlink}> */}
                    <Button
                      id="basic-button"
                      aria-controls="basic-menu"
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className={classes.loginbutton}
                      variant="contained"
                    >
                      <FiDownload
                        fontSize="large"
                        className={classes.undoicon}
                      />
                      Download{" "}
                    </Button>
                    {/* </Link> */}
                  </Grid>
                  <Menu
                    id="basic-menu"
                    className={classes.downloadmenu}
                    anchorEl={downloadmenu}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        setDownload("png");
                        setDownloadmenu(null);
                      }}
                    >
                      Png
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setDownload("jpeg");
                        setDownloadmenu(null);
                      }}
                    >
                      Jpeg
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setDownload("svg");
                        setDownloadmenu(null);
                      }}
                    >
                      Svg
                    </MenuItem>
                  </Menu>
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
                    </>
                  ) : (
                    // <Grid item>
                    //   <Button
                    //     className={classes.loginbutton}
                    //     variant="contained"
                    //     onClick={() => {
                    //       UserService.logout();
                    //       setLogin(!login);
                    //     }}
                    //   >
                    //     Logout{" "}
                    //   </Button>
                    // </Grid>
                    <Grid item>
                      <div
                        className={classes.avatar}
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={openAnchor ? "true" : undefined}
                        onClick={handleClickAnchor}
                      >
                        <Avatar alt="Remy Sharp" src={man} />
                        <div className="Username">{UserService.getLoggedInUser().name}</div>
                      </div>
                      {console.log(
                        "UserService.getLoggedInUser() ",
                        UserService.getLoggedInUser().name
                      )}
                      <Menu
                        className={classes.profilemenu}
                        id="basic-menu"
                        anchorEl={profile}
                        open={openAnchor}
                        onClose={handleCloseAnchor}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseAnchor}>
                          <Link
                            to="/savelogo"
                            className={classes.profilemenulink}
                          >
                            My Logos
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseAnchor}>
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
                            handleCloseAnchor();
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

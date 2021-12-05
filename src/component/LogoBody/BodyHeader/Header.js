import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Button,
  useMediaQuery,
  Toolbar,
  useTheme,
  Grid,
  Menu,
  Dialog,
  MenuItem,
  Paper,
  TextField,
  Box,
} from "@material-ui/core";
import shirtlogo from "../../../images/shirtlogo.png";
import placeshirtlogo from "../../../images/food.png";
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
import DrawerComponent from "./DrawerComponent";
const Header = ({ setUndoRedo, setDownload }) => {
  const [downloadmenu, setDownloadmenu] = React.useState(null);
  const open = Boolean(downloadmenu);
  const handleClick = (event) => {
    setDownloadmenu(event.currentTarget);
  };
  const handleClose = () => {
    setDownloadmenu(null);
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
  //Hooks
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickTab = (e, newValue) => {
    //The second value contains the current index
    setValue(newValue);
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
      onClose(value);
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
                src={placeshirtlogo}
                alt=""
                className={classes.placeshirtlogo}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <img src={laptoplogo} alt="" className={classes.laptop} />
            <img
              src={placeshirtlogo}
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
                    <Link to="/logo" className={classes.makelogolink}>
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
                    </Link>
                  </Grid>
                  <Grid item md={2}>
                    <Link to="/logo" className={classes.makelogolink}>
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
                    </Link>
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
                    <Link to="/logo" className={classes.makelogolink}>
                      <Button
                        variant="outlined"
                        size="medium"
                        className={classes.savelogo}
                      >
                        <GoCloudUpload
                          fontSize="large"
                          className={classes.saveicon}
                        />
                        Save
                      </Button>
                    </Link>
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

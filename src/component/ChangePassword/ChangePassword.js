import React from "react";
import clsx from "clsx";
import { useStyle } from "./ChangePasswordStyle";
import { useHistory } from "react-router-dom";
import man from "../../images/man.jpeg";
import IconButton from "@material-ui/core/IconButton";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import userService from "../../services/UserService";

import Navbar from "../Navbar/Navbar";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { toast } from "react-toastify";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
const ChangePassword = () => {
  const classes = useStyle();
  const history = useHistory();
  const [values, setValues] = React.useState({
    name: "",
    repeatPassword: "",
    password: "",

    showPassword: false,
    showRepeatePassword: false,
  });
  const [loggedIn, setLoggedIn] = React.useState(null);
  const [disable, setDisable] = React.useState(true);
  const [change, setChange] = React.useState(true);

  const fetchUser = async () => {
    let user = await userService.getSingleUser(
      userService.getLoggedInUser()._id
    );
    setLoggedIn(user);
  };
  React.useEffect(() => {
    fetchUser();
  }, []);
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowRepeatePassword = () => {
    setValues({ ...values, showRepeatePassword: !values.showRepeatePassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getUser = async () => {
    if (loggedIn) {
      setValues({
        ...values,
        name: loggedIn.name,
      });
    }
  };
  React.useEffect(() => {
    getUser();
    console.log("Get USer > ", loggedIn);
  }, [loggedIn]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const changeUserValues = async () => {
    if (
      (values.password &&
        values.repeatPassword &&
        values.name === loggedIn.name) ||
      (values.name !== loggedIn.name &&
        !values.password &&
        !values.repeatPassword) ||
      (values.password &&
        values.repeatPassword &&
        values.name !== loggedIn.name)
    ) {
      if (values.password) {
        if (values.password === values.repeatPassword) {
          let data = {
            name: values.name,
            email: loggedIn.email,
            password: values.password,
          };
          await userService
            .updateUser(loggedIn._id, data)
            .then((token) => {
              localStorage.setItem("token", token);
              toast.success("Updated Successfuly", {
                position: toast.POSITION.TOP_CENTER,
              });
            })
            .catch((e) => {
              toast.error(e.response.data, {
                position: toast.POSITION.TOP_CENTER,
              });
            });
          fetchUser();
          return;
        } else {
          toast.error("Password not match", {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
      } else {
        let data = {
          name: values.name,
          email: loggedIn.email,
        };
        await userService
          .updateUser(loggedIn._id, data)
          .then((token) => {
            localStorage.setItem("token", token);
            toast.success("Updated Successfuly", {
              position: toast.POSITION.TOP_CENTER,
            });
          })
          .catch((e) => {
            toast.error(e.response.data, {
              position: toast.POSITION.TOP_CENTER,
            });
          });
        fetchUser();
        return;
      }
    } else if (
      (values.password !== "" &&
        values.repeatPassword === "" &&
        values.name !== loggedIn.name) ||
      (values.password !== "" &&
        values.repeatPassword === "" &&
        values.name === loggedIn.name)
    ) {
      toast.error("Repeat password field must be filled", {
        position: toast.POSITION.TOP_CENTER,
      });
      // alert("Repeat password field must be filled");
      return;
    } else if (
      (values.password === "" &&
        values.repeatPassword !== "" &&
        values.name !== loggedIn.name) ||
      (values.password === "" &&
        values.repeatPassword !== "" &&
        values.name === loggedIn.name)
    ) {
      toast.error("Password field must be filled", {
        position: toast.POSITION.TOP_CENTER,
      });
      // alert("Password field must be filled");
      return;
    }
  };

  React.useEffect(() => {
    if (
      (values.name && values.name !== loggedIn.name) ||
      (values.password && values.password !== "") ||
      (values.repeatPassword && values.repeatPassword !== "")
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [values]);

  return (
    <>
      <Navbar />
      <Container className={classes.grid}>
        <form autoComplete="off" noValidate className={classes.form}>
          <Grid container justifyContent="center" spacing={3}>
            <Paper className={classes.paper} elevation={3}>
              <Avatar className={classes.profilepic} src={man}></Avatar>
              <Typography className={classes.logintext}>
                {loggedIn ? loggedIn.email : ""}
              </Typography>
              <Grid container spacing={2} className={classes.name}>
                <Grid item xs={3}>
                  <Typography className={classes.logintext}>Name</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    className={classes.LastName}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={values ? values.name : ""}
                    onChange={handleChange("name")}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} className={classes.password}>
                <Grid item xs={3}>
                  <Typography className={classes.logintext}>
                    Password
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Repeat Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showRepeatePassword ? "text" : "password"}
                      value={values.repeatPassword}
                      onChange={handleChange("repeatPassword")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowRepeatePassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showRepeatePassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2} className={classes.actionbutton}>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.signbutton}
                    disabled={disable}
                    onClick={changeUserValues}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.signbutton}
                    onClick={() => {
                      history.push("/");
                      setDisable(!disable);
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default ChangePassword;

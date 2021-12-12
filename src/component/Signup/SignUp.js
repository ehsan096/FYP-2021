import React from "react";
import clsx from "clsx";
import { useStyle } from "../Signup/Signupstyle";
import LockIcon from "@material-ui/icons/Lock";
import { Link, useHistory } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { toast } from "react-toastify";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import userService from "../../services/UserService";

const SignUp = () => {
  const classes = useStyle();

  const [login, setLogin] = React.useState(false);
  const history = useHistory();
  const [values, setValues] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    repeatePassword: "",
    showPassword: false,
    showRepeatePassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowRepeatePassword = () => {
    setValues({ ...values, showRepeatePassword: !values.showRepeatePassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (values.password === values.repeatePassword) {
        let name = values.fname + " " + values.lname;
        await userService.register(name, values.email, values.password);
        setLogin(true);
        history.goBack();
      }
    } catch (e) {
      // alert(e.message);
      toast.error(e.response.data, {
        position: toast.POSITION.TOP_CENTER,
        theme: toast.colored,
      });
    }
  }

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography className={classes.logintext}>Sign Up</Typography>
            <Typography className={classes.notregister}>
              Already have an Account? <Link to="/login">Log In</Link>
            </Typography>
            <Grid container spacing={2} className={classes.FLName}>
              <Grid item xs={6}>
                <TextField
                  className={classes.FirstName}
                  id="outlined-basic"
                  label="FirstName*"
                  variant="outlined"
                  value={values.fname}
                  onChange={handleChange("fname")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={classes.LastName}
                  id="outlined-basic"
                  label="LastName*"
                  variant="outlined"
                  value={values.lname}
                  onChange={handleChange("lname")}
                />
              </Grid>
            </Grid>
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Email Address*"
              variant="outlined"
              value={values.email}
              onChange={handleChange("email")}
            />
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password*
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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Repeat Password*
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showRepeatePassword ? "text" : "password"}
                value={values.repeatePassword}
                onChange={handleChange("repeatePassword")}
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
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.signbutton}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;

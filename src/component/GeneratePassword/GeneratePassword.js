import React from "react";
import clsx from "clsx";
import { useStyle } from "../GeneratePassword/GeneratePasswordstyle";
import LockIcon from "@material-ui/icons/Lock";
import { Link, useHistory, useParams } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { toast } from "react-toastify";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import userService from "../../services/UserService";

const GeneratePassword = () => {
  const classes = useStyle();
  const { token } = useParams();
  const [values, setValues] = React.useState({
    password: "",
    repeatePassword: "",
    showPassword: false,
    showRepeatePassword: false,
  });
  const [password, setPassword] = React.useState("");
  const [Repeatpassword, setRepeatPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/api/users/new/password", { password, token })
      .then((res) => {
        // console.log(res);
        toast.success(res, {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log("error occured", error);
      });
  };
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

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography className={classes.logintext}>
              Enter New Password
            </Typography>

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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
                value={Repeatpassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
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
              Submit
            </Button>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default GeneratePassword;

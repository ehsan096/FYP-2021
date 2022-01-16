import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useHistory } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import React from "react";
import { useStyle } from "./ForgotPasswordStyle";
// import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const classes = useStyle();
  // const [values, setValues] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });

  const [email, setEmail] = React.useState("");
  // const [login, setLogin] = React.useState(false);
  // const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/users/forgot/password", { email })
      .then((res) => {
        console.log(res.data);
        toast.success(`Please Check your Register Email`, {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log("error occured", error);
      });
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
              Enter Your Register Email
            </Typography>

            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Email Address*"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.loginbutton}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Typography className={classes.forgotpassword}>
                    <Link>Forgot Password?</Link>
                  </Typography> */}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default ForgotPassword;

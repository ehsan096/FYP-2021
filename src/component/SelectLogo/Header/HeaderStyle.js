import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
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

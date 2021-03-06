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
    marginTop: "1rem",
    color: "white",
    "&:hover": {
      background: "#2ac5b3",
      color: "white",
      fontSize: "12px",
    },
  },
  undologo: {
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "1rem",
    color: "white",
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
    marginTop: "1rem",
    color: "white",
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
    marginTop: "1rem",
    color: "white",
    border: "none",
    "&:hover": {
      background: "#2ac5b3",
      color: "white",
      fontSize: "12px",
    },
  },
  updatelogo: {
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "1rem",
    color: "white",
    border: "1px solid #2ac5b3 ",
    "&:hover": {
      background: "#2ac5b3",
      color: "white",
      fontSize: "12px",
      border: "1px solid white ",
    },
  },
  loginlink: {
    textDecoration: "none",
  },
  loginbutton: {
    fontSize: "12px",
    backgroundColor: "#2ac5b3",
    color: "white",
    marginTop: "1rem",
    fontWeight: "600",

    "&:hover": {
      background: "#2ac5b3",
    },
  },
  Username: {
    fontSize: "18px",
    fontWeight: "600",
  },
  signuplink: {
    textDecoration: "none",
  },
  signupbutton: {
    fontSize: "12px",
    backgroundColor: "#2ac5b3",
    color: "white",
    fontWeight: "600",
    marginTop: "0.8rem",
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
  downloadmenu: {
    marginTop: "37px",
    marginLeft: "30px",
    width: "250px",
  },
  previewDialog: {
    position: "relative",
    // top: "40px",
    // width: "200rem",
    // maxHeight: 900,
    // overFlowY: "hidden",
  },
  // previewpaper: {

  // },
  tshirt: {
    width: "90%",
    height: "90%",
  },
  laptop: {
    width: "90%",
    marginTop: "80px",
  },
  placeshirtlogo: {
    position: "absolute",
    left: 110,
    top: 130,
    width: "22%",
    // backgroundColor: "white",
  },
  placelaptoplogo: {
    position: "absolute",
    left: 540,
    top: 104,
    width: "4%",
  },
  avatar: {
    marginTop: "0.5rem",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profilemenu: {
    marginTop: "53px",
    marginLeft: "14px",
  },
  profilemenulink: {
    textDecoration: "none",
    color: "black",
  },
}));

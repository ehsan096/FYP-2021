import { makeStyles } from "@material-ui/core";
import bannerimage from "../../images/banner.svg";
export const useStyle = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: "40rem",
    backgroundImage: `url(${bannerimage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginTop: "6rem",
  },
  heading: {
    marginTop: "7rem",
    color: "white",
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: "600",
    marginBottom: "1.5rem",
    textShadow: "0 3px 4px rgb(0 0 0 / 22%)",
  },
  paragraph: {
    color: "#f6f7f5",
    fontFamily: "'Poppins', sans-serif;",
    fontFamily: "500",
    marginBottom: "0.1rem",
    textShadow: "0 3px 4px rgb(0 0 0 / 22%)",
  },
  paragraph1: {
    color: "#f6f7f5",
    fontFamily: "'Poppins', sans-serif;",
    fontFamily: "500",
    marginBottom: "3rem",
    textShadow: "0 3px 4px rgb(0 0 0 / 22%)",
  },
  makelogo: {
    backgroundColor: "#43C5A8",
    border: "2px solid white",
    fontWeight: "600",
    width: "18rem",
    height: "4rem",
    fontSize: "1.2rem",
    "&:hover": {
      background: "white",
      color: "#43C5A8",
    },
  },
  makelogolink: {
    textDecoration: "none",
  },
  image: {
    marginTop: "2rem",
    width: "43rem",
  },
  media: {
    width: "31.5rem",
    position: "absolute",
    top: "32.4rem",
    left: "26.5rem",
  },
  [theme.breakpoints.only("sm")]: {
    image: {
      width: "37rem",
    },
    heading: {
      textAlign: "center",
      width: "28rem",
      fontSize: "2.5rem",
      fontWeight: "600",
    },
    paragraph: {
      textAlign: "center",
      width: "28rem",
    },
  },
  [theme.breakpoints.only("xs")]: {
    image: {
      width: "19rem",
    },
    heading: {
      textAlign: "center",
      width: "19rem",
      fontSize: "1.7rem",
      fontWeight: "600",
    },
    paragraph: {
      textAlign: "center",
      width: "22rem",
    },
    paragraph1: {
      textAlign: "center",
      width: "22rem",
    },
  },
}));

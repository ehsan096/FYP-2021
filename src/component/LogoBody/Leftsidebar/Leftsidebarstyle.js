import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  search: {
    textDecoration: "none",
    marginBottom: "1.2rem",
    color: "#ffffff",
  },
  icon: {
    fontSize: "0.8rem",
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: "600",
  },
  leftsidebar: {
    marginTop: "1.5rem",
    marginLeft: "-2rem",
  },
  backgroundtext: {
    fontSize: "0.7rem",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif;",
  },
  iconname: {
    fontSize: "2rem",
  },
  [theme.breakpoints.only("xs")]: {
    leftsidebar: {
      marginLeft: "-0.7rem",
    },
  },
  [theme.breakpoints.only("sm")]: {
    leftsidebar: {
      marginLeft: "-2.9rem",
    },
  },
}));

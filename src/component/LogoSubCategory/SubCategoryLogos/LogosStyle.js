import { makeStyles } from "@material-ui/core";
export const useStyle = makeStyles((theme) => ({
  title: {
    marginTop: "6rem",
    textAlign: "center",
    marginBottom: "3rem",

    fontFamily: "'Poppins', sans-serif;",
    fontWeight: "600",
    color: "#303133",
  },
  media: {
    height: 300,
    width: "100%",
  },
  logotext: {
    textDecoration: "none",
  },
  grid: {
    // transition: "transform .5s, box-shadow 1s",
    // "&:hover": {
    //   boxShadow: "0 8px 8px rgba(237, 237, 237)",
    // },
  },
  Gridcontainer: {
    marginBottom: "4rem",
  },
  cardlink: {
    textDecoration: "none",
  },

  [theme.breakpoints.only("sm")]: {
    title: {
      textAlign: "center",
      width: "45rem",
      fontSize: "1.4rem",
    },
  },
  [theme.breakpoints.only("xs")]: {
    title: {
      textAlign: "center",
      width: "21.5rem",
      fontSize: "1.3rem",
      marginTop: "5rem",
    },
  },
}));

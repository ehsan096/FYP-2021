import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  //   grid: {
  //     marginTop: "1rem",
  //   },

  media: {
    height: 250,
    width: "100%",
  },
  [theme.breakpoints.only("xs")]: {
    grid: {
      marginLeft: "0.2rem",
    },
    media: {
      height: 250,
      width: "100%",
    },
  },
  [theme.breakpoints.only("sm")]: {
    grid: {
      marginLeft: "0.2rem",
    },
    media: {
      height: 200,
      width: "100%",
    },
  },
  [theme.breakpoints.only("md")]: {
    grid: {
      marginLeft: "0.2rem",
    },
    media: {
      height: 280,
      width: "100%",
    },
  },
  [theme.breakpoints.only("lg")]: {
    grid: {
      marginLeft: "0.5rem",
    },
    media: {
      height: 280,
      width: "100%",
    },
  },
}));

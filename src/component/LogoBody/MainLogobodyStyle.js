import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  grid: {
    marginTop: "3rem",
  },
  leftsidebar: {
    backgroundColor: "#2AC5B3",
    height: "36rem",
  },
  middlesidebar: {
    backgroundColor: "#f5f5f5",
    border: "1px solid #d4d4d4",
  },
  canvas: {
    backgroundColor: "#EDEDED",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightsidebar: {
    backgroundColor: "#69DADB",
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "36rem",
  },
  [theme.breakpoints.only("xs")]: {
    rightsidebar: {
      // display: "none",
    },
  },
  [theme.breakpoints.only("md")]: {
    canvas: {
      // marginLeft: "1rem",
      // width: "410px",
      // height: "410px",
      postion: "absolute",
      top: "30px",
    },
  },
  [theme.breakpoints.only("md")]: {
    rightsidebar: {
      // marginLeft: "px",
    },
  },
  [theme.breakpoints.only("sm")]: {
    // canvas: {
    //   width: "200px",
    // },
  },
}));

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
  },
  rightsidebar: {
    backgroundColor: "#69DADB",
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "36rem",
  },
  [theme.breakpoints.only("xs")]: {
    canvas: {
      backgroundColor: "white",
      marginLeft: "-0.9rem",
    },
  },
}));

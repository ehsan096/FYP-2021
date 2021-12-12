import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  grid: {
    marginTop: "4rem",
    backgroundColor: "#EDEDED",
    minHeight: "561px",
  },
  leftsidebar: {
    backgroundColor: "#FAFAFA",
    border: "1px solid #d4d4d4",
  },
  rightsidebar: {
    marginTop: "2rem",
    // backgroundColor: "#EDEDED",
  },
  [theme.breakpoints.only("xs")]: {
    leftsidebar: {
      backgroundColor: "#EDEDED",
      border: "none",
    },
    rightsidebar: {
      marginTop: "5rem",
      // backgroundColor: "#EDEDED",
    },
    grid: {
      marginTop: "3rem",
      backgroundColor: "#EDEDED",
    },
  },
}));

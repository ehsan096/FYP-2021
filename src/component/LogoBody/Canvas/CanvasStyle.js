import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  paper: {
    // display :"flex",
    // justifyContent:"center",
    // alignItems:"center",
    // minHeight:"100vh",
    // width: "fit-content",
  },
  canvasgrid: {
    // postion: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-between",
    // top: "-40px",
  },
  ResParent: {
    postion: "absolute",

    bottom: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // maxWidth:"600px",
  },
  Resulation: {
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "23vw",
    marginTop: "1rem",
  },
  canvasproperty: {
    marginTop: "1rem",
    marginBottom: "1rem",

    width: "410px",
    height: "50px",
    borderRadius: "4rem",
  },
  [theme.breakpoints.only("xs")]: {
    paper: {
      marginTop: "-50px",
      marginLeft: "1rem",
      width: "180px",
      height: "180px",
    },
    logocontent: {
      marginLeft: "-5rem",
      marginTop: "-80px",
      width: "80px",
      height: "80px",
    },
    Resulation: {
      padding: "10px",
      // marginLeft: "10px",
      width: "48vw",
    },
    widthRes: {
      marginLeft: "15px",
    },
  },

  [theme.breakpoints.only("sm")]: {
    paper: {
      // marginLeft: "1rem",
      marginTop: "-40px",
      width: "280px",
      height: "280px",
    },
    logocontent: {
      marginLeft: "-4rem",
      marginTop: "-50px",
      width: "240px",
      height: "340px",
    },
    Resulation: {
      padding: "10px",
      // marginLeft: "10px",
      width: "28vw",
    },
    widthRes: {
      marginLeft: "20px",
    },
  },
  [theme.breakpoints.only("md")]: {
    paper: {
      width: "fit-content",
      // marginLeft: "1rem",
      // width: "410px",
      // height: "410px",
      postion: "absolute",
      top: 20,
    },
    canvasgrid: {
      // postion: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // top: "-40px",
    },
  },
  [theme.breakpoints.only("lg")]: {
    paper: {
      width: "fit-content",
    },
  },
  [theme.breakpoints.only("xl")]: {
    paper: {
      width: "fit-content",
    },
  },
}));

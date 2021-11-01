import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  paper: {
    // display :"flex",
    // justifyContent:"center",
    // alignItems:"center",
    // minHeight:"100vh",
  },
  ResParent:{
    postion: "absolute",
    
    bottom: "10px",
    marginBottom : "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    // maxWidth:"600px",

  },
  Resulation:{
    
    paddingBottom : "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-around",
    width:"23vw",
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
      // marginTop: "-30rem",
      marginLeft: "-1.9rem",
      width: "250px",
      height: "250px",
    },
  },
  [theme.breakpoints.only("sm")]: {
    paper: {
      marginLeft: "1rem",
      width: "340px",
      height: "340px",
    },
  },
  [theme.breakpoints.only("md")]: {
    paper: {
      marginLeft: "1rem",
      width: "410px",
      height: "410px",
    },
  },
}));

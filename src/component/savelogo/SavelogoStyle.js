import { makeStyles } from "@material-ui/core";
export const useStyle = makeStyles((theme) => ({
  savelogodiv: {
    backgroundColor: "#EAEAEA",
    minHeight: "569px",
    marginTop: "4rem",
  },
  savelogocontainer: {
    marginTop: "1rem",
    // backgroundColor: "#ffffff",
    height: " 350px",
  },
  savelogoimage: {
    height: 300,
    width: "90%",

    marginTop: "10px",
    marginLeft: "0.9rem",
  },
  nofound: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "yellow",
  },
  savelogobutton: {
    display: "flex",
    justifyContent: "space-around",
  },
  editbutton: {
    backgroundColor: "#29882f",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#29882f",
    },
  },
  deletebutton: {
    backgroundColor: "#e41111",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#e41111",
    },
  },
}));

import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  rightsidebar: {
    marginTop: "3rem",
    marginLeft: "1rem",
    paddingRight: "1rem",
  },
  backgroundcolor: {
    color: "white",
  },
  root: {
    width: 150,
  },
  input: {
    width: 42,
  },
  buttonicon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  emptyObject: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textObject: {
    marginLeft: "10px",
  },
  arrowIcon: {
    fontSize: 45,

    color: "#E64A19",
  },
  duplicate: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  layerItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "125px",
  },
  layerMenu: {
    marginTop: "44px",
  },
  shadow: {
    // display: "flex",
    // flexDirection: "row",
    // alignItem: "center",
    // justifyContent: "space-between",
    // colorpicker: {
    //   marginTop: "4rem",
    //   maxWidth: "150px !important",
    // },
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginBottom: "10px",
  },
  name: {
    // paddingBottom: "40px",
  },
  sliderr: {
    marginLeft: "10%",
    maxWidth: "80%",
  },
  fontweight: {
    position: "relative",
    top: 20,
    // marginRight: "40px",
  },
  input: {
    position: "relative",
    top: 7,
  },
  colorpicker: {
    position: "relative",
    top: 13,
  },
  lineheightshadow: {
    position: "relative",
    top: 17,
  },
  opacity: {
    position: "relative",
    top: 21,
  },
  offset: {
    position: "relative",
    top: 21,
  },
  blur: {
    position: "relative",
    top: 19,
  },
  shadowcolor: {
    position: "relative",
    top: 19,
  },

  [theme.breakpoints.only("xs")]: {
    rightsidebar: {
      marginLeft: "-0.7rem",
    },
  },
  [theme.breakpoints.only("sm")]: {
    rightsidebar: {
      marginLeft: "-2.9rem",
    },
  },
}));

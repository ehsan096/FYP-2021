import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  middlesidebar: {
    marginTop: "4rem",
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "30rem",
  },

  links: {
    textDecoration: "none",
  },
  circle1: {
    marginLeft: "2rem",
    backgroundColor: "white",
    width: "82px",
    height: "82px",
    border: "1px solid #e6e6e6",
    borderRadius: "4px",
    padding: "0 10px",
  },
  backgroundMain: {
    margin: "0px, 20px",
    display: "flex",
    flexFlow: "column",
  },
  imges: {},
  circle: {
    marginLeft: "1.5rem",
    marginBottom: "1rem",
    backgroundColor: "white",
    width: "82px",
    height: "82px",
    border: "1px solid #e6e6e6",
    borderRadius: "4px",
    padding: "0 10px",
  },
  circleicon: {
    // marginLeft: "1rem",
    // marginBottom: "1rem",
    // width: "82px",
    // height: "82px",
    // borderRadius: "4px",
    // padding: "0 10px",
  },

  stargrid: {
    marginLeft: "1rem",
  },
  shapegrid: {
    marginLeft: "10px",
  },
  shapes: {
    // marginLeft: "-20px",
    marginBottom: "2rem",

    width: "80px",
    height: "80px",

    // borderRadius: "4px",
    // padding: "0 50px",
  },
  shapesicon: {
    // marginRight: "10px",
    // width: "80px",
    // height: "80px",
  },
  icon: {
    textAlign: "center",
    marginTop: "0.4rem",
  },
  iconname: {
    fontSize: "2.5rem",
    color: "#229BF3",
    width: "3rem",
    marginBottom: "-6.8rem",
    marginLeft: "1rem",
    marginTop: "0.2rem",
  },

  star: {
    fontSize: "2.5rem",
    color: "#9E2CFF",
    fontWeight: "bold",
    width: "3rem",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    textAlign: "center",
    fontSize: "1rem",
    color: "black",
  },
  grid2: {
    marginTop: "2rem",
  },
  searchfield: {
    marginLeft: "25px",
    marginBottom: "30px",
  },
  transparentsvg: {
    position: "absolute",
    top: 160,
    marginLeft: "12px",
  },
  solidcolortext: {
    marginLeft: "20px",
    marginTop: "50px",
  },
  solidcolorpicker: {
    marginLeft: "-20px",
  },
  colorpicker: {
    marginLeft: "20px",
  },
  circleul: {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "10px 10px 10px 10px 10px 10px ",
    gap: "40px",
  },
  circlecolor: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",

    backgroundColor: "black",
  },
  [theme.breakpoints.only("xs")]: {
    middlesidebar: {
      marginLeft: "-18px",
    },
  },
  [theme.breakpoints.only("sm")]: {
    middlesidebar: {
      // marginLeft: "-1.5rem",
    },
  },
  [theme.breakpoints.only("md")]: {
    middlesidebar: {
      marginLeft: "1rem",
    },
  },
}));

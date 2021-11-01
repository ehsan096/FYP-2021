import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  leftsidebar: {
    marginLeft: "2rem",
    overflow: "hidden",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    marginTop: "12rem",
    // width: "100%",
  },
  searchtemplate: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    marginLeft: "2rem",
    marginTop: "2rem",
    fontSize: "17px",
    color: "#404040",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif;",
  },
  searchbar: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    // border: "1px solid #d9d5d5s",
    marginTop: "5rem",
    marginLeft: "2rem",
  },
  Categories: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    marginLeft: "2rem",
    marginTop: "10rem",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif;",
  },
  Categorieslink: {
    textDecoration: "none",
  },
  Categoriesicon: {
    marginBottom: "-9.6rem",
  },
  CategoriesName: {
    marginLeft: "2rem",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif;",
    color: "black",
  },

  [theme.breakpoints.only("xs")]: {
    searchtemplate: {
      display: "none",
    },
    searchbar: {
      display: "none",
    },
    Categories: {
      display: "none",
    },
    leftsidebar: {
      display: "none",
    },
  },
  [theme.breakpoints.only("sm")]: {
    searchbar: {
      marginLeft: "1rem",
    },
  },
  [theme.breakpoints.only("md")]: {
    searchbar: {
      marginLeft: "1rem",
    },
  },
}));

import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    width: "100%",
    height: "20rem",
  },
  grid: {
    marginTop: "2rem",
    color: "white",
  },
  web: {
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem",
  },
  desktop: {
    display: "flex",
    marginTop: "1rem",
  },
  mobile: {
    display: "flex",
    marginTop: "1rem",
  },
  sociallink: {
    padding: theme.spacing(0.5),
    color: "white",
    fontSize: "2rem",
  },
  links: {
    color: "white",
    marginLeft: "1rem",
  },
  link: {
    marginTop: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    footer: {
      height: "30rem",
    },
  },
}));

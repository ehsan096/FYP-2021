import React from "react";
import { Grid } from "@material-ui/core";
import Leftsidebar from "./LeftSidebar/Leftsidebar";
import Rightsidebar from "./RightSidebar/Rightsidebar";
import { useStyle } from "./SelectlogoMainStyle";
const SelectlogoMain = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.grid}>
      <Grid item sm={4} md={3} lg={3} className={classes.leftsidebar}>
        <Leftsidebar />
      </Grid>
      <Grid item xs={11} sm={7} md={8} lg={8} className={classes.rightsidebar}>
        <Rightsidebar />
      </Grid>
    </Grid>
  );
};

export default SelectlogoMain;

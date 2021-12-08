import React from "react";
import { Grid } from "@material-ui/core";
import Leftsidebar from "./LeftSidebar/Leftsidebar";
import Rightsidebar from "./RightSidebar/Rightsidebar";
import { useStyle } from "./SelectlogoMainStyle";
const SelectlogoMain = ({ setLogo }) => {
  const classes = useStyle();
  const [catName, setCatName] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  React.useEffect(() => {
    console.log("CAtName > ", catName);
  }, [catName]);
  React.useEffect(() => {
    console.log("search > ", search);
  }, [search]);
  return (
    <Grid container className={classes.grid}>
      <Grid item sm={4} md={3} lg={3} className={classes.leftsidebar}>
        <Leftsidebar
          setCatName={setCatName}
          setSearch={setSearch}
          search={search}
        />
      </Grid>
      <Grid item xs={11} sm={7} md={8} lg={8} className={classes.rightsidebar}>
        <Rightsidebar setLogo={setLogo} catName={catName} search={search} />
      </Grid>
    </Grid>
  );
};

export default SelectlogoMain;

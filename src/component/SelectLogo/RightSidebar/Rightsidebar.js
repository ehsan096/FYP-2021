import {
  Grid,
  Card,
  CardActionArea,
  Divider,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import first from "../../../images/animal/1.png";
import second from "../../../images/animal/2.png";
import third from "../../../images/animal/3.png";
import forth from "../../../images/animal/4.png";
import five from "../../../images/animal/5.png";
import six from "../../../images/animal/6.png";
import { useStyle } from "./RightsidebarStyle";

const Rightsidebar = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={classes.grid}
      >
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div>
            <Card>
              <CardActionArea>
                <CardMedia image={first} className={classes.media} />
                <Divider />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div>
            <Card className={classes.grid}>
              <CardActionArea>
                <CardMedia image={second} className={classes.media} />
                <Divider />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div>
            <Card className={classes.grid}>
              <CardActionArea>
                <CardMedia image={third} className={classes.media} />
                <Divider />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div>
            <Card className={classes.grid}>
              <CardActionArea>
                <CardMedia image={forth} className={classes.media} />
                <Divider />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div>
            <Card className={classes.grid}>
              <CardActionArea>
                <CardMedia image={five} className={classes.media} />
                <Divider />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div>
            <Card className={classes.grid}>
              <CardActionArea>
                <CardMedia image={six} className={classes.media} />
                <Divider />
              </CardActionArea>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Rightsidebar;

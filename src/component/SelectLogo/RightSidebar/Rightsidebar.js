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
import { Logoos } from "../../LogoSubCategory/DumyData";

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
        {Logoos.map((logoo, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image={`data:image/svg+xml;base64,${btoa(
                      unescape(encodeURIComponent(logoo.image))
                    )}`}
                    className={classes.media}
                  />
                  <Divider />
                </CardActionArea>
                {/* console.log("logo here ",{logo.image}) */}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Rightsidebar;

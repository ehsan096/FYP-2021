import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
  CardContent,
  Divider,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./LogosStyle";
// import { Food } from "../DumyData";
import { Logoos } from "../DumyData";
import { useParams } from "react-router-dom";

const Logos = ({ setLogo, title }) => {
  const { variable } = useParams();
  const classes = useStyle();
  return (
    <div>
      <Container className={classes.Gridcontainer}>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <Grid container spacing={3}>
          {Logoos.map((logoo, index) =>
            logoo.category === variable ? (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Link to="/logo" className={classes.cardlink}>
                  <Card
                    className={classes.grid}
                    onClick={() => {logoo.jsonObj ?  setLogo(logoo.jsonObj) :setLogo(logoo.image) }}
                  >
                    <CardActionArea>
                      <CardMedia
                        image={`data:image/svg+xml;base64,${btoa(
                          unescape(encodeURIComponent(logoo.image))
                        )}`}
                        className={classes.media}
                      />
                      {/* {console.log("JSON Parsing > ", JSON.parse(logoo.image))} */}
                      {console.log("Image > ", logoo.image)}
                      <Divider />
                      <CardContent>
                        <Typography varient="h6" component="h2">
                          {logoo.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ) : (
              ""
            )
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Logos;

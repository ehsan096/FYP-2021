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
import { useStyle } from "./Style";
import eduction from "../../images/education.png";
import beauty from "../../images/beauty.png";
import animal from "../../images/animal.png";
import food from "../../images/food.png";
import business from "../../images/business.png";
import sport from "../../images/sport.png";
import letter from "../../images/letter.png";
import medical from "../../images/medical.png";

const Logocategory = () => {
  const classes = useStyle();
  let variable = "animal";
  return (
    <div>
      <Container className={classes.Gridcontainer}>
        <Typography className={classes.title} variant="h4">
          Discover 1000+ Professional Grade Logo Designs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link className={classes.cardlink}>
              <Card className={classes.grid}>
                <CardActionArea>
                  <CardMedia image={eduction} className={classes.media} />
                  <Divider />
                  <CardContent>
                    <Typography varient="h6" component="h2">
                      Education Logo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link className={classes.cardlink}>
              <Card>
                <CardActionArea>
                  <CardMedia image={beauty} className={classes.media} />
                  <Divider />
                  <CardContent>
                    <Typography varient="h6" component="h2">
                      Fashion & Beauty Logo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link to="/selectlogo/animal" className={classes.cardlink}>
              <Card>
                <CardActionArea>
                  <CardMedia image={animal} className={classes.media} />
                  <Divider />
                  <CardContent>
                    <Typography varient="h6" component="h2">
                      Animals Logo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link to={`/selectlogo/${variable}`} className={classes.cardlink}>
              <Card>
                <CardActionArea>
                  <CardMedia image={food} className={classes.media} />
                  <Divider />
                  <CardContent>
                    <Typography varient="h6" component="h2">
                      Food Logo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          {/* </Grid> */}
          {/* <Grid container spacing={3}> */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link className={classes.cardlink}>
              <Card>
                <CardActionArea>
                  <CardMedia image={business} className={classes.media} />
                  <Divider />
                  <CardContent>
                    <Typography varient="h6" component="h2">
                      Business Logo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link className={classes.cardlink}>
              <Card>
                <CardActionArea>
                  <CardMedia image={sport} className={classes.media} />
                  <Divider />
                  <CardContent>
                    <Typography varient="h6" component="h2">
                      Sport Logo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link className={classes.cardlink}>
              <Card>
                <CardActionArea>
                  <CardMedia image={medical} className={classes.media} />
                  <Divider />
                  <CardContent>
                    <Typography varient="h6" component="h2">
                      Medical Logo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link className={classes.cardlink}>
              <Card>
                <CardActionArea>
                  <CardMedia image={letter} className={classes.media} />
                  <Divider />
                  <CardContent>
                    <Typography
                      varient="h6"
                      // component="h2"
                      className={classes.logotext}
                    >
                      Letter Logo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Logocategory;

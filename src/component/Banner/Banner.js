import { Container, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { useStyle } from "./BannerStyle";
// import demoimage from "../../images/laptop.png";
import laptopimage from "../../images/laptopimage.webp";
import demovideo from "../../images/demo.mp4";
import { Link } from "react-router-dom";
const Banner = () => {
  const classes = useStyle();
  return (
    <div className={classes.banner}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography
              // color="black"
              component="h1"
              variant="h4"
              className={classes.heading}
            >
              Create Custom Logos with Free Logo Maker
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography
              component="h1"
              variant="h6"
              className={classes.paragraph}
            >
              FreeLogo is a free online logo maker with 1000+ templates that
              anyone
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography
              component="h1"
              variant="h6"
              className={classes.paragraph1}
            >
              can use to bring to life a compelling, unique logo in minutes.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Link to="/selectlogo" className={classes.makelogolink}>
              <Button
                size="large"
                color="primary"
                variant="contained"
                className={classes.makelogo}
              >
                Make a free logo
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <img src={laptopimage} className={classes.image} />
            <Grid>
              <Grid item>
                <video
                  className={classes.media}
                  autoPlay={true}
                  src={demovideo}
                  type="video/mp4"
                ></video>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;

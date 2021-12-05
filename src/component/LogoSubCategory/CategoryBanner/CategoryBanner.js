import {
  Container,
  Grid,
  Typography,
  Button,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import { useStyle } from "./CategoryBannerStyle";
// import demoimage from "../../images/laptop.png";
// import laptopimage from "../../images/laptopimage.webp";
// import demovideo from "../../images/demo.mp4";
import { Link } from "react-router-dom";
const CategoryBanner = ({ title, paragraph }) => {
  const classes = useStyle();
  return (
    <div className={classes.banner}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography component="h1" variant="h4" className={classes.heading}>
              {title}
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
              {paragraph}
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
      </Container>
    </div>
  );
};

export default CategoryBanner;

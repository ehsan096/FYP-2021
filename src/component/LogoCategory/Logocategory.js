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
  let variable = "";
  let categories = [
    {
      name: "Education",
      image: eduction,
    },
    {
      name: "Fashion",
      image: beauty,
    },
    {
      name: "Animal",
      image: animal,
    },
    {
      name: "Food",
      image: food,
    },
    {
      name: "Business",
      image: business,
    },
    {
      name: "Sports",
      image: sport,
    },
    {
      name: "Medical",
      image: medical,
    },
    {
      name: "Letter",
      image: letter,
    },
  ];

  return (
    <div>
      <Container className={classes.Gridcontainer}>
        <Typography className={classes.title} variant="h4">
          Discover 1000+ Professional Grade Logo Designs
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => {
            console.log("categories.map > ", category);
            variable = category.name;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={category.name}>
                <Link
                  to={`/selectlogo/${variable}`}
                  className={classes.cardlink}
                >
                  <Card className={classes.grid}>
                    <CardActionArea>
                      <CardMedia
                        image={category.image}
                        className={classes.media}
                      />
                      <Divider />
                      <CardContent>
                        <Typography varient="h6" component="h2">
                          {category.name} Logo
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Logocategory;

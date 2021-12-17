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
import categoryService from "../../services/Categories";

const Logocategory = () => {
  const classes = useStyle();
  let variable = "";
  const [categories, setCategories] = React.useState([]);
  const getCategories = () => {
    categoryService
      .getCategories()
      .then((data) => {
        console.log("Get main Logo Data > ", data);
        setCategories(data.categories);
      })
      .catch((err) => {
        console.log("Error in Main Logo", err);
      });
  };
  React.useEffect(() => {
    getCategories();
  }, []);

  // let categories = [
  //   {
  //     name: "Education",
  //     image: eduction,
  //   },
  //   {
  //     name: "Fashion",
  //     image: beauty,
  //   },
  //   {
  //     name: "Animal",
  //     image: animal,
  //   },
  //   {
  //     name: "Food",
  //     image: food,
  //   },
  //   {
  //     name: "Business",
  //     image: business,
  //   },
  //   {
  //     name: "Sports",
  //     image: sport,
  //   },
  //   {
  //     name: "Medical",
  //     image: medical,
  //   },
  //   {
  //     name: "Letter",
  //     image: letter,
  //   },
  // ];

  return (
    <div>
      <Container className={classes.Gridcontainer}>
        <Typography className={classes.title} variant="h4">
          Discover 1000+ Professional Grade Logo Designs
        </Typography>
        <Grid container spacing={3}>
          {categories.length > 1
            ? categories.map((category) => {
                console.log("categories.map > ", category);
                variable = category.logoName;
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={category.name}>
                    <Link
                      to={`/selectlogo/${category.name}`}
                      className={classes.cardlink}
                    >
                      <Card className={classes.grid}>
                        <CardActionArea>
                          <CardMedia
                            image={`data:image/svg+xml;base64,${btoa(
                              unescape(encodeURIComponent(category.logoSvg))
                            )}`}
                            className={classes.media}
                          />
                          <Divider />
                          <CardContent>
                            <Typography varient="h6" component="h2">
                              {category.logoName} Logo
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </Grid>
                );
              })
            : ""}
        </Grid>
      </Container>
    </div>
  );
};

export default Logocategory;

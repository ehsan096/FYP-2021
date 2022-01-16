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

const Logocategory = ({ categories }) => {
  const classes = useStyle();
  // const [categories, setCategories] = React.useState([]);
  // const getCategories = () => {
  //   categoryService
  //     .getCategories()
  //     .then((data) => {
  //       console.log("Get main Logo Data > ", data);
  //       setCategories(data.categories);
  //     })
  //     .catch((err) => {
  //       console.log("Error in Main Logo", err);
  //     });
  // };
  // React.useEffect(() => {
  //   getCategories();
  // }, []);

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
                          <CardContent
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Typography
                              varient="h3"
                              style={{ fontWeight: "600", color: "#2AC5B3" }}
                            >
                              {category.name} Logo
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

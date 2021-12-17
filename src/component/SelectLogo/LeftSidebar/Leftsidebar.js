import React from "react";
import {
  Typography,
  TextField,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyle } from "./Leftsidebarstyle";
import DrawerComponent from "./DrawerComponent";

import categoryService from "../../../services/Categories";

const Leftsidebar = ({ setCatName, setSearch, search }) => {
  // const [value, setValue] = useState(0);
  // const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyle();
  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
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

  return (
    <div>
      <Typography className={classes.searchtemplate}>
        Search Templates
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.searchbar}
          label="Search 1000+ Templates"
          variant="outlined"
          value={search ? search : ""}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
      <Typography
        className={classes.Categories}
        onClick={() => setCatName(null)}
      >
        Categories
      </Typography>
      {isMatch ? (
        <>
          <DrawerComponent />
        </>
      ) : (
        <Grid container className={classes.leftsidebar}>
          {categories.length > 1
            ? categories.map((category) => (
                <Grid item>
                  <Link
                    className={classes.Categorieslink}
                    onClick={() => setCatName(category.name)}
                  >
                    {console.log("SVG")}
                    <svg className={classes.Categoriesicon}>
                      <path fill="#CE7729" d={category.svgString}></path>
                    </svg>
                    <Typography className={classes.CategoriesName}>
                      {category.name}
                    </Typography>
                  </Link>
                </Grid>
              ))
            : ""}
        </Grid>
      )}
    </div>
  );
};

export default Leftsidebar;

import React, { useState } from "react";
import { useStyle } from "./MiddleSidebarstyle";
import { Link } from "react-router-dom";
import SolidColor from "./colors/solidColors";
import { Grid, Typography, Checkbox } from "@material-ui/core";
import { ReactComponent as ReactLogo } from "./icon.svg";
import { ColorPicker } from "material-ui-color";
import iconCategoriesService from "../../../services/IconCategories";
import iconsService from "../../../services/Icons";
import shapesService from "../../../services/Shapes";

const MiddleSidebar = ({
  content,
  setText,
  setSvgLogo,
  iconType,
  setIconType,
  setBackgroundColor,
  backgroundColor,
}) => {
  const classes = useStyle();
  const [checked, setChecked] = useState(false);
  const [iconStored, setIconStored] = useState([]);
  const [iconCategoriesStored, setIconCategoriesStored] = useState([]);
  const [shapeStored, setShapeStored] = useState([]);

  const gettingIcons = async () => {
    let icons = await iconsService.getIcons();
    console.log("Icon in editor > ", icons);
    setIconStored(icons);
  };
  const gettingIconCategories = async () => {
    let categories = await iconCategoriesService.getIconCategories();
    console.log("categories in editor > ", categories.categories);
    setIconCategoriesStored(categories.categories);
  };
  const gettingshapes = async () => {
    let shapes = await shapesService.getShapes();
    console.log("shapes in editor > ", shapes);
    setShapeStored(shapes);
  };
  React.useEffect(() => {
    gettingIcons();
    gettingIconCategories();
    gettingshapes();
  }, []);
  return (
    <div className={classes.middlesidebar}>
      {content === "icon" ? (
        <>
          {iconType ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {iconStored.length > 0
                ? iconStored.map((icon, index) =>
                    icon.category === iconType ? (
                      <Grid
                        item
                        lg={4}
                        // className={classes.circleicon}
                        key={index}
                        onClick={() => setSvgLogo(icon.d)}
                      >
                        <svg height="90" width="90" viewBox="0 0  150 150">
                          <path d={icon.d}></path>
                        </svg>
                      </Grid>
                    ) : (
                      ""
                    )
                  )
                : ""}
            </Grid>
          ) : (
            <Grid container spacing={1} className={classes.grid}>
              {iconCategoriesStored.length > 0
                ? iconCategoriesStored.map((logo, index) => (
                    <Grid
                      item
                      className={classes.circle}
                      key={index}
                      onClick={() => setIconType(logo.name)}
                    >
                      <Link className={classes.links}>
                        <svg className={classes.iconname}>
                          <path fill={logo.color} d={logo.d}></path>
                        </svg>

                        <Typography className={classes.text}>
                          {logo.name}
                        </Typography>
                      </Link>
                    </Grid>
                  ))
                : ""}
            </Grid>
          )}
        </>
      ) : content === "text" ? (
        <div className={classes.text}>
          <h1 onClick={() => setText("text1")}>Add Logo Name</h1>
          <h3
            onClick={() => setText("text2")}
            style={{ fontWeight: "400", paddingTop: "20px" }}
          >
            Add Slogan
          </h3>
        </div>
      ) : content === "shape" ? (
        <>
          <Grid container spacing={1} className={classes.shapegrid}>
            {shapeStored.length > 0
              ? shapeStored.map((badge, index) => (
                  <Grid
                    item
                    lg={4}
                    className={classes.shapes}
                    key={index}
                    onClick={() => setSvgLogo(badge.d)}
                  >
                    <svg height="80" width="80" viewBox="0 0  200 200">
                      <path d={badge.d}></path>
                    </svg>
                  </Grid>
                ))
              : ""}
          </Grid>
        </>
      ) : (
        <>
          <div className={classes.backgroundMain}>
            {/* <FormControlLabel
              control={
                
              }
              label="Transparent Background"
              labelPlacement="Transparent"
            /> */}
            <span>
              <Checkbox
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                  setBackgroundColor("transparent");
                }}
              />{" "}
              Transparent Background
            </span>
            {checked ? <ReactLogo className={classes.transparentsvg} /> : ""}
          </div>
          <h4 className={classes.solidcolortext}>Solid Colors</h4>
          <div className={classes.solidcolorpicker}>
            <ul className={classes.circleul}>
              {SolidColor.map((Color) => {
                return (
                  <li
                    className={classes.circlecolor}
                    style={{ backgroundColor: Color.color }}
                    onClick={() => {
                      checked
                        ? setBackgroundColor("transparent")
                        : setBackgroundColor(Color.color);
                    }}
                  ></li>
                );
              })}
            </ul>
          </div>
          <h4 className={classes.solidcolortext}>Gradient Colors</h4>
          <div className={classes.colorpicker}>
            <ColorPicker
              value={backgroundColor}
              onChange={(value) => {
                checked
                  ? setBackgroundColor("transparent")
                  : setBackgroundColor(value.css.backgroundColor);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MiddleSidebar;

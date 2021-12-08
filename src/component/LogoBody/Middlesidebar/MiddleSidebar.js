import React, { useState } from "react";
import { useStyle } from "./MiddleSidebarstyle";
import { Link } from "react-router-dom";
import SolidColor from "./colors/solidColors";
import { Grid, Typography, Checkbox } from "@material-ui/core";

import Logos from "./Icons";
import { Circle } from "./AllIcons/Cricle";
import { Star } from "./AllIcons/Star";
import { Food } from "./AllIcons/Food";
import { Line } from "./AllIcons/Line";
import { Flower } from "./AllIcons/Flower";
import { Fire } from "./AllIcons/Fire";
import { Heart } from "./AllIcons/Heart";
import { Instagram } from "./AllIcons/Instagram";
import { Leaf } from "./AllIcons/Leaf";
import { Facebook } from "./AllIcons/Facebook";
import { Game } from "./AllIcons/Game";
import { Letter } from "./AllIcons/Letter";
import { Badge } from "./Shape/Shape";
import { ReactComponent as ReactLogo } from "./icon.svg";
import { ColorPicker } from "material-ui-color";

const MiddleSidebar = ({
  content,
  setText,
  setSvgLogo,
  iconType,
  setIconType,
  setBackgroundColor,
}) => {
  const classes = useStyle();
  const [checked, setChecked] = useState(false);

  // const

  return (
    <div className={classes.middlesidebar}>
      {content === "icon" ? (
        <>
          {iconType === "circle" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Circle.map((circle, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.circleicon}
                  key={index}
                  onClick={() => setSvgLogo(circle.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={circle.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "star" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Star.map((star, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.circle}
                  key={index}
                  onClick={() => setSvgLogo(star.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={star.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "food" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Food.map((food, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.circle}
                  key={index}
                  onClick={() => setSvgLogo(food.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={food.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "line" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Line.map((line, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.circle}
                  key={index}
                  onClick={() => setSvgLogo(line.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={line.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "flower" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Flower.map((flower, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.scrollbar}
                  key={index}
                  onClick={() => setSvgLogo(flower.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={flower.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "fire" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Fire.map((fire, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.scrollbar}
                  key={index}
                  onClick={() => setSvgLogo(fire.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={fire.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "heart" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Heart.map((heart, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.scrollbar}
                  key={index}
                  onClick={() => setSvgLogo(heart.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={heart.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "instagram" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Instagram.map((instagram, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.scrollbar}
                  key={index}
                  onClick={() => setSvgLogo(instagram.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={instagram.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "leaf" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Leaf.map((leaf, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.scrollbar}
                  key={index}
                  onClick={() => setSvgLogo(leaf.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={leaf.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "facebook" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Facebook.map((facebook, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.scrollbar}
                  key={index}
                  onClick={() => setSvgLogo(facebook.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={facebook.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "game" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Game.map((game, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.scrollbar}
                  key={index}
                  onClick={() => setSvgLogo(game.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={game.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : iconType === "letter" ? (
            <Grid container spacing={1} className={classes.stargrid}>
              {Letter.map((letter, index) => (
                <Grid
                  item
                  lg={4}
                  // className={classes.scrollbar}
                  key={index}
                  onClick={() => setSvgLogo(letter.d)}
                >
                  <svg height="90" width="90" viewBox="0 0  150 150">
                    <path d={letter.d}></path>
                  </svg>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={1} className={classes.grid}>
              {Logos.map((logo, index) => (
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
              ))}
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
            {Badge.map((badge, index) => (
              <Grid
                item
                lg={4}
                className={classes.shapes}
                key={index}
                onClick={() => setSvgLogo(badge.d1)}
              >
                <svg height="80" width="80" viewBox="0 0  200 200">
                  <g>
                    <path d={badge.d1}></path>

                    <path d={badge.d2}></path>
                  </g>
                </svg>
              </Grid>
            ))}
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

                    // onClick={(e) => onClickOptionHandler(e)}
                  ></li>
                );
              })}
            </ul>
          </div>
          <h4 className={classes.solidcolortext}>Gradient Colors</h4>
          <div className={classes.colorpicker}>
            <ColorPicker
              value={"white"}
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

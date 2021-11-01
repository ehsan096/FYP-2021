import { useStyle } from "./RightSidebarStyle";
import React, { useEffect } from "react";
// import "./rightbar.style.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Fonts from "./font";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Box, Slider } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { ColorPicker } from "material-ui-color";
import { BsFillLayersFill } from "react-icons/bs";
import { IoDuplicateSharp } from "react-icons/io5";
import { BiCaretDown } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";
import DeleteIcon from "@material-ui/icons/Delete";
import { CgArrowLongLeft } from "react-icons/cg";

const RightSidebar = ({ svgText, setSvgText, setLayer, objectSelection }) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [decoration, setDecoration] = React.useState(false);
  const [fontDecoration, setFontDecoration] = React.useState("underline");
  const [layerMenu, setLayerMenu] = React.useState(null);

  const handleDecoration = (event) => {
    setFontDecoration(event.target.value);

    event.target.value === "underline"
      ? setSvgText({
          ...svgText,
          [event.target.value]: true,
          lineThrough: false,
          overLine: false,
        })
      : event.target.value === "overLine"
      ? setSvgText({
          ...svgText,
          [event.target.value]: true,
          underline: false,
          lineThrough: false,
        })
      : setSvgText({
          ...svgText,
          [event.target.value]: true,
          underline: false,
          overLine: false,
        });
  };

  useEffect(() => {
    if (svgText.underline || svgText.overLine || svgText.lineThrough) {
      setDecoration(true);
      svgText.underline
        ? setFontDecoration("underline")
        : svgText.overLine
        ? setFontDecoration("overLine")
        : setFontDecoration("lineThrough");
    } else {
      setDecoration(false);
    }
    console.log("rightbar rendering", svgText);
    //Text Color
  }, [svgText]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const openLayer = Boolean(layerMenu);

  const handleClose = () => {
    setAnchorEl(null);
    // setColor(null);
  };
  return (
    <div className={classes.rightsidebar}>
      {objectSelection ? (
        <>
          <div className={classes.buttonicon}>
            <Button
              id="layer-menu-button"
              aria-controls="layer-menu"
              aria-haspopup="true"
              aria-expanded={openLayer ? "true" : undefined}
              onClick={(event) => setLayerMenu(event.currentTarget)}
              variant="contained"
              size="small"
              endIcon={<BsFillLayersFill />}
              className={classes.duplicate}
            >
              Layer
            </Button>
            <Menu
              id="layer-menu"
              className={classes.layerMenu}
              anchorEl={layerMenu}
              open={openLayer}
              onClose={() => setLayerMenu(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  setLayer("forward");
                  setLayerMenu(null);
                }}
                className={classes.layerItem}
              >
                Forward
                <BiCaretUp />
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setLayer("backword");
                  setLayerMenu(null);
                }}
                className={classes.layerItem}
              >
                Backword <BiCaretDown />
              </MenuItem>
            </Menu>

            <Button
              variant="contained"
              size="small"
              endIcon={<IoDuplicateSharp />}
              className={classes.duplicate}
              onClick={() => setLayer("duplicate")}
            >
              Duplicate
            </Button>
            <Button
              variant="contained"
              size="small"
              endIcon={<DeleteIcon />}
              className={classes.duplicate}
              onClick={() => setLayer("delete")}
            >
              Delete
            </Button>
          </div>

          {svgText.type === "i-text" ? (
            <>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                id="fontfamily"
                style={{ backgroundColor: "#21b6ae" }}
                onClick={handleClick}
              >
                {svgText.FontFamily}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {Fonts.map((font) => {
                  return (
                    <MenuItem
                      key={font}
                      style={{ fontFamily: font }}
                      onClick={(e) => {
                        setSvgText({
                          ...svgText,
                          FontFamily: font,
                        });
                        setAnchorEl(null);
                      }}
                    >
                      {font}
                    </MenuItem>
                  );
                })}
              </Menu>
              <div className={classes.shadow}>
                <h4 className={classes.fontweight}>Font Weight</h4>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={
                    svgText.bold === "bold"
                      ? 900
                      : svgText.bold === "normal"
                      ? 300
                      : svgText.bold
                  }
                  label="Font Weight"
                  onChange={(event) => {
                    setSvgText({
                      ...svgText,
                      bold: event.target.value,
                    });
                  }}
                >
                  <MenuItem value={100}>100</MenuItem>
                  <MenuItem value={300}>300</MenuItem>
                  <MenuItem value={400}>400</MenuItem>
                  <MenuItem value={600}>600</MenuItem>
                  <MenuItem value={700}>700</MenuItem>
                  <MenuItem value={800}>800</MenuItem>
                  <MenuItem value={900}>900</MenuItem>
                </Select>
              </div>
              <div>
                <div className={classes.shadow}>
                  <h3> Italic</h3>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={svgText.italic === "italic" ? true : false}
                        onChange={() => {
                          // setItalicc(!italicc);
                          svgText.italic === "italic"
                            ? setSvgText({
                                ...svgText,
                                italic: "normal",
                              })
                            : setSvgText({
                                ...svgText,
                                italic: "italic",
                              });
                        }}
                        name="Italic"
                      />
                    }
                  />
                </div>
                <div className={classes.shadow}>
                  <h3> Decoration</h3>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={decoration}
                        onChange={() => {
                          setDecoration(!decoration);

                          decoration
                            ? setSvgText({
                                ...svgText,
                                underline: false,
                                overLine: false,
                                lineThrough: false,
                              })
                            : setSvgText({
                                ...svgText,
                                underline: true,
                              });
                        }}
                        name="Decoration"
                      />
                    }
                  />
                </div>
                {decoration ? (
                  <div className="shadow">
                    <Select
                      labelId="demo-simple-select-label1"
                      id="demo-simple-select1"
                      value={fontDecoration}
                      label="Decoration"
                      onChange={handleDecoration}
                    >
                      <MenuItem value={"underline"}>Underline</MenuItem>
                      <MenuItem value={"overLine"}>OverLine</MenuItem>
                      <MenuItem value={"lineThrough"}>Line Through</MenuItem>
                    </Select>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className={classes.shadow}>
                <h3>Font Size</h3>
                <Grid item>
                  <Input
                    className={classes.input}
                    value={svgText.fontSize}
                    margin="dense"
                    onChange={(event) => {
                      setSvgText({
                        ...svgText,
                        fontSize:
                          event.target.value === ""
                            ? ""
                            : Number(event.target.value),
                      });
                    }}
                    inputProps={{
                      step: 2,
                      min: 8,
                      max: 78,
                      type: "number",
                    }}
                  />
                </Grid>
              </div>
              <div className={classes.shadow}>
                <h3>Letter Spacing</h3>
                <Grid item>
                  <Input
                    className={classes.input}
                    value={svgText.letterSpacing}
                    margin="dense"
                    onChange={(event) => {
                      setSvgText({
                        ...svgText,
                        letterSpacing:
                          event.target.value === ""
                            ? ""
                            : Number(event.target.value),
                      });
                    }}
                    inputProps={{
                      step: 3,
                      min: -5,
                      max: 225,
                      type: "number",
                    }}
                  />
                </Grid>
              </div>
            
            </>
          ) : (
            ""
          )}
          <div className={classes.shadow}>
            <div>
              <h3 className={classes.name}>Color</h3>
            </div>
            <div className={classes.colorpicker}>
              <ColorPicker
                value={svgText.textColor}
                onChange={(value) => {
                  setSvgText({
                    ...svgText,
                    textColor: value.css.backgroundColor,
                  });
                }}
              />
            </div>
          </div>

          <div>
            <Box className={classes.shadow}>
              <h4>Border Width</h4>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={svgText.borderWidth}
                    className={classes.sliderr}
                    onChange={(event, newValue) => {
                      console.log("NewValue of Borderwidth > ", newValue);
                      setSvgText({
                        ...svgText,
                        borderWidth: newValue,
                      });
                    }}
                    min={0}
                    step={1}
                    max={20}
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
          <div className={classes.shadow}>
            <div>
              <h5>Border Color</h5>
            </div>
            <div className={classes.colorpicker}>
              <ColorPicker
                value={svgText.borderColor}
                onChange={(value) => {
                  setSvgText({
                    ...svgText,
                    borderColor: value.css.backgroundColor,
                  });
                }}
              />
            </div>
          </div>

          {svgText.type === "i-text" ? (
            <div className={classes.shadow}>
              <div>
                <h4>Line Height</h4>
              </div>

              <div className={classes.lineheightshadow}>
                <Slider
                  value={svgText.lineHeight}
                  onChange={(event, newValue) => {
                    setSvgText({
                      ...svgText,
                      lineHeight: newValue,
                    });
                  }}
                  min={0}
                  step={2}
                  max={60}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={classes.shadow}>
            <h4>Opacity</h4>

            <div className={classes.opacity}>
              <Slider
                value={svgText.opacity}
                onChange={(event, newValue) => {
                  setSvgText({
                    ...svgText,
                    opacity: newValue,
                  });
                }}
                min={0}
                step={0.1}
                max={1}
              />
            </div>
          </div>

          <div className="shadow-container">
            <div className={classes.shadow}>
              <h3>Shadow</h3>
              <FormControlLabel
                // label="Text Shadow"
                // labelPlacement="start"
                control={
                  <Switch
                    checked={svgText.shadow}
                    onChange={() =>
                      setSvgText({
                        ...svgText,
                        shadow: !svgText.shadow,
                      })
                    }
                    name="Shadow"
                  />
                }
              />
            </div>
            {svgText.shadow ? (
              <div>
                <div className={classes.shadow}>
                  <h4>Offset</h4>

                  <div className={classes.offset}>
                    <Slider
                      value={svgText.offsetX}
                      onChange={(event, newValue) => {
                        setSvgText({
                          ...svgText,
                          offsetX: newValue,
                          offsetY: newValue,
                        });
                      }}
                      min={-40}
                      step={2}
                      max={40}
                    />
                  </div>
                </div>

                <div className={classes.shadow}>
                  <h4>Blur</h4>

                  <div className={classes.blur}>
                    <Slider
                      value={svgText.blurr}
                      onChange={(event, newValue) => {
                        setSvgText({
                          ...svgText,
                          blurr: newValue,
                        });
                      }}
                      min={0}
                      step={1}
                      max={12}
                    />
                  </div>
                </div>

                <div className={classes.shadow}>
                  <h5>Shadow Color</h5>

                  {console.log("Shadow color in rightbar", svgText.shadowColor)}
                  <div className={classes.shadowcolor}>
                    <ColorPicker
                      value={svgText.shadowColor}
                      onChange={(value) => {
                        setSvgText({
                          ...svgText,
                          shadowColor: value.css.backgroundColor,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <div className={classes.emptyObject}>
          <CgArrowLongLeft className={classes.arrowIcon} />
          <span className={classes.textObject}>
            Click on any object on the image to customize this design template
          </span>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;

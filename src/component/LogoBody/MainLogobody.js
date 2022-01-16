import { Grid } from "@material-ui/core";
import React from "react";
import Canvas from "./Canvas/Canvas";
import Leftsidebar from "./Leftsidebar/Leftsidebar";
import { useStyle } from "./MainLogobodyStyle";
import MiddleSidebar from "./Middlesidebar/MiddleSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import Header from "./BodyHeader/Header";

const MainLogobody = ({
  iconCategories,
  icons,
  shapes,
  storedLogo,
  setLogo,
  updateRecord,
}) => {
  const classes = useStyle();

  const [svgLogo, setSvgLogo] = React.useState(null);
  // const [preview, setPreview] = React.useState(null);
  const preview = React.useRef(null);
  const [content, setContent] = React.useState("icon");
  const [text, setText] = React.useState("");
  const [iconType, setIconType] = React.useState(null);
  const [undoRedo, setUndoRedo] = React.useState(null);
  const [download, setDownload] = React.useState(null);
  const [layer, setLayer] = React.useState(null);
  const [loginCheck, setLoginCheck] = React.useState();
  const [objectSelection, setObjectSelection] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState(null);

  const [svgText, setSvgText] = React.useState({
    type: "",
    FontFamily: "",
    fontSize: 18,
    letterSpacing: 0,
    bold: "",
    italic: "normal",
    underline: false,
    overLine: false,
    lineThrough: false,
    textColor: "black",
    borderColor: "",
    borderWidth: 1,
    lineHeight: 20,
    opacity: 1,
    shadow: false,
    shadowColor: "",
    blurr: 0,
    offsetX: 0,
    offsetY: 0,
  });

  return (
    <>
      <Header
        setUndoRedo={setUndoRedo}
        setDownload={setDownload}
        preview={preview}
        setLoginCheck={setLoginCheck}
        loginCheck={loginCheck}
        updateRecord={updateRecord}
      />
      <Grid container className={classes.grid}>
        <Grid item xs={1} sm={1} md={1} className={classes.leftsidebar}>
          <Leftsidebar setContent={setContent} setIconType={setIconType} />
        </Grid>
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={3}
          className={classes.middlesidebar}
        >
          <MiddleSidebar
            content={content}
            setText={setText}
            setSvgLogo={setSvgLogo}
            iconType={iconType}
            setIconType={setIconType}
            setBackgroundColor={setBackgroundColor}
            backgroundColor={backgroundColor}
            iconCategories={iconCategories}
            icons={icons}
            shapes={shapes}
          />
        </Grid>
        <Grid item xs={6} sm={5} md={5} lg={5} className={classes.canvas}>
          <Canvas
            text={text}
            setText={setText}
            svgText={svgText}
            svgLogo={svgLogo}
            setSvgLogo={setSvgLogo}
            setSvgText={setSvgText}
            undoRedo={undoRedo}
            setUndoRedo={setUndoRedo}
            download={download}
            setDownload={setDownload}
            setLayer={setLayer}
            layer={layer}
            setObjectSelection={setObjectSelection}
            setBackgroundColor={setBackgroundColor}
            backgroundColor={backgroundColor}
            storedLogo={storedLogo}
            setLogo={setLogo}
            preview={preview}
            loginCheck={loginCheck}
          />
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={3} className={classes.rightsidebar}>
          <RightSidebar
            svgText={svgText}
            setSvgText={setSvgText}
            setLayer={setLayer}
            objectSelection={objectSelection}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MainLogobody;

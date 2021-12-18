import { Grid, Paper } from "@material-ui/core";
import { useStyle } from "./CanvasStyle";
import React, { useEffect, useState, useRef } from "react";
import Input from "@material-ui/core/Input";
import { useHistory } from "react-router-dom";

// import "./body.styles.css";
import { saveAs } from "file-saver";
import { fabric } from "fabric";
import "fabric-history";
import userService from "../../../services/UserService";

const Canvas = ({
  svgLogo,
  setSvgLogo,
  text,
  setText,
  svgText,
  setSvgText,
  undoRedo,
  setUndoRedo,
  download,
  setDownload,
  setLayer,
  layer,
  setObjectSelection,
  setBackgroundColor,
  backgroundColor,
  storedLogo,
  setLogo,
  preview,
  loginCheck,
}) => {
  const classes = useStyle();
  const [canvas, setCanvas] = useState(false);
  const [textId, settextId] = useState(null);
  const textProp = useRef(null);
  const [originalCanvas, setOriginalCanvas] = useState(null);
  const [count, setCount] = useState(11);
  const [objects, setObjects] = useState(null);
  const [historypuch, setHistorypush] = useState(true);
  const [hw, setHw] = useState({
    width: 400,
    height: 400,
    initial: true,
  });
  const history = useHistory();

  // const str = JSON.stringify(string);

  // str = JSON.stringify(str);
  useEffect(() => {
    if (!storedLogo) {
      history.push("/");
      setHistorypush(!historypuch);
    }
  }, [storedLogo]);

  useEffect(() => {
    if (
      !userService.isLoggedIn() &&
      storedLogo &&
      storedLogo.logotype === "user"
    ) {
      setLogo(null);
    }
  }, [loginCheck]);

  const storedLogoSet = () => {
    if (storedLogo) {
      preview.current = {
        _id: storedLogo._id,
        logotype: storedLogo.logotype,
        name: storedLogo.name,
        category: storedLogo.category,
        logoSvg: canvas.toSVG(),
        logoJson: canvas.toJSON(),
      };
    }
  };

  useEffect(() => {
    if (canvas && hw) {
      storedLogoSet();
    }
  }, [hw]);
  const initialize = (str) => {
    var canvas = new fabric.Canvas("a", {
      preserveObjectStacking: true,
    });
    function ConvertToIText(obj) {
      var text = obj.text;
      var textobj = obj.toObject();
      delete textobj.text;
      delete textobj.type;
      var itext = new fabric.IText(text, textobj);
      itext.styles = {};
      return itext;
    }
    // canvas.get;
    // var svg;
    // fabric.loadSVGFromString(str, function (objects, options) {
    //   svg = fabric.util.groupSVGElements(objects, options);
    //   svg.scaleToHeight(canvas.height);

    //   canvas.add(svg);
    //   svg.center();
    //   canvas.renderAll();
    //   svg.setCoords();
    //   var bounds = svg.getObjects();
    //   console.log(bounds[1]);
    //   bounds[0].group.setFill("#00000");

    //   fabric.loadSVGFromString(str, function (objects, options) {
    //     var group = new fabric.Group(objects, options);
    //     canvas.add(group);
    //     group.scaleToHeight(canvas.getHeight());
    //     canvas.renderAll();
    //     var items = group._objects;
    //     group._restoreObjectsState();
    //     canvas.remove(group);
    //     for (var i = 0; i < items.length; i++) {
    //       items[i].set({
    //         left: svg.getLeft() + bounds[i].getLeft() * svg.getScaleX(),
    //         top: svg.getTop() + bounds[i].getTop() * svg.getScaleY(),
    //       });
    //       canvas.add(items[i]);
    //     }
    //   });
    // });
    let closingTags = str.match(/(<\/?\w+>)/g);
    console.log("Closing tag > ", closingTags ? true : false);

    canvas.setDimensions({ width: 400, height: 400 });
    closingTags
      ? fabric.loadSVGFromString(str, function (objects, options) {
          // canvas.centerObject
          // //This is how
          // let svg = document.getElementById('svg-logo');
          // let svgWidth = svg.viewBox.baseVal.width;
          // let svgHeight = svg.viewBox.baseVal.height;

          // var svgg = fabric.util.groupSVGElements(objects,options);
          // // svg.center();
          // svgg.set({
          //   top: 5,
          //   left: 5,
          //   width: 400,
          //   height: 400,
          //   scaleX: (canvas.width - 10) / 400,
          //   scaleY: (canvas.height - 10) / 400
          // });
          // canvas.add(svgg).renderAll();

          // console.log("objects > ", svg.width);

          for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            if (obj.type === "text") {
              let id = obj.id;
              obj = ConvertToIText(obj);
              console.log("Text type");
              // obj.firstText = obj.text;
              obj.id = id;

              // obj.textState = "original";
            }
            canvas.add(obj);
          }
          // let CanvasObj = canvas.toJSON();
          // console.log("Canvas > JSON Formate >  ", CanvasObj);
          // canvas.clear();
          // canvas.loadFromJSON(JSON.stringify(CanvasObj));
          // canvas.forEachObject(function (obj) {
          //   console.log("Object type > ", obj.type);
          //   if (obj.type === "text") {
          //     obj = ConvertToIText(obj);
          //     obj.firstText = obj.text;
          //     obj.textState = "original";
          //   }
          // });
          // canvas.add.apply(canvas, objects);
          // canvas.backgroundColor = "red";
        })
      : // const objectss = JSON.parse(jsonn);
        // // const string = JSON.parse(str);
        // console.log("Type of SVG > ", str.match(/(<\/?\w+>)/g));
        // console.log("type here >", typeof objectss);
        canvas.loadFromJSON(
          str,
          canvas.renderAll.bind(canvas),
          function (objects, options) {
            // fabric.log(o, object);

            // canvas.add(svgg).renderAll();
            // canvas.setDimensions({ width: 300, height: 300 });
            console.log("objects  canvas obj> ", canvas.toSVG());
          }
        );
    // });
    console.log(
      "Canvas height > ",
      canvas.getHeight(),
      " Canvas Width > ",
      canvas.getWidth()
    );
    canvas.renderAll();
    setObjects(canvas.getObjects());
    setOriginalCanvas(canvas.historyUndo.length);
    console.log("Canvas obj > ", canvas);
    setCanvas(canvas);
    if (storedLogo) {
      preview.current = {
        _id: storedLogo._id,
        logotype: storedLogo.logotype,
        name: storedLogo.name,
        category: storedLogo.category,
        logoSvg: canvas.toSVG(),
        logoJson: canvas.toJSON(),
      };
    }

    setHw({
      ...hw,
      width: canvas.getWidth(),
      height: canvas.getHeight(),
    });
  };
  //initialize SVG string into Canvas
  useEffect(() => {
    console.log("StoredLogo 210", storedLogo);
    if (storedLogo && storedLogo._id) {
      console.log("storedLogo in Body", typeof storedLogo.logoJson);
      typeof storedLogo.logoJson !== "string"
        ? storedLogo.logoJson
          ? initialize(JSON.stringify(storedLogo.logoJson))
          : initialize(JSON.stringify(storedLogo.logoSvg))
        : storedLogo.logoJson
        ? initialize(storedLogo.logoJson)
        : initialize(storedLogo.logoSvg);
    }
  }, [storedLogo]);

  useEffect(() => {
    if (canvas) {
      if (hw) {
        canvas.setDimensions({ width: hw.width, height: hw.height });
        canvas.renderAll();
      }
    }
  }, [hw]);

  useEffect(() => {
    if (canvas) {
      canvas.on("mouse:wheel", function (opt) {
        var delta = opt.e.deltaY;
        var zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.setZoom(zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
      // canvas.fire("object:modified");
    }
  });

  //add Icon
  useEffect(() => {
    if (canvas && svgLogo) {
      let icon = new fabric.Path(svgLogo);
      icon.name = "icone" + 1;
      icon.id = "icon" + count;
      setCount((count) => count + 1);

      canvas.add(icon);
      icon.center();
      icon.setCoords();
      canvas.renderAll();
      console.log("Canvas > ", canvas.toSVG());
      setSvgLogo(null);
    }
  }, [svgLogo]);

  useEffect(() => {
    if (text) {
      if (text === "text1") {
        addText(30, "bold", "Add Logo Name");
        setText("");
      } else if (text === "text2") {
        addText(16, "400", "Add Slogan");
        setText("");
      }
    }
  }, [text]);

  useEffect(() => {
    if (backgroundColor) {
      canvas.setBackgroundColor(backgroundColor);
      canvas.renderAll();
      console.log("BackgrounfColorss > ", backgroundColor);
      canvas.fire("object:modified");
    }
  }, [backgroundColor]);

  useEffect(() => {
    if (textId && canvas && canvas.getActiveObject()) {
      let selectedObj = canvas.getActiveObject();
      let type = selectedObj.type;
      console.log("Type of object > ", type);
      if (
        canvas.getActiveObject().type === "text" ||
        canvas.getActiveObject().type === "i-text"
      ) {
        let FontFamily = selectedObj.fontFamily;
        let fontSize = selectedObj.fontSize;
        let letterSpacing = selectedObj.charSpacing;
        let bold = selectedObj.fontWeight;
        let italic = selectedObj.fontStyle;
        let underline = selectedObj.underline ? selectedObj.underline : false;
        let overLine = selectedObj.overline ? selectedObj.overline : false;
        let lineThrough = selectedObj.linethrough
          ? selectedObj.linethrough
          : false;
        let textColor = selectedObj.fill;
        let borderColor = selectedObj.stroke;
        let borderWidth = selectedObj.strokeWidth;
        let lineHeight = selectedObj.height;
        let opacity = selectedObj.opacity;
        let shadowColor = selectedObj.fill;
        let blurr = 4;
        let offsetX = 10;
        let offsetY = 10;
        let shadow = false;

        if (selectedObj.shadow) {
          shadow = true;
          console.log("Shadow Color > ", selectedObj.shadow.color);
          shadowColor = selectedObj.shadow.color;
          blurr = selectedObj.shadow.blur;
          offsetX = selectedObj.shadow.offsetX;
          offsetY = selectedObj.shadow.offsetY;
        }
        console.log("setSvgText render");
        let obj = {
          type,
          FontFamily,
          fontSize,
          letterSpacing,
          bold,
          italic,
          underline,
          overLine,
          lineThrough,
          textColor,
          borderColor,
          borderWidth,
          lineHeight,
          opacity,
          shadow,
          shadowColor,
          blurr,
          offsetX,
          offsetY,
        };
        setSvgText(obj);
        textProp.current = obj;
        console.log("SetHidden 2 true render");
        // setHidden(true);
      } else {
        let textColor = selectedObj.fill;
        let borderColor = selectedObj.stroke;
        let borderWidth = selectedObj.strokeWidth;
        let lineHeight = selectedObj.height;
        let opacity = selectedObj.opacity;
        let shadowColor = selectedObj.fill;
        let blurr = 4;
        let offsetX = 10;
        let offsetY = 10;
        let shadow = false;

        if (selectedObj.shadow) {
          shadow = true;
          console.log("Shadow Color > ", selectedObj.shadow.color);
          shadowColor = selectedObj.shadow.color;
          blurr = selectedObj.shadow.blur;
          offsetX = selectedObj.shadow.offsetX;
          offsetY = selectedObj.shadow.offsetY;
        }
        console.log("setSvgText render");
        let obj = {
          type,
          textColor,
          borderColor,
          borderWidth,
          lineHeight,
          opacity,
          shadow,
          shadowColor,
          blurr,
          offsetX,
          offsetY,
        };
        setSvgText(obj);
        textProp.current = obj;
        console.log("SetHidden 2 true render undo&redo", textProp.current);
        // setHidden(true);
      }
    }
  }, [textId]);

  useEffect(() => {
    if (
      canvas &&
      textProp &&
      svgText !== textProp.current &&
      canvas.getActiveObject() &&
      canvas.getActiveObject().type === "i-text"
    ) {
      let shadow = new fabric.Shadow({
        color: svgText.shadowColor,
        blur: svgText.blurr,
        offsetX: svgText.offsetX,
        offsetY: svgText.offsetY,
      });

      let selectedObj = canvas.getActiveObject();
      console.log("FontFamily Comparison > line 381> ", svgText.FontFamily);

      selectedObj.set("fontFamily", svgText.FontFamily);
      selectedObj.set("fontSize", svgText.fontSize);
      selectedObj.set("charSpacing", svgText.letterSpacing);
      selectedObj.set("fontWeight", svgText.bold);
      selectedObj.set("fontStyle", svgText.italic);
      selectedObj.set("underline", svgText.underline);
      selectedObj.set("overline", svgText.overLine);
      selectedObj.set("linethrough", svgText.lineThrough);
      selectedObj.set("fill", svgText.textColor);
      selectedObj.set("stroke", svgText.borderColor);
      selectedObj.set("strokeWidth", svgText.borderWidth);
      selectedObj.set("height", svgText.lineHeight);
      selectedObj.set("opacity", svgText.opacity);
      svgText.shadow
        ? selectedObj.set({ shadow: shadow })
        : (selectedObj.shadow = null);
      canvas.requestRenderAll();
      // setTextProp(svgText);
      textProp.current = svgText;

      console.log("undo&redo in svgText modifier >>. ");
      canvas.fire("object:modified");
    } else if (
      canvas &&
      textProp &&
      svgText !== textProp.current &&
      canvas.getActiveObject() &&
      canvas.getActiveObject().type !== "i-text"
    ) {
      let shadow = new fabric.Shadow({
        color: svgText.shadowColor,
        blur: svgText.blurr,
        offsetX: svgText.offsetX,
        offsetY: svgText.offsetY,
      });
      let selectedObj = canvas.getActiveObject();
      selectedObj.set("fill", svgText.textColor);
      selectedObj.set("stroke", svgText.borderColor);
      selectedObj.set("strokeWidth", svgText.borderWidth);
      selectedObj.set("height", svgText.lineHeight);
      selectedObj.set("opacity", svgText.opacity);
      svgText.shadow
        ? selectedObj.set({ shadow: shadow })
        : (selectedObj.shadow = null);
      canvas.requestRenderAll();
      textProp.current = svgText;
      console.log("undo&redo in svgText modifier abcdef ", selectedObj);
      canvas.fire("object:modified");
    }
  }, [svgText]);

  function handleSelection(e) {
    setObjectSelection(true);
    console.log(
      "Selected Text renderrr in Body outside is >",
      canvas.getActiveObject()
    );
    console.log(" Undo&redo here in Selection");
    if (e.target !== textId) {
      console.log(
        "Hiddent renderrr condition",
        e.target.get("id") !== textId,
        "textid > ",
        textId,
        " Get Active object is>>>  ",
        e.target
      );
      // setHidden(false);
      console.log("settextId render");
      // if (!e.target.get("id")) {
      //   e.target.set("id", count);
      //   setCount(count + 1);
      // }

      settextId(e.target);
      console.log("Hiddent renderrr condition 2 ");
    }

    storedLogoSet();
  }
  function handleCleared() {
    console.log("handleCleared render");

    setObjectSelection(false);
    settextId(null);
  }

  useEffect(() => {
    if (canvas) {
      console.log("useEffect rerendering");
      canvas.on({
        "selection:updated": handleSelection,
        "selection:created": handleSelection,
        "selection:cleared": handleCleared,
      });
      canvas.on("object:modified", () => {
        storedLogoSet();
      });
      canvas.on("object:added", () => {
        storedLogoSet();
        // console.log("Object:added");
      });
      canvas.on("object:deleted", () => {
        storedLogoSet();
        // console.log("Object:added");
      });
      // return () => {
      //   console.log("canvas off render");
      //   canvas.off(["selection:updated", "selection:created"]);
      // };
    }
  });

  useEffect(() => {
    if (canvas) {
      document.onkeydown = function (evt) {
        evt = evt || window.event;

        var movementDelta = 2;
        var scale = 0.01;

        var activeObject = canvas.getActiveObject();
        console.log("Event key code >> ", evt);

        if (!evt.ctrlKey && evt.code === "ArrowLeft") {
          evt.preventDefault(); // Prevent the default action
          if (activeObject) {
            let a = activeObject.get("left") - movementDelta;
            activeObject.set("left", a);
          }
        } else if (!evt.ctrlKey && evt.code === "ArrowRight") {
          evt.preventDefault(); // Prevent the default action
          if (activeObject) {
            let a = activeObject.get("left") + movementDelta;
            activeObject.set("left", a);
          }
        } else if (!evt.ctrlKey && evt.code === "ArrowUp") {
          evt.preventDefault(); // Prevent the default action
          if (activeObject) {
            let a = activeObject.get("top") - movementDelta;
            activeObject.set("top", a);
          }
        } else if (!evt.ctrlKey && evt.code === "ArrowDown") {
          evt.preventDefault(); // Prevent the default action
          if (activeObject) {
            let abs = activeObject.get("top") + movementDelta;
            activeObject.set("top", abs);
          }
        } else if (evt.code === "Delete") {
          if (activeObject) {
            deleteElement();
          }
        } else if (evt.altKey && evt.code === "KeyX") {
          if (activeObject) {
            duplicate();
          }
        } else if (evt.ctrlKey && evt.code === "ArrowUp") {
          if (activeObject) {
            bringToFront();
          }
        } else if (evt.ctrlKey && evt.code === "ArrowDown") {
          if (activeObject) {
            bringToBack();
          }
        } else if (evt.key === "=") {
          if (activeObject) {
            let a = activeObject.get("scaleX") + scale;
            activeObject.set("scaleX", a);
            let b = activeObject.get("scaleY") + scale;
            activeObject.set("scaleX", a);
            activeObject.set("scaleY", b);
          }
        } else if (evt.key === "-") {
          if (activeObject) {
            let a = activeObject.get("scaleX") - scale;
            let b = activeObject.get("scaleY") - scale;
            activeObject.set("scaleX", a);
            activeObject.set("scaleY", b);
          }
        } else if (evt.ctrlKey && evt.code === "ArrowRight") {
          if (activeObject) {
            let a = activeObject.get("angle") + 1;
            console.log("A > ", activeObject.get("angle"));
            activeObject.rotate(a).setCoords();
          }
        } else if (evt.ctrlKey && evt.code === "ArrowLeft") {
          if (activeObject) {
            let a = activeObject.get("angle") - 1;
            console.log("A > ", activeObject.get("angle"));
            activeObject.rotate(a);
          }
        } else if (evt.ctrlKey && evt.code === "KeyZ") {
          funUndo();
        } else if (evt.ctrlKey && evt.code === "KeyY") {
          funRedo();
        }
        if (activeObject) {
          activeObject.setCoords();
          canvas.renderAll();
        }
      };
      document.onkeyup = function (evt) {
        evt = evt || window.event;

        var activeObject = canvas.getActiveObject();
        console.log("Event keyup code >> ", evt);

        if (!evt.ctrlKey && evt.code === "ArrowLeft") {
          evt.preventDefault(); // Prevent the default action
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (!evt.ctrlKey && evt.code === "ArrowRight") {
          evt.preventDefault(); // Prevent the default action
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (!evt.ctrlKey && evt.code === "ArrowUp") {
          evt.preventDefault(); // Prevent the default action
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (!evt.ctrlKey && evt.code === "ArrowDown") {
          evt.preventDefault(); // Prevent the default action
        } else if (evt.code === "Delete") {
          deleteElement();
        } else if (evt.altKey && evt.code === "KeyX") {
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (evt.ctrlKey && evt.code === "ArrowUp") {
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (evt.ctrlKey && evt.code === "ArrowDown") {
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (evt.key === "=") {
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (evt.key === "-") {
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (evt.ctrlKey && evt.code === "ArrowRight") {
          if (activeObject) {
            canvas.fire("object:modified");
          }
        } else if (evt.ctrlKey && evt.code === "ArrowLeft") {
          if (activeObject) {
            canvas.fire("object:modified");
          }
        }

        if (activeObject) {
          activeObject.setCoords();
          canvas.renderAll();
        }
      };
    }
  });

  useEffect(() => {
    if (layer) {
      if (layer === "forward") {
        bringToFront();
        setLayer(null);
      } else if (layer === "backword") {
        bringToBack();
        setLayer(null);
      } else if (layer === "duplicate") {
        duplicate();
        setLayer(null);
      } else if (layer === "delete") {
        deleteElement();
        setLayer(null);
      }
    }
  }, [layer]);

  const bringToFront = () => {
    var canva = canvas;
    var activeObj = canva.getActiveObject();
    activeObj && canva.bringToFront(activeObj).renderAll();
    canvas.fire("object:modified");
  };

  const bringToBack = () => {
    var canva = canvas;
    var activeObj = canva.getActiveObject();
    activeObj && canva.sendToBack(activeObj).renderAll();
    canvas.fire("object:modified");
  };

  const addText = (size, weight, name) => {
    let t = new fabric.IText(name, {
      left: 50,
      top: 100,
      fontFamily: "arial black",
      fill: "#333",
      fontSize: size,
      fontWeight: weight,
      id: "text" + count,
    });
    setCount(count + 2);
    t.center();
    canvas.add(t);
  };

  const duplicate = () => {
    console.log("Select group ------ ");
    let activeObj = canvas.getActiveObject();
    let selGroup = new fabric.ActiveSelection(activeObj, {
      canvas: canvas,
    });
    if (
      activeObj &&
      selGroup._objects._objects &&
      selGroup._objects._objects.length > 1
    ) {
      console.log("Select group");
      activeObj.forEachObject(function (activeObj) {
        // var object = fabric.util.object.clone(activeObj);
        activeObj.clone(function (o) {
          var vobj = o;
          if (vobj) {
            // vobj.set({
            //   left: vobj + 10,
            //   top: vobj + 10,
            // });
            vobj.title = vobj.title + "_copy" + count;
            vobj.id = vobj.id + "_copy" + count;
            vobj.set("top", vobj.top + 10);
            vobj.set("left", vobj.left + 10);
            canvas.add(vobj);
            canvas.discardActiveObject(activeObj);
          }
        });

        // object.title = object.title + "_copy" + count;
        // object.id = object.id + "_copy" + count;
        // object.set("top", object.top + 10);
        // object.set("left", object.left + 10);

        // canvas.add(object);
      });

      canvas.renderAll();
      canvas.calcOffset();
      setCount(count + 2);
    } else if (activeObj) {
      console.log("Select element");
      // var object = fabric.util.object.clone(activeObj);
      // canvas.discardActiveObject(activeObj);

      activeObj.clone(function (o) {
        var vobj = o;
        if (vobj) {
          console.log("CLONED > ", vobj, " Activeobj > ", activeObj);
          vobj.title = vobj.title + "_copy" + count;
          vobj.id = vobj.id + "_copy" + count;
          vobj.set("top", vobj.top + 10);
          vobj.set("left", vobj.left + 10);
          canvas.add(vobj);
          canvas.discardActiveObject(activeObj);
        }
      });
      setCount(count + 2);
      canvas.renderAll();
      canvas.calcOffset();
    }
  };

  const deleteElement = () => {
    console.log("Multiplt selection > ", canvas.get);
    let obj = canvas.getActiveObject();
    let selGroup = new fabric.ActiveSelection(obj, {
      canvas: canvas,
    });
    if (
      obj &&
      selGroup._objects._objects &&
      selGroup._objects._objects.length > 1
    ) {
      console.log("inside deleteElement");
      // if (confirm("Deleted selected?")) {
      obj.forEachObject(function (ob) {
        canvas.remove(ob);
      });

      // }
    } else {
      obj && canvas.remove(obj).renderAll();
    }
    canvas.discardActiveObject().renderAll();
    // obj && canvas.remove(obj);
    console.log("Objects are > ", canvas);
  };

  useEffect(() => {
    if (download) {
      if (download === "png") {
        var canv = document.getElementById("a");
        canv.toBlob(function (blob) {
          saveAs(blob, "Logo.png");
        });
        setDownload(null);
      } else if (download === "jpeg") {
        var canv = document.getElementById("a");
        canv.toBlob(function (blob) {
          saveAs(blob, "Logo.jpeg");
        });
        setDownload(null);
      } else if (download === "svg") {
        // saveAs(
        //   new Blob([canvas.toSVG()], { type: "image/svg+xml" }),
        //   `logo.svg`
        // );
        var json = canvas.toJSON();
        saveAs(
          new Blob([JSON.stringify(json)], { type: "txt/JSON" }),
          "name.JSON"
        );
        setDownload(null);
      }
    }
  }, [download]);

  useEffect(() => {
    if (undoRedo === "undo") {
      funUndo();

      setUndoRedo(null);
    } else if (undoRedo === "redo") {
      funRedo();
      setUndoRedo(null);
    }
  }, [undoRedo]);

  const funUndo = () => {
    if (originalCanvas < canvas.historyUndo.length) {
      canvas.undo();
      storedLogoSet();
    }
  };
  const funRedo = () => {
    if (canvas.historyRedo.length > 0) {
      canvas.redo();
      storedLogoSet();
    }
  };
  const handleBlurWidth = () => {
    if (hw.width < 100) {
      setHw({
        ...hw,
        width: 100,
      });
    } else if (hw.width > 450) {
      setHw({
        ...hw,
        width: 550,
      });
    }
  };
  const handleBlurHeight = () => {
    if (hw.height < 100) {
      setHw({
        ...hw,
        height: 100,
      });
    } else if (hw.height > 450) {
      setHw({
        ...hw,
        height: 550,
      });
    }
  };

  return (
    <div className={classes.canvasgrid}>
      <Grid
        container
        className={classes.mainGrid}
        // style={{ minHeight: "10vh" }}
      >
        <Grid item xs={6} sm={12} md={9} lg={8}>
          <Paper elevation={3} className={classes.paper}>
            <canvas id="a" className={classes.logocontent} />
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.ResParent}>
        <Paper elevation={3} className={classes.Resulation}>
          <h4>Resolution</h4>
          <Input
            className={classes.widthRes}
            value={hw.width}
            margin="dense"
            onBlur={handleBlurWidth}
            onChange={(event) => {
              setHw({
                ...hw,
                width:
                  event.target.value === "" ? "" : Number(event.target.value),
              });
            }}
            inputProps={{
              step: 10,
              min: 100,
              max: 450,
              type: "number",
            }}
          />
          <Input
            className={classes.widthRes}
            value={hw.height}
            margin="dense"
            onBlur={handleBlurHeight}
            onChange={(event) => {
              setHw({
                ...hw,
                height:
                  event.target.value === "" ? "" : Number(event.target.value),
              });
            }}
            inputProps={{
              step: 10,
              min: 100,
              max: 450,
              type: "number",
            }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Canvas;

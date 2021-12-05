import {
  Grid,
  Paper,
  Typography,
  Dialog,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import { useStyle } from "./CanvasStyle";
import React, { useEffect, useState, useRef } from "react";
import Input from "@material-ui/core/Input";

// import "./body.styles.css";
import { saveAs } from "file-saver";
import { fabric } from "fabric";
import "fabric-history";

const Canvas = ({
  svgLogo,
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
}) => {
  const classes = useStyle();
  const [canvas, setCanvas] = useState(false);
  const [textId, settextId] = useState(null);
  const textProp = useRef(null);
  const [originalCanvas, setOriginalCanvas] = useState(null);
  const [count, setCount] = useState(11);
  const [objects, setObjects] = useState(null);
  const [hw, setHw] = useState({
    width: 400,
    height: 400,
    initial: true,
  });

  const jsonn = `
  {"version":"4.6.0","objects":[{"type":"rect","version":"4.6.0","originX":"left","originY":"top","left":66.55,"top":62.86,"width":271.07,"height":174.33,"fill":"rgb(216,216,216)","stroke":"","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"rx":0,"ry":0},{"type":"ellipse","version":"4.6.0","originX":"left","originY":"top","left":108.69,"top":105.96,"width":179.12,"height":88.12,"fill":"rgb(41,3,3)","stroke":"","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"rx":89.559,"ry":44.061},{"type":"i-text","version":"4.6.0","originX":"left","originY":"top","left":135.74,"top":142.74,"width":134.29,"height":18.08,"fill":"rgb(255,255,255)","stroke":"","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Arial, sans-serif","fontWeight":"normal","fontSize":16,"text":"Muhammad Ehsan","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":{},"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left"},{"type":"i-text","version":"4.6.0","originX":"left","originY":"top","left":103.91,"top":243.61,"width":193.63,"height":30.28,"fill":"rgb(199,23,23)","stroke":"","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0.7,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Arial, sans-serif","fontWeight":"normal","fontSize":26.8,"text":"Comapny Name","underline":false,"overline":false,"linethrough":true,"textAlign":"left","fontStyle":"italic","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":{},"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left"}]}
  `;

  var string = {
    version: "4.6.0",
    objects: [
      {
        type: "i-text",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 101,
        top: 249,
        width: 190.74,
        height: 21.47,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 1,
        scaleY: 1.42,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: "bold",
        fontSize: 19,
        text: "Your Company Name",
        underline: false,
        overline: false,
        linethrough: false,
        textAlign: "left",
        fontStyle: "normal",
        lineHeight: 1.16,
        textBackgroundColor: "",
        charSpacing: 0,
        styles: {},
        direction: "ltr",
        path: null,
        pathStartOffset: 0,
        pathSide: "left",
      },
      {
        type: "i-text",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 153,
        top: 288.36,
        width: 94.07,
        height: 20.34,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 1,
        scaleY: 1,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: "normal",
        fontSize: 18,
        text: "solgan here",
        underline: false,
        overline: false,
        linethrough: false,
        textAlign: "left",
        fontStyle: "normal",
        lineHeight: 1.16,
        textBackgroundColor: "",
        charSpacing: 0,
        styles: {},
        direction: "ltr",
        path: null,
        pathStartOffset: 0,
        pathSide: "left",
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 140.8,
        top: 231.86,
        width: 423.18,
        height: 51.54,
        fill: {
          type: "radial",
          coords: {
            x1: 281.96,
            y1: 536.67,
            x2: 281.96,
            y2: 536.67,
            r1: 0,
            r2: 211.59,
          },
          colorStops: [
            { offset: 1, color: "rgb(0,0,0)", opacity: 0 },
            { offset: 0.044496, color: "rgb(0,0,0)", opacity: 0.95294 },
            { offset: 0, color: "rgb(0,0,0)", opacity: 1 },
          ],
          offsetX: -70.37000000000003,
          offsetY: -510.90199999999993,
          gradientUnits: "pixels",
          gradientTransform: [1, 0, 0, 0.12, 0, 471.31],
        },
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.26,
        scaleY: 0.32,
        angle: 0.63,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: -0.48,
        skewY: 0,
        path: [
          ["M", 493.55, 536.67],
          [
            "C",
            493.55,
            550.901,
            398.81600000000003,
            562.438,
            281.96000000000004,
            562.438,
          ],
          [
            "C",
            165.10400000000004,
            562.438,
            70.37000000000003,
            550.901,
            70.37000000000003,
            536.67,
          ],
          [
            "C",
            70.37000000000003,
            522.439,
            165.10400000000004,
            510.90199999999993,
            281.96000000000004,
            510.90199999999993,
          ],
          [
            "C",
            398.81600000000003,
            510.90199999999993,
            493.55000000000007,
            522.439,
            493.55000000000007,
            536.67,
          ],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 149,
        top: 132.6,
        width: 2601.21,
        height: 1880.37,
        fill: "rgb(137,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.04,
        scaleY: 0.04,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 780.01, 2761.1],
          ["L", 1208.07, 1468.8],
          ["L", 2952.67, 1468.8],
          ["L", 3381.2200000000003, 2760.2],
          [
            "C",
            3381.2200000000003,
            2760.2,
            3008.1400000000003,
            3161.5899999999997,
            2758.8300000000004,
            3245.7,
          ],
          [
            "C",
            2325.1300000000006,
            3392,
            1818.0600000000004,
            3380.0299999999997,
            1385.8300000000004,
            3229.546,
          ],
          [
            "C",
            1144.7700000000004,
            3145.624,
            780.0800000000004,
            2761.096,
            780.0800000000004,
            2761.096,
          ],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 149,
        top: 133.44,
        width: 2601.21,
        height: 1880.37,
        fill: {
          type: "linear",
          coords: { x1: 245.23, y1: 104.37, x2: 282.76, y2: 184.4 },
          colorStops: [
            { offset: 1, color: "rgb(128,128,128)", opacity: 1 },
            { offset: 0, color: "rgb(204,204,204)", opacity: 1 },
          ],
          offsetX: -780.01,
          offsetY: -1445.8,
          gradientUnits: "pixels",
          gradientTransform: [23.05, 0, 0, -23.05, -3856, 5277.2],
        },
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.04,
        scaleY: 0.04,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 780.01, 2738.1],
          ["L", 1208.07, 1445.8],
          ["L", 2952.67, 1445.8],
          ["L", 3381.2200000000003, 2737.2],
          [
            "C",
            3381.2200000000003,
            2737.2,
            3008.1400000000003,
            3138.5899999999997,
            2758.8300000000004,
            3222.7,
          ],
          [
            "C",
            2325.1300000000006,
            3369,
            1818.0600000000004,
            3357.0299999999997,
            1385.8300000000004,
            3206.547,
          ],
          [
            "C",
            1144.7700000000004,
            3122.625,
            780.0800000000004,
            2738.097,
            780.0800000000004,
            2738.097,
          ],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 198.89,
        top: 120.97,
        width: 63.07,
        height: 728.83,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 2084.3, 2393.9],
          ["L", 2068.8830000000003, 1683.29],
          ["L", 2116.5370000000003, 1676.2821],
          ["L", 2131.954, 2405.1121],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 195.14,
        top: 120.31,
        width: 6.31,
        height: 93.91,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 260.87, 69.511],
          ["L", 256.6652, 67.759],
          ["L", 254.56280000000004, 161.66500000000002],
          ["L", 258.94280000000003, 158.5114],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 196.78,
        top: 119.78,
        width: 9.9,
        height: 2.5,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 256.53, 67.847],
          ["L", 260.9538, 69.6428],
          ["L", 266.4288, 68.19739999999999],
          ["L", 262.88100000000003, 67.1462],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 198.89,
        top: 120.97,
        width: 63.07,
        height: 728.83,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 2084.3, 2393.9],
          ["L", 2068.8830000000003, 1683.29],
          ["L", 2116.5370000000003, 1676.2821],
          ["L", 2131.954, 2405.1121],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 195.14,
        top: 120.31,
        width: 6.31,
        height: 93.91,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 260.87, 69.511],
          ["L", 256.6652, 67.759],
          ["L", 254.56280000000004, 161.66500000000002],
          ["L", 258.94280000000003, 158.5114],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 196.78,
        top: 119.78,
        width: 9.9,
        height: 2.5,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 256.53, 67.847],
          ["L", 260.9538, 69.6428],
          ["L", 266.4288, 68.19739999999999],
          ["L", 262.88100000000003, 67.1462],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 192.69,
        top: 125,
        width: 6.18,
        height: 93.31,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 251.48, 75.145],
          ["L", 255.69209999999998, 73.4106],
          ["L", 254.70102999999997, 165.5806],
          ["L", 249.51032999999998, 166.7168],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 188.3,
        top: 125.63,
        width: 7.17,
        height: 92.4,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 244.93, 74.416],
          ["L", 251.4673, 75.01416],
          ["L", 250.2483, 166.81816],
          ["L", 244.3019, 160.12846000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 188.88,
        top: 124.47,
        width: 10.91,
        height: 2.19,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 244.93, 74.46],
          ["L", 251.6313, 75.16078999999999],
          ["L", 255.83610000000002, 73.45258999999999],
          ["L", 250.0107, 72.97078999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 192.69,
        top: 125,
        width: 6.18,
        height: 93.31,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 251.48, 75.145],
          ["L", 255.69209999999998, 73.4106],
          ["L", 254.70102999999997, 165.5806],
          ["L", 249.51032999999998, 166.7168],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 188.3,
        top: 125.63,
        width: 7.17,
        height: 92.4,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 244.93, 74.416],
          ["L", 251.4673, 75.01416],
          ["L", 250.2483, 166.81816],
          ["L", 244.3019, 160.12846000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 188.88,
        top: 124.47,
        width: 10.91,
        height: 2.19,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 244.93, 74.46],
          ["L", 251.6313, 75.16078999999999],
          ["L", 255.83610000000002, 73.45258999999999],
          ["L", 250.0107, 72.97078999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 180.05,
        top: 127.13,
        width: 17.87,
        height: 84.8,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 5.57,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 229.69, 77.22],
          ["L", 239.852, 157.636],
          ["L", 246.8599, 159.2128],
          ["L", 235.8219, 76.51879999999998],
          ["L", 228.9891, 74.41639999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 185.59,
        top: 127.53,
        width: 15.07,
        height: 87.07,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 5.57,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 235.64, 76.519],
          ["L", 238.7936, 74.2414],
          ["L", 250.70759999999999, 161.3154],
          ["L", 245.78959999999998, 159.70860000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 180.19,
        top: 125.47,
        width: 9.86,
        height: 4.16,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 5.57,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 228.91, 74.551],
          ["L", 235.6702, 76.5596],
          ["L", 238.7694, 74.39840000000001],
          ["L", 233.2175, 72.39920000000001],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 180.05,
        top: 127.13,
        width: 17.87,
        height: 84.8,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 5.57,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 229.69, 77.22],
          ["L", 239.852, 157.636],
          ["L", 246.8599, 159.2128],
          ["L", 235.8219, 76.51879999999998],
          ["L", 228.9891, 74.41639999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 185.59,
        top: 127.53,
        width: 15.07,
        height: 87.07,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 5.57,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 235.64, 76.519],
          ["L", 238.7936, 74.2414],
          ["L", 250.70759999999999, 161.3154],
          ["L", 245.78959999999998, 159.70860000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 180.19,
        top: 125.47,
        width: 9.86,
        height: 4.16,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 5.57,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 228.91, 74.551],
          ["L", 235.6702, 76.5596],
          ["L", 238.7694, 74.39840000000001],
          ["L", 233.2175, 72.39920000000001],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 160.36,
        top: 125.79,
        width: 35.18,
        height: 64.42,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 17.56,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 166.08,
        top: 126.42,
        width: 254.26,
        height: 573.32,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 17.93,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 160.84,
        top: 124.24,
        width: 8.15,
        height: 7.64,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 17.56,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 198.23, 92.945],
          ["L", 200.4239, 88.08149999999999],
          ["L", 206.3767, 85.30499999999999],
          ["L", 204.6546, 88.96749999999999],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 160.36,
        top: 125.79,
        width: 35.18,
        height: 64.42,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 17.56,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 166.08,
        top: 126.42,
        width: 254.26,
        height: 573.32,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 17.93,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 160.84,
        top: 124.24,
        width: 8.15,
        height: 7.64,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 17.56,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 198.23, 92.945],
          ["L", 200.4239, 88.08149999999999],
          ["L", 206.3767, 85.30499999999999],
          ["L", 204.6546, 88.96749999999999],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 148.06,
        top: 136.62,
        width: 35.18,
        height: 64.42,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 153.4,
        top: 135.32,
        width: 254.26,
        height: 573.32,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 148.45,
        top: 135.52,
        width: 7.01,
        height: 6.31,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 148.06,
        top: 136.62,
        width: 35.18,
        height: 64.42,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 153.4,
        top: 135.32,
        width: 254.26,
        height: 573.32,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 148.45,
        top: 135.52,
        width: 7.01,
        height: 6.31,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 204.46,
        top: 124.26,
        width: 11.74,
        height: 79.89,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: -1.59,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 266.83, 74.241],
          ["L", 273.4876, 154.132],
          ["L", 278.5684, 153.256],
          ["L", 271.9108, 75.993],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 208.55,
        top: 123.99,
        width: 11.39,
        height: 79.72,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: -1.59,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 271.73, 76.168],
          ["L", 276.6356, 74.0656],
          ["L", 283.118, 153.25560000000002],
          ["L", 278.3876, 153.7812],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 204.39,
        top: 123.52,
        width: 9.99,
        height: 2.8,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: -1.59,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 266.83, 74.416],
          ["L", 272.086, 76.16799999999999],
          ["L", 276.8164, 74.2408],
          ["L", 271.21, 73.36480999999999],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 204.46,
        top: 124.26,
        width: 11.74,
        height: 79.89,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: -1.59,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 266.83, 74.241],
          ["L", 273.4876, 154.132],
          ["L", 278.5684, 153.256],
          ["L", 271.9108, 75.993],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 208.55,
        top: 123.99,
        width: 11.39,
        height: 79.72,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: -1.59,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 271.73, 76.168],
          ["L", 276.6356, 74.0656],
          ["L", 283.118, 153.25560000000002],
          ["L", 278.3876, 153.7812],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 204.39,
        top: 123.52,
        width: 9.99,
        height: 2.8,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: -1.59,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 266.83, 74.416],
          ["L", 272.086, 76.16799999999999],
          ["L", 276.8164, 74.2408],
          ["L", 271.21, 73.36480999999999],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 214.03,
        top: 129.23,
        width: 9.11,
        height: 72.88,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 284, 78.446],
          ["L", 277.1673, 80.0228],
          ["L", 279.09450000000004, 151.3288],
          ["L", 286.27760000000006, 146.4232],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 210.81,
        top: 129.09,
        width: 5.96,
        height: 75.86,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 277.16, 79.848],
          ["L", 273.3056, 78.2712],
          ["L", 275.75840000000005, 154.1322],
          ["L", 279.26240000000007, 152.205],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 210.66,
        top: 127.61,
        width: 11.13,
        height: 3.5,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 273.13, 78.534],
          ["L", 279.4372, 76.51920000000001],
          ["L", 284.2552, 78.70920000000001],
          ["L", 277.3349, 80.0232],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 214.03,
        top: 129.23,
        width: 9.11,
        height: 72.88,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 284, 78.446],
          ["L", 277.1673, 80.0228],
          ["L", 279.09450000000004, 151.3288],
          ["L", 286.27760000000006, 146.4232],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 210.81,
        top: 129.09,
        width: 5.96,
        height: 75.86,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 277.16, 79.848],
          ["L", 273.3056, 78.2712],
          ["L", 275.75840000000005, 154.1322],
          ["L", 279.26240000000007, 152.205],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 210.66,
        top: 127.61,
        width: 11.13,
        height: 3.5,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 273.13, 78.534],
          ["L", 279.4372, 76.51920000000001],
          ["L", 284.2552, 78.70920000000001],
          ["L", 277.3349, 80.0232],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 232.64,
        top: 196.08,
        width: 17.87,
        height: 84.8,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 229.69, 77.22],
          ["L", 239.852, 157.636],
          ["L", 246.8599, 159.2128],
          ["L", 235.8219, 76.51879999999998],
          ["L", 228.9891, 74.41639999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 227.08,
        top: 197.83,
        width: 15.07,
        height: 87.07,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 235.64, 76.519],
          ["L", 238.7936, 74.2414],
          ["L", 250.70759999999999, 161.3154],
          ["L", 245.78959999999998, 159.70860000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 232.71,
        top: 127.03,
        width: 9.86,
        height: 4.16,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 228.91, 74.551],
          ["L", 235.6702, 76.5596],
          ["L", 238.7694, 74.39840000000001],
          ["L", 233.2175, 72.39920000000001],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 232.64,
        top: 196.08,
        width: 17.87,
        height: 84.8,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 229.69, 77.22],
          ["L", 239.852, 157.636],
          ["L", 246.8599, 159.2128],
          ["L", 235.8219, 76.51879999999998],
          ["L", 228.9891, 74.41639999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 227.08,
        top: 197.83,
        width: 15.07,
        height: 87.07,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 235.64, 76.519],
          ["L", 238.7936, 74.2414],
          ["L", 250.70759999999999, 161.3154],
          ["L", 245.78959999999998, 159.70860000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 232.71,
        top: 127.03,
        width: 9.86,
        height: 4.16,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 228.91, 74.551],
          ["L", 235.6702, 76.5596],
          ["L", 238.7694, 74.39840000000001],
          ["L", 233.2175, 72.39920000000001],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 218.82,
        top: 132.82,
        width: 65.41,
        height: 509.41,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: -4.76,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1803.8, 2277.5],
          ["L", 1849.389, 2251.732],
          ["L", 1869.2109999999998, 1768.092],
          ["L", 1807.7649999999999, 1825.574],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 223.66,
        top: 133.67,
        width: 43.61,
        height: 525.27,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: -4.76,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1849.3, 2251.7],
          ["L", 1879.032, 2265.575],
          ["L", 1892.907, 1740.3049999999998],
          ["L", 1859.211, 1779.9479999999999],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 218.57,
        top: 130.96,
        width: 78.29,
        height: 44.6,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: -4.76,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1802.8, 2275.4],
          ["L", 1850.3709999999999, 2251.614],
          ["L", 1881.0939999999998, 2265.489],
          ["L", 1860.2809999999997, 2289.275],
          ["L", 1831.5399999999997, 2296.2125],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 218.82,
        top: 132.82,
        width: 65.41,
        height: 509.41,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: -4.76,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1803.8, 2277.5],
          ["L", 1849.389, 2251.732],
          ["L", 1869.2109999999998, 1768.092],
          ["L", 1807.7649999999999, 1825.574],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 223.66,
        top: 133.67,
        width: 43.61,
        height: 525.27,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: -4.76,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1849.3, 2251.7],
          ["L", 1879.032, 2265.575],
          ["L", 1892.907, 1740.3049999999998],
          ["L", 1859.211, 1779.9479999999999],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 218.57,
        top: 130.96,
        width: 78.29,
        height: 44.6,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: -4.76,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1802.8, 2275.4],
          ["L", 1850.3709999999999, 2251.614],
          ["L", 1881.0939999999998, 2265.489],
          ["L", 1860.2809999999997, 2289.275],
          ["L", 1831.5399999999997, 2296.2125],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 256.43,
        top: 185.43,
        width: 35.18,
        height: 64.42,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.85,
        scaleY: 0.92,
        angle: 161.81,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.82,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 252.38,
        top: 191.96,
        width: 254.26,
        height: 573.32,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.11,
        scaleY: 0.12,
        angle: 162.55,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: -3.36,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 238.96,
        top: 133.32,
        width: 7.01,
        height: 6.31,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.85,
        scaleY: 0.92,
        angle: 161.81,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.82,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 256.43,
        top: 185.43,
        width: 35.18,
        height: 64.42,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.85,
        scaleY: 0.92,
        angle: 161.81,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.82,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 252.38,
        top: 191.96,
        width: 254.26,
        height: 573.32,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.11,
        scaleY: 0.12,
        angle: 162.55,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: -3.36,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 238.96,
        top: 133.32,
        width: 7.01,
        height: 6.31,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.85,
        scaleY: 0.92,
        angle: 161.81,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.82,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 250.58,
        top: 191.05,
        width: 35.18,
        height: 64.42,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 245.25,
        top: 195.07,
        width: 254.26,
        height: 573.32,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 180,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 250.2,
        top: 141.41,
        width: 7.01,
        height: 6.31,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 250.58,
        top: 191.05,
        width: 35.18,
        height: 64.42,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 245.25,
        top: 195.07,
        width: 254.26,
        height: 573.32,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 180,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 250.2,
        top: 141.41,
        width: 7.01,
        height: 6.31,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 180,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 255.36,
        top: 207.66,
        width: 35.18,
        height: 64.42,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.93,
        angle: 157.76,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.81,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 252.43,
        top: 213.78,
        width: 254.26,
        height: 573.32,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.11,
        scaleY: 0.12,
        angle: 157.62,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: -3.81,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 234.21,
        top: 156.85,
        width: 7.01,
        height: 6.31,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.93,
        angle: 157.76,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.81,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 255.36,
        top: 207.66,
        width: 35.18,
        height: 64.42,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.93,
        angle: 157.76,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.81,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 252.43,
        top: 213.78,
        width: 254.26,
        height: 573.32,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.11,
        scaleY: 0.12,
        angle: 157.62,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: -3.81,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 234.21,
        top: 156.85,
        width: 7.01,
        height: 6.31,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.93,
        angle: 157.76,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.81,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 172.11,
        top: 125.87,
        width: 17.87,
        height: 84.8,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 229.69, 77.22],
          ["L", 239.852, 157.636],
          ["L", 246.8599, 159.2128],
          ["L", 235.8219, 76.51879999999998],
          ["L", 228.9891, 74.41639999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 177.66,
        top: 125.72,
        width: 15.07,
        height: 87.07,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 235.64, 76.519],
          ["L", 238.7936, 74.2414],
          ["L", 250.70759999999999, 161.3154],
          ["L", 245.78959999999998, 159.70860000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 172.03,
        top: 124.17,
        width: 9.86,
        height: 4.16,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 228.91, 74.551],
          ["L", 235.6702, 76.5596],
          ["L", 238.7694, 74.39840000000001],
          ["L", 233.2175, 72.39920000000001],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 172.11,
        top: 125.87,
        width: 17.87,
        height: 84.8,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 229.69, 77.22],
          ["L", 239.852, 157.636],
          ["L", 246.8599, 159.2128],
          ["L", 235.8219, 76.51879999999998],
          ["L", 228.9891, 74.41639999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 177.66,
        top: 125.72,
        width: 15.07,
        height: 87.07,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 235.64, 76.519],
          ["L", 238.7936, 74.2414],
          ["L", 250.70759999999999, 161.3154],
          ["L", 245.78959999999998, 159.70860000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 172.03,
        top: 124.17,
        width: 9.86,
        height: 4.16,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 228.91, 74.551],
          ["L", 235.6702, 76.5596],
          ["L", 238.7694, 74.39840000000001],
          ["L", 233.2175, 72.39920000000001],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 169.53,
        top: 132.62,
        width: 65.41,
        height: 509.41,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1803.8, 2277.5],
          ["L", 1849.389, 2251.732],
          ["L", 1869.2109999999998, 1768.092],
          ["L", 1807.7649999999999, 1825.574],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 174.28,
        top: 133.86,
        width: 43.61,
        height: 525.27,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1849.3, 2251.7],
          ["L", 1879.032, 2265.575],
          ["L", 1892.907, 1740.3049999999998],
          ["L", 1859.211, 1779.9479999999999],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 169.43,
        top: 130.65,
        width: 78.29,
        height: 44.6,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1802.8, 2275.4],
          ["L", 1850.3709999999999, 2251.614],
          ["L", 1881.0939999999998, 2265.489],
          ["L", 1860.2809999999997, 2289.275],
          ["L", 1831.5399999999997, 2296.2125],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 169.53,
        top: 132.62,
        width: 65.41,
        height: 509.41,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1803.8, 2277.5],
          ["L", 1849.389, 2251.732],
          ["L", 1869.2109999999998, 1768.092],
          ["L", 1807.7649999999999, 1825.574],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 174.28,
        top: 133.86,
        width: 43.61,
        height: 525.27,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1849.3, 2251.7],
          ["L", 1879.032, 2265.575],
          ["L", 1892.907, 1740.3049999999998],
          ["L", 1859.211, 1779.9479999999999],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 169.43,
        top: 130.65,
        width: 78.29,
        height: 44.6,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1802.8, 2275.4],
          ["L", 1850.3709999999999, 2251.614],
          ["L", 1881.0939999999998, 2265.489],
          ["L", 1860.2809999999997, 2289.275],
          ["L", 1831.5399999999997, 2296.2125],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 158.21,
        top: 142.62,
        width: 35.18,
        height: 64.42,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 163.54,
        top: 141.32,
        width: 254.26,
        height: 573.32,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 158.59,
        top: 141.52,
        width: 7.01,
        height: 6.31,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 184.47,
        top: 159.12,
        width: 20.32,
        height: 99.11,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.46,
        scaleY: 0.46,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 176.91, 152.7],
          ["L", 188.803, 157.1598],
          ["L", 197.2271, 251.8068],
          ["L", 180.3791, 245.8604],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 189.93,
        top: 159.8,
        width: 16.35,
        height: 98.61,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.46,
        scaleY: 0.46,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 188.8, 156.66],
          ["L", 195.7375, 154.1823],
          ["L", 205.1527, 250.8123],
          ["L", 197.22410000000002, 252.7944],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 184.49,
        top: 157.86,
        width: 19.1,
        height: 7.36,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.46,
        scaleY: 0.46,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 176.95, 152.73],
          ["L", 188.51299999999998, 157.4604],
          ["L", 196.04649999999998, 153.78119999999998],
          ["L", 186.06019999999998, 150.10199999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 184.47,
        top: 159.12,
        width: 20.32,
        height: 99.11,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.46,
        scaleY: 0.46,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 176.91, 152.7],
          ["L", 188.803, 157.1598],
          ["L", 197.2271, 251.8068],
          ["L", 180.3791, 245.8604],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 189.93,
        top: 159.8,
        width: 16.35,
        height: 98.61,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.46,
        scaleY: 0.46,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 188.8, 156.66],
          ["L", 195.7375, 154.1823],
          ["L", 205.1527, 250.8123],
          ["L", 197.22410000000002, 252.7944],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 184.49,
        top: 157.86,
        width: 19.1,
        height: 7.36,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.46,
        scaleY: 0.46,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 176.95, 152.73],
          ["L", 188.51299999999998, 157.4604],
          ["L", 196.04649999999998, 153.78119999999998],
          ["L", 186.06019999999998, 150.10199999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 158.21,
        top: 142.62,
        width: 35.18,
        height: 64.42,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 163.54,
        top: 141.32,
        width: 254.26,
        height: 573.32,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 158.59,
        top: 141.52,
        width: 7.01,
        height: 6.31,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 202.4,
        top: 141.68,
        width: 87.21,
        height: 947.47,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.06,
        scaleY: 0.06,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1724.5, 2029.7],
          ["L", 1728.4643, 1082.23],
          ["L", 1811.7143, 1098.087],
          ["L", 1791.8923000000002, 2009.877],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 206.16,
        top: 141.52,
        width: 71.36,
        height: 936.48,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.06,
        scaleY: 0.06,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1789.9, 2011.9],
          ["L", 1837.952, 2032.5430000000001],
          ["L", 1861.257, 1145.703],
          ["L", 1812.276, 1096.065],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 202.36,
        top: 140,
        width: 117.73,
        height: 53.26,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.06,
        scaleY: 0.06,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1724, 2032.3],
          ["L", 1791.276, 2009.875],
          ["L", 1841.7330000000002, 2032.3],
          ["L", 1796.882, 2063.1349999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 202.4,
        top: 141.68,
        width: 87.21,
        height: 947.47,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.06,
        scaleY: 0.06,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1724.5, 2029.7],
          ["L", 1728.4643, 1082.23],
          ["L", 1811.7143, 1098.087],
          ["L", 1791.8923000000002, 2009.877],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 206.16,
        top: 141.52,
        width: 71.36,
        height: 936.48,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.06,
        scaleY: 0.06,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1789.9, 2011.9],
          ["L", 1837.952, 2032.5430000000001],
          ["L", 1861.257, 1145.703],
          ["L", 1812.276, 1096.065],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 202.36,
        top: 140,
        width: 117.73,
        height: 53.26,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.06,
        scaleY: 0.06,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1724, 2032.3],
          ["L", 1791.276, 2009.875],
          ["L", 1841.7330000000002, 2032.3],
          ["L", 1796.882, 2063.1349999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 236.7,
        top: 205.91,
        width: 35.18,
        height: 64.42,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.93,
        angle: 163,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.78,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 233.82,
        top: 211.31,
        width: 254.26,
        height: 573.32,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.11,
        scaleY: 0.12,
        angle: 162.55,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: -4.84,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 220.35,
        top: 153.39,
        width: 7.01,
        height: 6.31,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.93,
        angle: 163,
        flipX: false,
        flipY: true,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.78,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 198.98,
        top: 158.73,
        width: 6.18,
        height: 93.31,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 251.48, 75.145],
          ["L", 255.69209999999998, 73.4106],
          ["L", 254.70102999999997, 165.5806],
          ["L", 249.51032999999998, 166.7168],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 194.6,
        top: 159.37,
        width: 7.17,
        height: 92.4,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 244.93, 74.416],
          ["L", 251.4673, 75.01416],
          ["L", 250.2483, 166.81816],
          ["L", 244.3019, 160.12846000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 195.18,
        top: 158.21,
        width: 10.91,
        height: 2.19,
        fill: "rgb(0,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 0.5,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 244.93, 74.46],
          ["L", 251.6313, 75.16078999999999],
          ["L", 255.83610000000002, 73.45258999999999],
          ["L", 250.0107, 72.97078999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 198.98,
        top: 158.73,
        width: 6.18,
        height: 93.31,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 251.48, 75.145],
          ["L", 255.69209999999998, 73.4106],
          ["L", 254.70102999999997, 165.5806],
          ["L", 249.51032999999998, 166.7168],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 194.6,
        top: 159.37,
        width: 7.17,
        height: 92.4,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 244.93, 74.416],
          ["L", 251.4673, 75.01416],
          ["L", 250.2483, 166.81816],
          ["L", 244.3019, 160.12846000000002],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 195.18,
        top: 158.21,
        width: 10.91,
        height: 2.19,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.84,
        angle: 2.58,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 244.93, 74.46],
          ["L", 251.6313, 75.16078999999999],
          ["L", 255.83610000000002, 73.45258999999999],
          ["L", 250.0107, 72.97078999999998],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 236.7,
        top: 205.91,
        width: 35.18,
        height: 64.42,
        fill: "rgb(247,211,51)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.93,
        angle: 163,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.78,
        skewY: 0,
        path: [
          ["M", 213.58, 131.88],
          ["L", 198.21800000000002, 92.733],
          ["L", 204.66000000000003, 87.2821],
          ["L", 233.401, 151.7021],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 233.82,
        top: 211.31,
        width: 254.26,
        height: 573.32,
        fill: "rgb(239,179,25)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.11,
        scaleY: 0.12,
        angle: 162.55,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: -4.84,
        skewY: 0,
        path: [
          ["M", 1633.3, 2247.8],
          ["L", 1649.157, 2267.621],
          ["L", 1887.557, 1694.301],
          ["L", 1807.732, 1730.461],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 220.35,
        top: 153.39,
        width: 7.01,
        height: 6.31,
        fill: "rgb(252,236,61)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.84,
        scaleY: 0.93,
        angle: 163,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 3.78,
        skewY: 0,
        path: [
          ["M", 198.68, 92.287],
          ["L", 200.43200000000002, 88.0822],
          ["L", 205.68800000000002, 85.9798],
          ["L", 204.63680000000002, 90.535],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 157.21,
        top: 158.29,
        width: 2187.63,
        height: 1006.83,
        fill: {
          type: "linear",
          coords: { x1: 180.59, y1: 135.47, x2: 317.5, y2: 135.47 },
          colorStops: [
            { offset: 1, color: "rgb(204,204,204)", opacity: 0.99043 },
            { offset: 0.5, color: "rgb(255,255,255)", opacity: 0.98431 },
            { offset: 0, color: "rgb(204,204,204)", opacity: 1 },
          ],
          offsetX: -998.1700000000001,
          offsetY: -1651.2939359139118,
          gradientUnits: "pixels",
          gradientTransform: [23.05, 0, 0, -23.05, -3856, 5277.2],
        },
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.04,
        scaleY: 0.04,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 3185.8, 2658.1],
          ["C", 3185.8, 2658.1, 3043.73, 2638.093, 3028.05, 2592.5519999999997],
          [
            "C",
            2962.6760000000004,
            2402.6319999999996,
            2877.71,
            2200.272,
            2731.28,
            2058.8019999999997,
          ],
          [
            "C",
            2547.8,
            1881.5219999999997,
            2322.0800000000004,
            1744.7719999999997,
            2049.86,
            1710.1719999999996,
          ],
          [
            "C",
            1781.9700000000003,
            1676.1189999999997,
            1494.9700000000003,
            1860.8719999999996,
            1344.67,
            2109.2219999999998,
          ],
          [
            "C",
            1270.52,
            2231.752,
            1275.6390000000001,
            2382.692,
            1209.97,
            2508.272,
          ],
          [
            "C",
            1185.97,
            2554.172,
            998.1700000000001,
            2609.872,
            998.1700000000001,
            2609.872,
          ],
          ["L", 1060.837, 2175.522],
          ["L", 1021.22, 2471.572],
          ["C", 1021.22, 2471.572, 1134.8, 2444.7110000000002, 1158.8, 2398.82],
          [
            "C",
            1224.4669999999999,
            2273.2400000000002,
            1241.936,
            2087.77,
            1344.6399999999999,
            1970.9500000000003,
          ],
          [
            "C",
            1536.32,
            1752.9400000000003,
            1743.58,
            1661.1400000000003,
            1980.6799999999998,
            1651.8500000000004,
          ],
          [
            "C",
            2248.39,
            1641.3670000000004,
            2521.7,
            1780.4600000000005,
            2725.4799999999996,
            1954.3800000000003,
          ],
          [
            "C",
            2873.5599999999995,
            2080.76,
            2962.6399999999994,
            2264.3500000000004,
            3028.0099999999993,
            2454.28,
          ],
          [
            "C",
            3042.2909999999993,
            2495.768,
            3156.669999999999,
            2515.097,
            3177.8399999999992,
            2518.3880000000004,
          ],
          ["L", 3185.763499999999, 2658.1280000000006],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 150.75,
        top: 155.5,
        width: 251.29,
        height: 339.81,
        fill: {
          type: "linear",
          coords: { x1: 202.17, y1: 125.07, x2: 212.59, y2: 118.13 },
          colorStops: [
            { offset: 1, color: "rgb(153,153,153)", opacity: 1 },
            { offset: 0, color: "rgb(204,204,204)", opacity: 1 },
          ],
          offsetX: -781.39,
          offsetY: -2408.594,
          gradientUnits: "pixels",
          gradientTransform: [23.05, 0, 0, -23.05, -3856, 5277.2],
        },
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.04,
        scaleY: 0.04,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 781.39, 2748.4],
          ["L", 827.079, 2494.26],
          ["L", 1032.6789999999999, 2408.594],
          ["L", 998.4129999999999, 2608.484],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 151.35,
        top: 158.77,
        width: 512.84,
        height: 2337.41,
        fill: {
          type: "linear",
          coords: { x1: 195.52, y1: 198.68, x2: 216.19, y2: 173.8 },
          colorStops: [
            { offset: 1, color: "rgb(170,0,0)", opacity: 1 },
            { offset: 0, color: "rgb(128,0,0)", opacity: 1 },
          ],
          offsetX: -803.06,
          offsetY: -280.6999999999998,
          gradientUnits: "pixels",
          gradientTransform: [23.05, 0, 0, -23.05, -3832.9, 5254.1],
        },
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.04,
        scaleY: 0.04,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1045.4, 2448.5],
          ["L", 1315.9, 280.6999999999998],
          ["L", 1166.5, 397.0099999999998],
          ["L", 803.06, 2618.1099999999997],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 237.62,
        top: 155.59,
        width: 205.95,
        height: 232.21,
        fill: "rgb(167,167,167)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.04,
        scaleY: 0.04,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 3182.8, 2661.3],
          ["L", 3176.7424, 2515.92],
          ["L", 3366.5424000000003, 2624.96],
          ["L", 3382.6964000000003, 2748.13],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 158.07,
        top: 162.41,
        width: 2164.54,
        height: 2229.19,
        fill: "rgb(196,28,35)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.04,
        scaleY: 0.04,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 1312.2, 290.83],
          [
            "C",
            1312.2,
            290.83,
            1831.33,
            412.16999999999996,
            2095.6400000000003,
            413.15999999999997,
          ],
          [
            "C",
            2373.26,
            414.1996,
            2919.4600000000005,
            290.83,
            2919.4600000000005,
            290.83,
          ],
          ["L", 3064.8400000000006, 468.52],
          ["L", 3185.9900000000007, 2520.02],
          [
            "C",
            3185.9900000000007,
            2520.02,
            3043.4800000000005,
            2499.968,
            3027.8000000000006,
            2454.427,
          ],
          [
            "C",
            2962.426000000001,
            2264.507,
            2873.7000000000007,
            2081.027,
            2725.620000000001,
            1954.6570000000002,
          ],
          [
            "C",
            2521.830000000001,
            1780.737,
            2248.7200000000007,
            1641.5870000000002,
            1981.0100000000007,
            1652.0670000000002,
          ],
          [
            "C",
            1743.9100000000008,
            1661.3512000000003,
            1536.1900000000007,
            1752.7970000000003,
            1344.5100000000007,
            1970.8070000000002,
          ],
          [
            "C",
            1241.8000000000006,
            2087.617,
            1224.4100000000008,
            2273.2870000000003,
            1158.7500000000007,
            2398.867,
          ],
          [
            "C",
            1134.7540000000006,
            2444.7580000000003,
            1021.4500000000007,
            2471.5570000000002,
            1021.4500000000007,
            2471.5570000000002,
          ],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 233.53,
        top: 158.65,
        width: 298.8,
        height: 2156.5,
        fill: "rgb(170,0,0)",
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.04,
        scaleY: 0.04,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 1,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 3065.7, 468.52],
          ["L", 3364.5, 2625.02],
          ["L", 3178.8, 2518.02],
          ["z"],
        ],
      },
      {
        type: "path",
        version: "4.6.0",
        originX: "left",
        originY: "top",
        left: 161.54,
        top: 165.98,
        width: 716.63,
        height: 737.97,
        fill: {
          type: "linear",
          coords: { x1: 1711.1, y1: 1605.2, x2: 2427.8, y2: 1605.2 },
          colorStops: [
            { offset: 1, color: "rgb(128,0,0)", opacity: 0.99522 },
            { offset: 0.5, color: "rgb(128,0,0)", opacity: 0 },
            { offset: 0, color: "rgb(128,0,0)", opacity: 1 },
          ],
          offsetX: -1711.1399999999996,
          offsetY: -1236.2,
          gradientUnits: "pixels",
          gradientTransform: [1, 0, 0, 1, 0, 0],
        },
        stroke: "",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 0.1,
        scaleY: 0.1,
        angle: 0,
        flipX: false,
        flipY: true,
        opacity: 0.48,
        shadow: null,
        visible: true,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "fill",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        path: [
          ["M", 2345.7, 1236.2],
          [
            "C",
            2321.187,
            1241.7037,
            2159.0299999999997,
            1277.394,
            2065.6099999999997,
            1277.044,
          ],
          [
            "C",
            1982.6529999999998,
            1276.7337,
            1845.0599999999997,
            1246.6080000000002,
            1806.6399999999996,
            1237.8570000000002,
          ],
          ["L", 1711.1399999999996, 1953.9470000000001],
          [
            "C",
            1719.5378999999996,
            1949.9520000000002,
            1726.8569999999997,
            1944.2811000000002,
            1727.0149999999996,
            1943.9783000000002,
          ],
          [
            "C",
            1747.4679999999996,
            1904.8633000000002,
            1753.1909999999996,
            1838.3183000000001,
            1793.5459999999996,
            1792.4183000000003,
          ],
          [
            "C",
            1862.2759999999996,
            1714.2473000000002,
            1939.4559999999997,
            1679.9983000000002,
            2025.2959999999996,
            1676.6383000000003,
          ],
          [
            "C",
            2123.8659999999995,
            1672.7785000000003,
            2221.3859999999995,
            1723.1803000000002,
            2294.1759999999995,
            1785.2983000000004,
          ],
          [
            "C",
            2348.8119999999994,
            1831.9263000000003,
            2380.4649999999997,
            1898.2883000000004,
            2403.5559999999996,
            1965.3583000000003,
          ],
          [
            "C",
            2402.7225999999996,
            1962.9368000000004,
            2403.3385999999996,
            1965.0623000000003,
            2407.1809999999996,
            1967.1083000000003,
          ],
          [
            "C",
            2411.0235,
            1969.1542000000004,
            2416.9290999999994,
            1971.3301000000004,
            2422.8369999999995,
            1973.0145000000002,
          ],
          [
            "C",
            2424.6459999999997,
            1973.5302000000001,
            2426.0183999999995,
            1973.7349000000002,
            2427.7744999999995,
            1974.1707000000001,
          ],
          ["L", 2387.1804999999995, 1286.8907000000002],
          ["L", 2345.7114999999994, 1236.2027],
          ["z"],
        ],
      },
    ],
  };
  const str = JSON.stringify(string);

  // str = JSON.stringify(str);
  const strrr = ` <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg id="svg-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="400" height="400" viewBox="0 0 400 400" xml:space="preserve">
  <desc>Created with Fabric.js 3.6.3</desc>
  <defs>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="rgba(255, 255, 255, 1)"></rect>
  <g transform="matrix(1 0 0 1 226.5 269.24)" style=""  >
      <text xml:space="preserve" font-family="'Open Sans', sans-serif" font-size="19" font-style="normal" font-weight="bold" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-127.5" y="5.97" style="font-size: 19px; ">Your Company Name</tspan></text>
  </g>
  <g transform="matrix(1 0 0 1 251.5 300.67)" style=""  >
      <text xml:space="preserve" font-family="'Open Sans', sans-serif" font-size="18" font-style="normal" font-weight="normal" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-100.5" y="5.65" >solgan here</tspan></text>
  </g>
  <g transform="matrix(0.29 0 0 0.29 195.13 182.88)"  >
  <g style=""   >
      <g transform="matrix(0.91 0.01 -0.02 1.12 5.54 200.44)" id="path25851"  >
  <radialGradient id="SVGID_radialGradient25859_10" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 0.12 0 471.31)"  cx="281.96" cy="536.67" r="211.59" fx="281.96" fy="536.67">
  <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity: 1"/>
  <stop offset="4.4496%" style="stop-color:rgb(0,0,0);stop-opacity: 0.95294"/>
  <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity: 0"/>
  </radialGradient>
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: url(#SVGID_radialGradient25859_10); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-281.96, -536.67)" d="m 493.55 536.67 c 0 14.231 -94.734 25.768 -211.59 25.768 s -211.59 -11.537 -211.59 -25.768 s 94.734 -25.768 211.59 -25.768 s 211.59 11.537 211.59 25.768 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.13 0 0 -0.13 10.08 -51.08)" id="path25318"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(137,0,0); fill-rule: nonzero; opacity: 1;"  transform=" translate(-2080.61, -2408.98)" d="m 780.01 2761.1 l 428.06 -1292.3 h 1744.6 l 428.55 1291.4 s -373.08 401.39 -622.39 485.5 c -433.7 146.3 -940.77 134.33 -1373 -16.154 c -241.06 -83.922 -605.75 -468.45 -605.75 -468.45 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.13 0 0 -0.13 10.08 -48.21)" id="path25316"  >
  <linearGradient id="SVGID_linearGradient25326_11" gradientUnits="userSpaceOnUse" gradientTransform="matrix(23.05 0 0 -23.05 -3856 5277.2)"  x1="245.23" y1="104.37" x2="282.76" y2="184.4">
  <stop offset="0%" style="stop-color:rgb(204,204,204);stop-opacity: 1"/>
  <stop offset="100%" style="stop-color:rgb(128,128,128);stop-opacity: 1"/>
  </linearGradient>
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: url(#SVGID_linearGradient25326_11); fill-rule: nonzero; opacity: 1;"  transform=" translate(-2080.61, -2385.98)" d="m 780.01 2738.1 l 428.06 -1292.3 h 1744.6 l 428.55 1291.4 s -373.08 401.39 -622.39 485.5 c -433.7 146.3 -940.77 134.33 -1373 -16.153 c -241.06 -83.922 -605.75 -468.45 -605.75 -468.45 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 24.49 -82.13)" id="path25699"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-2100.42, -2040.7)" d="m 2084.3 2393.9 l -15.417 -710.61 l 47.654 -7.0079 l 15.417 728.83 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 10.56 -79.11)" id="path25701"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-257.72, -114.71)" d="m 260.87 69.511 l -4.2048 -1.752 l -2.1024 93.906 l 4.38 -3.1536 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 21.4 -212.56)" id="path25703"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-261.48, -68.39)" d="m 256.53 67.847 l 4.4238 1.7958 l 5.475 -1.4454 l -3.5478 -1.0512 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 24.49 -82.13)" id="path25686"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-2100.42, -2040.7)" d="m 2084.3 2393.9 l -15.417 -710.61 l 47.654 -7.0079 l 15.417 728.83 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 10.56 -79.11)" id="path25688"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-257.72, -114.71)" d="m 260.87 69.511 l -4.2048 -1.752 l -2.1024 93.906 l 4.38 -3.1536 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 21.4 -212.56)" id="path25690"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-261.48, -68.39)" d="m 256.53 67.847 l 4.4238 1.7958 l 5.475 -1.4454 l -3.5478 -1.0512 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 -4.22 -63.34)" id="path25660"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-252.6, -120.06)" d="m 251.48 75.145 l 4.2121 -1.7344 l -0.99107 92.17 l -5.1907 1.1362 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 -17.87 -62.36)" id="path25662"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-247.88, -120.62)" d="m 244.93 74.416 l 6.5373 0.59816 l -1.219 91.804 l -5.9464 -6.6897 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 -4.63 -196.03)" id="path25664"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-250.38, -74.07)" d="m 244.93 74.46 l 6.7013 0.70079 l 4.2048 -1.7082 l -5.8254 -0.4818 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 -4.22 -63.34)" id="path25554"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-252.6, -120.06)" d="m 251.48 75.145 l 4.2121 -1.7344 l -0.99107 92.17 l -5.1907 1.1362 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 -17.87 -62.36)" id="path25552"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-247.88, -120.62)" d="m 244.93 74.416 l 6.5373 0.59816 l -1.219 91.804 l -5.9464 -6.6897 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 -4.63 -196.03)" id="path25556"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-250.38, -74.07)" d="m 244.93 74.46 l 6.7013 0.70079 l 4.2048 -1.7082 l -5.8254 -0.4818 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.87 0.28 -0.28 2.87 -36.96 -66.49)" id="path25652"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-237.92, -116.81)" d="m 229.69 77.22 l 10.162 80.416 l 7.0079 1.5768 l -11.038 -82.694 l -6.8328 -2.1024 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.87 0.28 -0.28 2.87 -22.18 -62.23)" id="path25654"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-243.17, -117.78)" d="m 235.64 76.519 l 3.1536 -2.2776 l 11.914 87.074 l -4.918 -1.6068 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.87 0.28 -0.28 2.87 -36.66 -189.03)" id="path25656"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-233.84, -74.48)" d="m 228.91 74.551 l 6.7602 2.0086 l 3.0992 -2.1612 l -5.5519 -1.9992 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.87 0.28 -0.28 2.87 -36.96 -66.49)" id="path25514"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-237.92, -116.81)" d="m 229.69 77.22 l 10.162 80.416 l 7.0079 1.5768 l -11.038 -82.694 l -6.8328 -2.1024 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.87 0.28 -0.28 2.87 -22.18 -62.23)" id="path25516"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-243.17, -117.78)" d="m 235.64 76.519 l 3.1536 -2.2776 l 11.914 87.074 l -4.918 -1.6068 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.87 0.28 -0.28 2.87 -36.66 -189.03)" id="path25518"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-233.84, -74.48)" d="m 228.91 74.551 l 6.7602 2.0086 l 3.0992 -2.1612 l -5.5519 -1.9992 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.75 0.87 -0.87 2.75 -98.61 -91.19)" id="path25636"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.34 0.11 0.11 -0.34 -88.36 -83.01)" id="path25638"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.75 0.87 -0.87 2.75 -109.43 -186.33)" id="path25640"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-202.3, -89.13)" d="m 198.23 92.945 l 2.1939 -4.8635 l 5.9528 -2.7765 l -1.7221 3.6625 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.75 0.87 -0.87 2.75 -98.61 -91.19)" id="path25369"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.34 0.11 0.11 -0.34 -88.36 -83.01)" id="path25371"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.75 0.87 -0.87 2.75 -109.43 -186.33)" id="path25373"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-202.3, -89.13)" d="m 198.23 92.945 l 2.1939 -4.8635 l 5.9528 -2.7765 l -1.7221 3.6625 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -110.19 -65.33)" id="path25628"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -97.96 -60.62)" id="path25630"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -149.45 -152.81)" id="path25632"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -110.19 -65.33)" id="path25332"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -97.96 -60.62)" id="path25334"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -149.45 -152.81)" id="path25336"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 -0.08 0.08 2.88 53.76 -86.17)" id="path25616"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-272.7, -114.19)" d="m 266.83 74.241 l 6.6576 79.891 l 5.0808 -0.876 l -6.6576 -77.263 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 -0.08 0.08 2.88 67.34 -87.33)" id="path25618"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-277.42, -113.92)" d="m 271.73 76.168 l 4.9056 -2.1024 l 6.4824 79.19 l -4.7304 0.5256 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 -0.08 0.08 2.88 47.91 -199.63)" id="path25620"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-271.82, -74.77)" d="m 266.83 74.416 l 5.256 1.752 l 4.7304 -1.9272 l -5.6064 -0.87599 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 -0.08 0.08 2.88 53.76 -86.17)" id="path25563"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-272.7, -114.19)" d="m 266.83 74.241 l 6.6576 79.891 l 5.0808 -0.876 l -6.6576 -77.263 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 -0.08 0.08 2.88 67.34 -87.33)" id="path25565"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-277.42, -113.92)" d="m 271.73 76.168 l 4.9056 -2.1024 l 6.4824 79.19 l -4.7304 0.5256 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 -0.08 0.08 2.88 47.91 -199.63)" id="path25567"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-271.82, -74.77)" d="m 266.83 74.416 l 5.256 1.752 l 4.7304 -1.9272 l -5.6064 -0.87599 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 79.73 -78.6)" id="path25576"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-281.72, -114.89)" d="m 284 78.446 l -6.8327 1.5768 l 1.9272 71.306 l 7.1831 -4.9056 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 64.06 -74.81)" id="path25578"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-276.28, -116.2)" d="m 277.16 79.848 l -3.8544 -1.5768 l 2.4528 75.861 l 3.504 -1.9272 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 71 -184.1)" id="path25580"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-278.69, -78.27)" d="m 273.13 78.534 l 6.3072 -2.0148 l 4.818 2.19 l -6.9203 1.314 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 79.73 -78.6)" id="path25522"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-281.72, -114.89)" d="m 284 78.446 l -6.8327 1.5768 l 1.9272 71.306 l 7.1831 -4.9056 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 64.06 -74.81)" id="path25524"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-276.28, -116.2)" d="m 277.16 79.848 l -3.8544 -1.5768 l 2.4528 75.861 l 3.504 -1.9272 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 71 -184.1)" id="path25526"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-278.69, -78.27)" d="m 273.13 78.534 l 6.3072 -2.0148 l 4.818 2.19 l -6.9203 1.314 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 102.18 -78.05)" id="path25592"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-237.92, -116.81)" d="m 229.69 77.22 l 10.162 80.416 l 7.0079 1.5768 l -11.038 -82.694 l -6.8328 -2.1024 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 87.06 -75.27)" id="path25594"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-243.17, -117.78)" d="m 235.64 76.519 l 3.1536 -2.2776 l 11.914 87.074 l -4.918 -1.6068 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 113.95 -200.03)" id="path25596"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-233.84, -74.48)" d="m 228.91 74.551 l 6.7602 2.0086 l 3.0992 -2.1612 l -5.5519 -1.9992 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 102.18 -78.05)" id="path25506"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-237.92, -116.81)" d="m 229.69 77.22 l 10.162 80.416 l 7.0079 1.5768 l -11.038 -82.694 l -6.8328 -2.1024 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 87.06 -75.27)" id="path25508"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-243.17, -117.78)" d="m 235.64 76.519 l 3.1536 -2.2776 l 11.914 87.074 l -4.918 -1.6068 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 113.95 -200.03)" id="path25510"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-233.84, -74.48)" d="m 228.91 74.551 l 6.7602 2.0086 l 3.0992 -2.1612 l -5.5519 -1.9992 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 -0.03 -0.03 -0.36 101.29 -81.73)" id="path25494"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1836.51, -2022.8)" d="m 1803.8 2277.5 l 45.589 -25.768 l 19.822 -483.64 l -61.446 57.482 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 -0.03 -0.03 -0.36 114.3 -75.63)" id="path25496"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1871.1, -2002.94)" d="m 1849.3 2251.7 l 29.732 13.875 l 13.875 -525.27 l -33.696 39.643 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 -0.03 -0.03 -0.36 95.78 -172.02)" id="path25498"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1841.95, -2273.91)" d="m 1802.8 2275.4 l 47.571 -23.786 l 30.723 13.875 l -20.813 23.786 l -28.741 6.9375 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 -0.03 -0.03 -0.36 101.29 -81.73)" id="path25423"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1836.51, -2022.8)" d="m 1803.8 2277.5 l 45.589 -25.768 l 19.822 -483.64 l -61.446 57.482 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 -0.03 -0.03 -0.36 114.3 -75.63)" id="path25425"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1871.1, -2002.94)" d="m 1849.3 2251.7 l 29.732 13.875 l 13.875 -525.27 l -33.696 39.643 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 -0.03 -0.03 -0.36 95.78 -172.02)" id="path25427"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1841.95, -2273.91)" d="m 1802.8 2275.4 l 47.571 -23.786 l 30.723 13.875 l -20.813 23.786 l -28.741 6.9375 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.77 0.91 0.81 3.09 122.65 -71.85)" id="path25482"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-0.35 0.11 -0.1 -0.39 112.24 -62.94)" id="path25484"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.77 0.91 0.81 3.09 135.76 -178.11)" id="path25486"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.77 0.91 0.81 3.09 122.65 -71.85)" id="path25353"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-0.35 0.11 -0.1 -0.39 112.24 -62.94)" id="path25355"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.77 0.91 0.81 3.09 135.76 -178.11)" id="path25357"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 139.11 -66.05)" id="path25604"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-0.36 0 0 -0.36 126.88 -61.33)" id="path25606"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 178.37 -153.52)" id="path25608"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 139.11 -66.05)" id="path25345"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-0.36 0 0 -0.36 126.88 -61.33)" id="path25347"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.88 0 0 2.88 178.37 -153.52)" id="path25349"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.69 1.1 1.03 3.03 113.6 11.02)" id="path25470"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-0.34 0.14 -0.13 -0.38 103.87 20.66)" id="path25472"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.69 1.1 1.03 3.03 118.91 -95.92)" id="path25474"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.69 1.1 1.03 3.03 113.6 11.02)" id="path25377"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-0.34 0.14 -0.13 -0.38 103.87 20.66)" id="path25379"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.69 1.1 1.03 3.03 118.91 -95.92)" id="path25381"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -52.23 -73.05)" id="path25644"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-237.92, -116.81)" d="m 229.69 77.22 l 10.162 80.416 l 7.0079 1.5768 l -11.038 -82.694 l -6.8328 -2.1024 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -37.11 -70.27)" id="path25646"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-243.17, -117.78)" d="m 235.64 76.519 l 3.1536 -2.2776 l 11.914 87.074 l -4.918 -1.6068 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -64 -195.03)" id="path25648"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-233.84, -74.48)" d="m 228.91 74.551 l 6.7602 2.0086 l 3.0992 -2.1612 l -5.5519 -1.9992 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -52.23 -73.05)" id="path25429"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-237.92, -116.81)" d="m 229.69 77.22 l 10.162 80.416 l 7.0079 1.5768 l -11.038 -82.694 l -6.8328 -2.1024 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -37.11 -70.27)" id="path25431"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-243.17, -117.78)" d="m 235.64 76.519 l 3.1536 -2.2776 l 11.914 87.074 l -4.918 -1.6068 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -64 -195.03)" id="path25433"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-233.84, -74.48)" d="m 228.91 74.551 l 6.7602 2.0086 l 3.0992 -2.1612 l -5.5519 -1.9992 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -76.32 -81.45)" id="path25442"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1836.51, -2022.8)" d="m 1803.8 2277.5 l 45.589 -25.768 l 19.822 -483.64 l -61.446 57.482 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -63.86 -74.29)" id="path25444"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1871.1, -2002.94)" d="m 1849.3 2251.7 l 29.732 13.875 l 13.875 -525.27 l -33.696 39.643 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -74.36 -171.89)" id="path25446"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1841.95, -2273.91)" d="m 1802.8 2275.4 l 47.571 -23.786 l 30.723 13.875 l -20.813 23.786 l -28.741 6.9375 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -76.32 -81.45)" id="path25391"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1836.51, -2022.8)" d="m 1803.8 2277.5 l 45.589 -25.768 l 19.822 -483.64 l -61.446 57.482 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -63.86 -74.29)" id="path25393"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1871.1, -2002.94)" d="m 1849.3 2251.7 l 29.732 13.875 l 13.875 -525.27 l -33.696 39.643 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -74.36 -171.89)" id="path25395"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1841.95, -2273.91)" d="m 1802.8 2275.4 l 47.571 -23.786 l 30.723 13.875 l -20.813 23.786 l -28.741 6.9375 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -75.21 -44.63)" id="path25458"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -62.98 -39.92)" id="path25460"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -114.47 -132.11)" id="path25462"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(1.58 0 0 1.58 -19.91 -2.84)" id="path25789"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-187.07, -202.25)" d="m 176.91 152.7 l 11.893 4.4598 l 8.4241 94.647 l -16.848 -5.9464 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(1.58 0 0 1.58 -4.21 -0.88)" id="path25791"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-196.98, -203.49)" d="m 188.8 156.66 l 6.9375 -2.4777 l 9.4152 96.63 l -7.9286 1.9821 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(1.58 0 0 1.58 -20.82 -79.67)" id="path25793"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-186.5, -153.78)" d="m 176.95 152.73 l 11.563 4.7304 l 7.5335 -3.6792 l -9.9863 -3.6792 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(1.58 0 0 1.58 -19.91 -2.84)" id="path25776"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-187.07, -202.25)" d="m 176.91 152.7 l 11.893 4.4598 l 8.4241 94.647 l -16.848 -5.9464 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(1.58 0 0 1.58 -4.21 -0.88)" id="path25778"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-196.98, -203.49)" d="m 188.8 156.66 l 6.9375 -2.4777 l 9.4152 96.63 l -7.9286 1.9821 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(1.58 0 0 1.58 -20.82 -79.67)" id="path25780"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-186.5, -153.78)" d="m 176.95 152.73 l 11.563 4.7304 l 7.5335 -3.6792 l -9.9863 -3.6792 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -75.21 -44.63)" id="path25385"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 -62.98 -39.92)" id="path25387"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0 0 2.88 -114.47 -132.11)" id="path25389"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.2 0 0 -0.2 33.89 -47.22)" id="path25742"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1768.11, -1555.97)" d="m 1724.5 2029.7 l 3.9643 -947.47 l 83.25 15.857 l -19.822 911.79 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.2 0 0 -0.2 45.28 -48.87)" id="path25744"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1825.58, -1564.3)" d="m 1789.9 2011.9 l 48.052 20.643 l 23.305 -886.84 l -48.981 -49.638 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.2 0 0 -0.2 36.82 -142.43)" id="path25746"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1782.87, -2036.5)" d="m 1724 2032.3 l 67.276 -22.425 l 50.457 22.425 l -44.851 30.835 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.2 0 0 -0.2 33.89 -47.22)" id="path25709"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1768.11, -1555.97)" d="m 1724.5 2029.7 l 3.9643 -947.47 l 83.25 15.857 l -19.822 911.79 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.2 0 0 -0.2 45.28 -48.87)" id="path25711"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1825.58, -1564.3)" d="m 1789.9 2011.9 l 48.052 20.643 l 23.305 -886.84 l -48.981 -49.638 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.2 0 0 -0.2 36.82 -142.43)" id="path25713"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1782.87, -2036.5)" d="m 1724 2032.3 l 67.276 -22.425 l 50.457 22.425 l -44.851 30.835 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.78 0.85 0.75 3.11 56.48 -3.26)" id="path25762"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-0.35 0.11 -0.09 -0.39 45.89 5.43)" id="path25764"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.78 0.85 0.75 3.11 71.77 -109.24)" id="path25766"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 17.5 52.99)" id="path25837"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-252.6, -120.06)" d="m 251.48 75.145 l 4.2121 -1.7344 l -0.99107 92.17 l -5.1907 1.1362 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 3.85 53.97)" id="path25839"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-247.88, -120.62)" d="m 244.93 74.416 l 6.5373 0.59816 l -1.219 91.804 l -5.9464 -6.6897 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 17.09 -79.69)" id="path25841"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.5;"  transform=" translate(-250.38, -74.07)" d="m 244.93 74.46 l 6.7013 0.70079 l 4.2048 -1.7082 l -5.8254 -0.4818 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 17.5 52.99)" id="path25829"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-252.6, -120.06)" d="m 251.48 75.145 l 4.2121 -1.7344 l -0.99107 92.17 l -5.1907 1.1362 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 3.85 53.97)" id="path25831"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-247.88, -120.62)" d="m 244.93 74.416 l 6.5373 0.59816 l -1.219 91.804 l -5.9464 -6.6897 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(2.88 0.13 -0.13 2.88 17.09 -79.69)" id="path25833"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-250.38, -74.07)" d="m 244.93 74.46 l 6.7013 0.70079 l 4.2048 -1.7082 l -5.8254 -0.4818 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.78 0.85 0.75 3.11 56.48 -3.26)" id="path25754"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(247,211,51); fill-rule: nonzero; opacity: 1;"  transform=" translate(-215.81, -119.49)" d="m 213.58 131.88 l -15.362 -39.147 l 6.442 -5.4509 l 28.741 64.42 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-0.35 0.11 -0.09 -0.39 45.89 5.43)" id="path25756"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(239,179,25); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1760.43, -1980.96)" d="m 1633.3 2247.8 l 15.857 19.821 l 238.4 -573.32 l -79.825 36.16 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(-2.78 0.85 0.75 3.11 71.77 -109.24)" id="path25758"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,236,61); fill-rule: nonzero; opacity: 1;"  transform=" translate(-202.18, -89.13)" d="m 198.68 92.287 l 1.752 -4.2048 l 5.256 -2.1024 l -1.0512 4.5552 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.13 0 0 -0.13 11.5 -19.3)" id="path24481"  >
  <linearGradient id="SVGID_linearGradient25294_12" gradientUnits="userSpaceOnUse" gradientTransform="matrix(23.05 0 0 -23.05 -3856 5277.2)"  x1="180.59" y1="135.47" x2="317.5" y2="135.47">
  <stop offset="0%" style="stop-color:rgb(204,204,204);stop-opacity: 1"/>
  <stop offset="50%" style="stop-color:rgb(255,255,255);stop-opacity: 0.98431"/>
  <stop offset="100%" style="stop-color:rgb(204,204,204);stop-opacity: 0.99043"/>
  </linearGradient>
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: url(#SVGID_linearGradient25294_12); fill-rule: nonzero; opacity: 1;"  transform=" translate(-2091.99, -2154.71)" d="m 3185.8 2658.1 s -142.07 -20.007 -157.75 -65.548 c -65.374 -189.92 -150.34 -392.28 -296.77 -533.75 c -183.48 -177.28 -409.2 -314.03 -681.42 -348.63 c -267.89 -34.053 -554.89 150.7 -705.19 399.05 c -74.15 122.53 -69.031 273.47 -134.7 399.05 c -24 45.9 -211.8 101.6 -211.8 101.6 l 62.667 -434.35 l -39.617 296.05 s 113.58 -26.861 137.58 -72.752 c 65.667 -125.58 83.136 -311.05 185.84 -427.87 c 191.68 -218.01 398.94 -309.81 636.04 -319.1 c 267.71 -10.483 541.02 128.61 744.8 302.53 c 148.08 126.38 237.16 309.97 302.53 499.9 c 14.281 41.488 128.66 60.817 149.83 64.108 l 7.9235 139.74 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.13 0 0 -0.13 -136.62 -72.27)" id="path24508"  >
  <linearGradient id="SVGID_linearGradient24516_13" gradientUnits="userSpaceOnUse" gradientTransform="matrix(23.05 0 0 -23.05 -3856 5277.2)"  x1="202.17" y1="125.07" x2="212.59" y2="118.13">
  <stop offset="0%" style="stop-color:rgb(204,204,204);stop-opacity: 1"/>
  <stop offset="100%" style="stop-color:rgb(153,153,153);stop-opacity: 1"/>
  </linearGradient>
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: url(#SVGID_linearGradient24516_13); fill-rule: nonzero; opacity: 1;"  transform=" translate(-907.03, -2578.5)" d="m 781.39 2748.4 l 45.689 -254.14 l 205.6 -85.666 l -34.266 199.89 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.13 0 0 -0.13 -117.56 68.86)" id="path24490"  >
  <linearGradient id="SVGID_linearGradient24506_14" gradientUnits="userSpaceOnUse" gradientTransform="matrix(23.05 0 0 -23.05 -3832.9 5254.1)"  x1="195.52" y1="198.68" x2="216.19" y2="173.8">
  <stop offset="0%" style="stop-color:rgb(128,0,0);stop-opacity: 1"/>
  <stop offset="100%" style="stop-color:rgb(170,0,0);stop-opacity: 1"/>
  </linearGradient>
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: url(#SVGID_linearGradient24506_14); fill-rule: nonzero; opacity: 1;"  transform=" translate(-1059.48, -1449.4)" d="m 1045.4 2448.5 l 270.5 -2167.8 l -149.4 116.31 l -363.44 2221.1 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.13 0 0 -0.13 159.96 -78.96)" id="path25314"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(167,167,167); fill-rule: nonzero; opacity: 1;"  transform=" translate(-3279.72, -2632.03)" d="m 3182.8 2661.3 l -6.0576 -145.38 l 189.8 109.04 l 16.154 123.17 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.13 0 0 -0.13 12.97 74.36)" id="path24479"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(196,28,35); fill-rule: nonzero; opacity: 1;"  transform=" translate(-2103.72, -1405.42)" d="m 1312.2 290.83 s 519.13 121.34 783.44 122.33 c 277.62 1.0396 823.82 -122.33 823.82 -122.33 l 145.38 177.69 l 121.15 2051.5 s -142.51 -20.052 -158.19 -65.593 c -65.374 -189.92 -154.1 -373.4 -302.18 -499.77 c -203.79 -173.92 -476.9 -313.07 -744.61 -302.59 c -237.1 9.2842 -444.82 100.73 -636.5 318.74 c -102.71 116.81 -120.1 302.48 -185.76 428.06 c -23.996 45.891 -137.3 72.69 -137.3 72.69 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.13 0 0 -0.13 151.89 56.69)" id="path25312"  >
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(170,0,0); fill-rule: nonzero; opacity: 1;"  transform=" translate(-3215.1, -1546.77)" d="m 3065.7 468.52 l 298.8 2156.5 l -185.7 -107 z" stroke-linecap="round" />
  </g>
      <g transform="matrix(0.36 0 0 -0.36 13.34 74.72)" id="path25300"  >
  <linearGradient id="SVGID_linearGradient9292_15" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 0 0)"  x1="1711.1" y1="1605.2" x2="2427.8" y2="1605.2">
  <stop offset="0%" style="stop-color:rgb(128,0,0);stop-opacity: 1"/>
  <stop offset="50%" style="stop-color:rgb(128,0,0);stop-opacity: 0"/>
  <stop offset="100%" style="stop-color:rgb(128,0,0);stop-opacity: 0.99522"/>
  </linearGradient>
  <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: url(#SVGID_linearGradient9292_15); fill-rule: nonzero; opacity: 0.48161;"  transform=" translate(-2069.46, -1605.19)" d="m 2345.7 1236.2 c -24.513 5.5037 -186.67 41.194 -280.09 40.844 c -82.957 -0.3103 -220.55 -30.436 -258.97 -39.187 l -95.5 716.09 c 8.3979 -3.995 15.717 -9.6659 15.875 -9.9687 c 20.453 -39.115 26.176 -105.66 66.531 -151.56 c 68.73 -78.171 145.91 -112.42 231.75 -115.78 c 98.57 -3.8598 196.09 46.542 268.88 108.66 c 54.636 46.628 86.289 112.99 109.38 180.06 c -0.8334 -2.4215 -0.2174 -0.296 3.625 1.75 c 3.8425 2.0459 9.7481 4.2218 15.656 5.9062 c 1.809 0.5157 3.1814 0.7204 4.9375 1.1562 l -40.594 -687.28 l -41.469 -50.688 z" stroke-linecap="round" />
  </g>
  </g>
  </g>
  </svg>`;
  // const str = `
  // <svg xmlns="http://www.w3.org/2000/svg"
  // xmlns:xhtml="http://www.w3.org/1999/xhtml"
  // xmlns:xlink="http://www.w3.org/1999/xlink"
  // id="logo-svg"
  //         viewBox="-5 -5 300 300"
  //         enable-background="new 0 0 600 600"
  //         preserveAspectRatio="xMinYMin"
  //         style="background-color:white"
  //       >

  // <path
  // id="path1"
  // style="fill:blue; stroke-linejoin:round; stroke-width:5; stroke:#5f5"
  //   d="M 74 53.64101615137753 L 14.000000000000027 88.28203230275507 L 14 19 L 74 53.64101615137753 Z"

  // />
  // <path
  // id="path2"
  // style="fill:red; stroke-linejoin:round; stroke-width:5; stroke:#333"
  //   d="M 84 68.64101615137753 L 24.00000000000003 103.28203230275507 L 24 34 L 84 68.64101615137753 Z"

  // />
  // <g style="transform: translate(40px, 10px)" >
  //   <path
  //   style="fill:transparent; stroke:#FFB830;"
  //     d="M3,19.333C3,17.258,9.159,1.416,21,5.667
  //                           c13,4.667,13.167,38.724,39.667,7.39"

  //   />
  //   <ellipse
  //   style="fill:yellow; stroke:#purple; stroke-width:4"
  //     cx="40"
  //     cy="80"
  //     rx="40"
  //     ry="10"

  //   />

  // </g>

  //  <text data-target="text"
  //  id="text" x="0" y="20"  font-size="18" text-decoration="underline" font-style="italic" font-weight="bold" font-family="Arial" fill="#000080">
  //  Company Name
  //  </text>
  // </svg>`;

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
    canvas.renderAll();
    setObjects(canvas.getObjects());
    setOriginalCanvas(canvas.historyUndo.length);
    console.log("Canvas obj > ", canvas);

    setCanvas(canvas);
  };
  //initialize SVG string into Canvas
  useEffect(() => {
    if (storedLogo) {
      console.log("storedLogo in Body", storedLogo);
      initialize(storedLogo);
    } else {
      initialize(str);
    }
    // let obj = canvas.getObjects();
    // var svgg = fabric.util.groupSVGElements(obj);
    //       // svg.center();
    //       svgg.set({
    //         top: 5,
    //         left: 5,
    //         width: 400,
    //         height: 400,
    //         scaleX: (canvas.width - 10) / 400,
    //         scaleY: (canvas.height - 10) / 400
    //       });
    //       canvas.renderAll();
    console.log("intialization > ");
    // UseEffect's cleanup function
    // return () => {
    //   canvas.dispose();
    // };
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
        canvas.fire("object:modified");
      });
    }
  });

  // useEffect(()=>{
  //   if(objects){
  //     var svgg = fabric.util.groupSVGElements(objects);
  //         // svg.center();
  //         svgg.set({
  //           top: 5,
  //           left: 5,
  //           width: 400,
  //           height: 400,
  //           scaleX: (canvas.width - 10) / 400,
  //           scaleY: (canvas.height - 10) / 400
  //         });
  //         canvas.renderAll();
  //   }
  // },[objects])

  //add Icon
  useEffect(() => {
    if (canvas && svgLogo) {
      let icon = new fabric.Path(svgLogo);
      icon.name = "icone" + 1;
      icon.id = "icon" + count;
      setCount((count) => count + 1);
      canvas.add(icon);
      icon.center();
      canvas.renderAll();
      console.log("Canvas > ", canvas.toSVG());
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
      const canv = document.getElementById("a");
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
      svgText !== textProp.current &&
      canvas &&
      textProp &&
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
      console.log("FontFamily Comparison > ", selectedObj.fontFamily);

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
      svgText !== textProp.current &&
      canvas &&
      textProp &&
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
      console.log("undo&redo in svgText modifier");
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
        e.target !== textId,
        "textid > ",
        textId,
        " Get Active object is>>>  ",
        e.target
      );
      // setHidden(false);
      console.log("settextId render");
      settextId(e.target);
    }
  }

  function handleCleared() {
    console.log("handleCleared render");
    // setHidden(false);
    settextId(null);
    setObjectSelection(false);
  }

  useEffect(() => {
    if (canvas) {
      console.log("useEffect rerendering");
      canvas.on({
        "selection:updated": handleSelection,
        "selection:created": handleSelection,
        "selection:cleared": handleCleared,
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
        var object = fabric.util.object.clone(activeObj);

        object.title = object.title + "_copy" + count;
        object.id = object.id + count;
        object.set("top", object.top + 10);
        object.set("left", object.left + 10);

        canvas.add(object);
      });
      canvas.discardActiveObject(activeObj);
      setCount(count + 2);
      canvas.renderAll();
    } else if (activeObj) {
      console.log("Select element");
      var object = fabric.util.object.clone(activeObj);
      canvas.discardActiveObject(activeObj);

      object.title = object.title + "_copy" + count;
      object.id = object.id + count;
      object.set("top", object.top + 10);
      object.set("left", object.left + 10);
      setCount(count + 2);
      canvas.add(object);
      canvas.renderAll();
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
      obj && canvas.remove(obj);
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
        saveAs(
          new Blob([canvas.toSVG()], { type: "image/svg+xml" }),
          `logo.svg`
        );
        // var json = canvas.toJSON();
        // saveAs(
        //   new Blob([JSON.stringify(json)], { type: "txt/JSON" }),
        //   "name.JSON"
        // );
        setDownload(null);
      }
    }
  }, [download]);

  useEffect(() => {
    console.log("Render >> undoredo");
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
    }
  };
  const funRedo = () => {
    if (canvas.historyRedo.length > 0) {
      canvas.redo();
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
        // spacing={0}
        // direction="column"
        // alignItems="center"
        // justifyContent="center"
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

import React from "react";
import { useStyle } from "./Leftsidebarstyle";
import SearchIcon from "@material-ui/icons/Search";
import TitleIcon from "@material-ui/icons/Title";
import AllOutIcon from "@material-ui/icons/AllOut";
import TextureIcon from "@material-ui/icons/Texture";
import { Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
const Leftsidebar = ({ setContent, setIconType }) => {
  const classes = useStyle();
  return (
    <div className={classes.leftsidebar}>
      <Link className={classes.search}>
        <Tabs className={classes.search}>
          <Tab
            className={classes.icon}
            label="ICON"
            icon={<SearchIcon className={classes.iconname} />}
            onClick={() => {
              setContent("icon");
              setIconType(null);
            }}
          />
        </Tabs>
      </Link>
      <Link className={classes.search}>
        <Tabs className={classes.search}>
          <Tab
            className={classes.icon}
            label="TEXT"
            icon={<TitleIcon className={classes.iconname} />}
            onClick={() => {
              setContent("text");
              setIconType(null);
            }}
          />
        </Tabs>
      </Link>
      <Link className={classes.search}>
        <Tabs className={classes.search}>
          <Tab
            className={classes.icon}
            label="SHAPE"
            icon={<AllOutIcon className={classes.iconname} />}
            onClick={() => {
              setContent("shape");
              setIconType(null);
            }}
          />
        </Tabs>
      </Link>
      <Link className={classes.search}>
        <Tabs>
          <Tab
            className={classes.backgroundtext}
            label="BKGROUND"
            icon={<TextureIcon className={classes.iconname} />}
            onClick={() => {
              setContent("background");
              setIconType(null);
            }}
          />
        </Tabs>
      </Link>
    </div>
  );
};

export default Leftsidebar;

import {
  Grid,
  Card,
  CardActionArea,
  Divider,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import { useStyle } from "./RightsidebarStyle";
import logoService from "../../../services/Logos";

import { Link } from "react-router-dom";
// import { Logoos } from "../../LogoSubCategory/DumyData";
import axios from "axios";

const Rightsidebar = ({ setLogo, catName, search }) => {
  const classes = useStyle();
  const [Logoos, setLogoos] = React.useState([]);
  // console.log("Logoos > ", Logoos);
  const getLogos = () => {
    logoService
      .getLogos()
      .then((data) => {
        setLogoos(data);
        console.log("Response Logos>> ", data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  React.useEffect(() => {
    getLogos();
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={classes.grid}
      >
        {Logoos.map((logoo, index) => {
          return catName ? (
            logoo.category === catName ? (
              search ? (
                logoo.name.toLowerCase().includes(search.toLowerCase()) ? (
                  <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                    <Link
                      to={`/selectlogo/${logoo.category}/${logoo._id}`}
                      className={classes.cardlink}
                    >
                      <Card
                        onClick={() => {
                          setLogo(logoo);
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            image={`data:image/svg+xml;base64,${btoa(
                              unescape(encodeURIComponent(logoo.logoSvg))
                            )}`}
                            className={classes.media}
                          />
                          <Divider />
                        </CardActionArea>
                      </Card>
                    </Link>
                  </Grid>
                ) : (
                  ""
                )
              ) : (
                <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                  <Link
                    to={`/selectlogo/${logoo.category}/${logoo._id}`}
                    className={classes.cardlink}
                  >
                    <Card
                      onClick={() => {
                        setLogo(logoo);
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          image={`data:image/svg+xml;base64,${btoa(
                            unescape(encodeURIComponent(logoo.logoSvg))
                          )}`}
                          className={classes.media}
                        />
                        <Divider />
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              )
            ) : (
              ""
            )
          ) : search ? (
            logoo.name.toLowerCase().includes(search.toLowerCase()) ? (
              <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                <Link
                  to={`/selectlogo/${logoo.category}/${logoo._id}`}
                  className={classes.cardlink}
                >
                  <Card
                    onClick={() => {
                      setLogo(logoo);
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        image={`data:image/svg+xml;base64,${btoa(
                          unescape(encodeURIComponent(logoo.logoSvg))
                        )}`}
                        className={classes.media}
                      />
                      <Divider />
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ) : (
              ""
            )
          ) : (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
              <Link
                to={`/selectlogo/${logoo.category}/${logoo._id}`}
                className={classes.cardlink}
              >
                <Card
                  onClick={() => {
                    setLogo(logoo);
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      image={`data:image/svg+xml;base64,${btoa(
                        unescape(encodeURIComponent(logoo.logoSvg))
                      )}`}
                      className={classes.media}
                    />
                    <Divider />
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Rightsidebar;

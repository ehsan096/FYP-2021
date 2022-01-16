import {
  Grid,
  Card,
  CardActionArea,
  Divider,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import { useStyle } from "./RightsidebarStyle";

import { Link } from "react-router-dom";

const Rightsidebar = ({ logos, setLogo, catName, search }) => {
  const classes = useStyle();

  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        // style={{ overflowY: "auto" }}
        className={classes.grid}
      >
        {logos.map((logoo, index) => {
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

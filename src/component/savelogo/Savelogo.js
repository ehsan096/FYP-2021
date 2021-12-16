import {
  Button,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  CardContent,
} from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useStyle } from "./SavelogoStyle";
import UserService from "../../services/UserService";
import { useHistory } from "react-router-dom";

const Savelogo = ({ setLogo }) => {
  const classes = useStyle();
  const [userLogo, setUserLogo] = React.useState(null);
  const [update, setUpdate] = React.useState(false);
  const history = useHistory();

  const GetUserLogo = async () => {
    let user = await UserService.getSingleUser(
      await UserService.getLoggedInUser()._id
    );
    setUserLogo(user.logos);
  };
  React.useEffect(() => {
    GetUserLogo();
  }, [update]);
  const deleteLogo = async (e, logo) => {
    e.preventDefault();
    UserService.deleteUserLogo(await UserService.getLoggedInUser()._id, logo)
      .then((res) => {
        console.log("response > ", res);
      })
      .catch((err) => {
        console.log("error > ", err);
      });
    setUpdate(!update);
  };
  return (
    <>
      <Navbar />
      <div className={classes.savelogodiv}>
        <Container>
          <Grid container spacing={2}>
            {userLogo
              ? userLogo.map((logo) => (
                  <Grid item lg={3} className={classes.savelogocontainer}>
                    <Card>
                      <CardMedia
                        image={`data:image/svg+xml;base64,${btoa(
                          unescape(encodeURIComponent(logo.logoSvg))
                        )}`}
                        className={classes.savelogoimage}
                      />
                      <Divider />
                      <CardContent>
                        <div className={classes.savelogobutton}>
                          <Button
                            className={classes.editbutton}
                            variant="contained"
                            size="small"
                            onClick={() => {
                              setLogo(logo);
                              history.push(
                                `/selectlogo/${logo.category}/${logo._id}`
                              );
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            className={classes.deletebutton}
                            variant="contained"
                            size="small"
                            onClick={(e) => deleteLogo(e, logo)}
                          >
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              : ""}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Savelogo;

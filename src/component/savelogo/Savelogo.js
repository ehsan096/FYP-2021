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
import { toast } from "react-toastify";

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
        toast.success(res, {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("response 36> ", res);

        setUpdate(!update);
      })
      .catch((err) => {
        toast.err(err.response.data, {
          position: toast.POSITION.TOP_CENTER,
        });

        setUpdate(!update);
      });
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

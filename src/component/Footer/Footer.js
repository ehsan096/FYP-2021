import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import React from "react";
import { useStyle } from "./FooterStyle";
const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item xs={6} sm={4} md={3} className={classes.grid}>
            <Typography>PLATFORM</Typography>
            <Typography className={classes.web}>
              <LanguageIcon />
              <Link className={classes.links}>For Web</Link>
            </Typography>
            <Typography className={classes.desktop}>
              <DesktopWindowsIcon />
              <Link className={classes.links}>For Desktop</Link>
            </Typography>
            <Typography className={classes.mobile}>
              <PhoneIphoneIcon />
              <Link className={classes.links}>For Mobile</Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3} className={classes.grid}>
            <Typography>RESOURCES</Typography>

            <Typography className={classes.link}>
              <Link className={classes.links}>FEATURES</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link className={classes.links}>SUPPORT</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link className={classes.links}>BLOG</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link className={classes.links}>CONTACT</Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3} className={classes.grid}>
            <Typography> COMPANY</Typography>
            <Typography className={classes.link}>
              <Link className={classes.links}>ABOUT</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link className={classes.links}>PRICING</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link className={classes.links}>AFFILIATE</Link>
            </Typography>
            <Typography className={classes.link}>
              <Link className={classes.links}>PRIVACY</Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3} className={classes.grid}>
            <Typography>SOCIAL LINKS</Typography>
            <FacebookIcon className={classes.sociallink} />
            <YouTubeIcon className={classes.sociallink} />
            <InstagramIcon className={classes.sociallink} />
            <PinterestIcon className={classes.sociallink} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

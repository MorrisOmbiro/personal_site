import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 21,
    marginRight: theme.spacing(8),
  }, about: {
    marginRight: theme.spacing(4)
  }
  
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <NavLink
              to="/"
              style={{ color: "white", textDecoration: "inherit", fontSize: 33 }}
            >
              m<b><span style={{color: "#2CC1D2"}}>|</span>O</b>
            </NavLink>
          </Typography>

          { <Typography variant="button" className={classes.about}>
            <NavLink
              to="#about"
              style={{ textDecoration: "inherit", color: "#ffffff", fontFamily: "Segoe UI", fontSize: "1.5em" }}
            >
              About
            </NavLink>
          </Typography> }
        </Toolbar>
      </AppBar>
    </div>
  );
}

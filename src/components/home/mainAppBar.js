import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 21,
    marginRight: theme.spacing(8),
  },
  about: {
    marginRight: theme.spacing(4),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        clasName="animate-appbar"
        position="static"
        style={{ background: "#000000" }}
      >
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "inherit",
                fontSize: 33,
              }}
            >
              m
              <b>
                <span style={{ color: "#2CC1D2" }}>|</span>O
              </b>
            </NavLink>
          </Typography>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{
              textDecoration: "inherit",
              color: "#D3DF90",
              fontSize: "1.3em",
              marginRight: 15,
            }}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{
              textDecoration: "inherit",
              color: "#D3DF90",
              fontSize: "1.3em",
              marginRight: 15,
            }}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="languages"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{
              textDecoration: "inherit",
              color: "#D3DF90",
              fontSize: "1.3em",
              marginRight: 15,
            }}
          >
            Languages
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
